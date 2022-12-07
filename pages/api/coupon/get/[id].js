import { faker } from "@faker-js/faker";
import okMessage, { okMessagePaging } from "../../../../lib/okmessage";

export default function handler(req, res) {
    res.status(200).json(okMessage(_new()))
}

function _new (){
    return {
        id: 0,
        name: faker.lorem.lines(),
        description: faker.lorem.paragraphs(),
        thumbnail: faker.image.avatar(),
        point: faker.datatype.number(1000),
        image:faker.image.fashion(),
        terms_conditions: faker.lorem.paragraphs(20),
    }
}