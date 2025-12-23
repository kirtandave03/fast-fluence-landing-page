import { EntitySchema } from "typeorm";

export class WaitlistUser {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  industry!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

export const WaitlistUserSchema = new EntitySchema<WaitlistUser>({
  name: "WaitlistUser",
  target: WaitlistUser,
  tableName: "waitlist_users",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    lastName: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    email: {
      type: "varchar",
      length: 255,
      unique: true,
    },
    industry: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    createdAt: {
      type: "timestamp",
      createDate: true,
    },
    updatedAt: {
      type: "timestamp",
      updateDate: true,
    },
  },
});
