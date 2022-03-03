import "reflect-metadata";
import { Database } from "./database";
import { createUserRepository, createUserService } from "./users";

async function main() {
  const conn = await new Database().getConnection();
  const userRepo = createUserRepository(conn);
  const userService = createUserService(userRepo);
  const users = await userService.listUsers();
  console.log(users);
}

main().catch(console.error);
