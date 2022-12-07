import { faker } from "@faker-js/faker";
import { max, min } from "date-fns";
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
        spending: faker.datatype.number(20,80),
        expired_at: faker.date.future(),
        min:faker.datatype.number(0,10),
        max:faker.datatype.number(90,100),
  }
    res.status(200).json(okMessage(userMe));
  }