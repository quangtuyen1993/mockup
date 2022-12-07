import { faker } from "@faker-js/faker";
import okMessage from "../../../../lib/okmessage";


export default function handler(req, res) {
    const images=[]
    Array.from({length:10}).forEach(()=>images.push(faker.image.food()))
    const user = {
            "title": faker.company.name(),
            "content": faker.lorem.paragraph(10),
            "image_list": images
    }
    res.status(200).json(okMessage(user));
}