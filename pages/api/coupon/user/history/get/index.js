import { faker } from "@faker-js/faker";
import okMessage from "../../../../../../lib/okmessage";

export default function handler(req, res) {
    res.status(200).json(okMessage(_new()))
}

function _new (){
    return {
        id: faker.datatype.number(),
        name: faker.company.name(),
        description: faker.lorem.paragraph(),
        terms_conditions: faker.lorem.paragraph(50),
        image: faker.image.animals(),
        status: 0,
        used_at: faker.date.recent(),
        expired_at: faker.date.future(),
    }
}