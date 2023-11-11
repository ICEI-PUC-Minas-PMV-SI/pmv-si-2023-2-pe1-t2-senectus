import { UUID } from "../utils/randomUUID.js"
import { User } from "../entities/user.js"

export function userFactory(
  name = undefined, 
  email = undefined, 
  password = undefined, 
  job = undefined, 
  location = undefined, 
  value = undefined,
  id = undefined,
  createdAt = undefined
) {
  return new User(
	id ?? UUID.genV4(),
	name ?? 'User',
	email ?? 'user@email.com',
	password ?? '123456',
	job ?? 'medic',
	location ?? 'Minas Gerais',
	value ?? 115,
    createdAt ?? new Date()
  );
}
