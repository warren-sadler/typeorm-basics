import { Connection } from "typeorm";
import { User } from "./models/User";

interface UserService {
  listUsers(): Promise<User[]>;
}

export function createUserRepository(conn: Connection) {
  return {
    async list() {
      const users = conn.getRepository(User);
      return await users.find();
    },
  };
}

export function createUserService(
  repo: ReturnType<typeof createUserRepository>
): UserService {
  return {
    async listUsers() {
      return await repo.list();
    },
  };
}
