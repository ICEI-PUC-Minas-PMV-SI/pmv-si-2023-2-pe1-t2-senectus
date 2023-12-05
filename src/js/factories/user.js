import { UUID } from "../utils/randomUUID.js"
import { User } from "../entities/user.js"

export function userFactory({
  name = undefined, 
  email = undefined, 
  password = undefined, 
  job = undefined, 
  state = undefined, 
  state_abbr = undefined,
  city = undefined,
  city_abbr = undefined,
  short_description = undefined,
  value = undefined,
  id = undefined,
  createdAt = undefined
}) {
  return new User({
    id: id ?? UUID.genV4(),
    name: name ?? 'User',
    email: email ?? 'user@email.com',
    password: password ?? '123456',
    job: job ?? 'medic',
    state: state ?? 'Minas Gerais',
    state_abbr: state_abbr ?? 'MG',
    city: city ?? 'Belo Horizonte',
    city_abbr: city_abbr ?? 'BH',
    value: value ?? 115,
    short_description: short_description ?? 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur.',
    phone_number: 3125256565,
    createdAt: createdAt ?? new Date(),
  });
}
