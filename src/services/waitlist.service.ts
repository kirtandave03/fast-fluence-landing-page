import { getDataSource } from "../lib/data-source";
import { WaitlistUser, WaitlistUserSchema } from "../entities/WaitlistUser";

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
    const repository = dataSource.getRepository(WaitlistUserSchema);

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
}
