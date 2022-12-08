import { faker } from "@faker-js/faker";
import okMessage, { okMessagePaging } from "../../../../lib/okmessage";
export default function handler(req, res) {
    res.status(200).json(okMessage(_new()));
}
 function _new (){
    const images=[]
    Array.from({length:10}).forEach(()=>images.push(faker.image.fashion()))
    return {
        id: faker.datatype.number(),
        title: faker.lorem.word(),
        content:faker.lorem.paragraphs(),
        image: images
    }
}