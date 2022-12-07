import { faker } from "@faker-js/faker";
import okMessage from "../../../../lib/okmessage";

export default function handler(req, res) {
    const support={
        title: faker.lorem.words(),
        slug: faker.lorem.lines(),
        content: faker.lorem.paragraphs(2)
    }
    res.status(200).json(okMessage(support));
}
