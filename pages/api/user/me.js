import { faker } from "@faker-js/faker";
import okMessage from "../../../lib/okmessage";

export default function handler(req, res) {
  const userMe={
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        district_id: faker.datatype.number(10),
        gender: faker.datatype.number(1),
        age_group: faker.datatype.number(30),
        phone_no: faker.phone.phoneNumber(),
        birthday: faker.date.birthdate(),
        created_at: faker.date.past(),
        member_no: faker.datatype.number(),
        membership_name: faker.finance.accountName(),
        point: faker.datatype.number(),
        spending: faker.datatype.number(),
        expired_at: faker.date.future(),
        min:faker.datatype.number(10),
        max:faker.datatype.number(100),
  }
    res.status(200).json(okMessage(userMe));
  }