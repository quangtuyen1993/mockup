import { faker } from "@faker-js/faker";
import okMessage, { okMessagePaging } from "../../../../lib/okmessage";


export default function handler(req, res) {
    const about_us={
        title: faker.lorem.lines(),
        content: faker.lorem.paragraph(),
        image: faker.image.animals(),
        our_website: faker.internet.domainName(),
        contact_us: faker.internet.email(),
        facebook: faker.internet.userAgent(),
        instagram: faker.internet.domainName()
    }
    res.status(200).json(okMessage(about_us));
}