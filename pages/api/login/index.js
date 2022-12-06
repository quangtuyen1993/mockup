import {faker} from '@faker-js/faker'
export default function handler(req, res) {
    const user={
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
        fullName: faker.name.fullName(),
        address:faker.address.street()
    
    }
    res.status(200).json(user);
  }