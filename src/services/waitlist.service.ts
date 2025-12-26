import { getDataSource } from "../lib/data-source";
import { WaitlistUser } from "../entities/WaitlistUser";

export class WaitlistService {
  static async upsertUser(data: {
    firstName: string;
    lastName: string;
    email: string;
    industry: string;
  }) {
    console.log("Service: Upserting user", data.email);
    const dataSource = await getDataSource();
    console.log("Service: DataSource initialized");
    const repository = dataSource.getRepository(WaitlistUser);

    let user = await repository.findOneBy({ email: data.email });
    console.log("Service: Existing user found:", !!user);

    if (user) {
      // Update existing user
      Object.assign(user, data);
      const saved = await repository.save(user);
      console.log("Service: User updated");
      return saved;
    } else {
      // Create new user
      user = repository.create(data);
      const saved = await repository.save(user);
      console.log("Service: New user created");
      return saved;
    }
  }

  static async getWaitlists(page: number = 1, limit: number = 10, search: string = "") {
    const dataSource = await getDataSource();
    const repository = dataSource.getRepository(WaitlistUser);

    const skip = (page - 1) * limit;

    let queryBuilder = repository.createQueryBuilder("waitlistUser");

    if (search) {
      queryBuilder = queryBuilder.where(
        "(waitlistUser.firstName LIKE :search OR waitlistUser.lastName LIKE :search OR waitlistUser.email LIKE :search OR waitlistUser.industry LIKE :search)",
        { search: `%${search}%` }
      );
    }

    const [data, total] = await queryBuilder
      .orderBy("waitlistUser.createdAt", "DESC")
      .skip(skip)
      .take(limit)
      .getManyAndCount();

    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
