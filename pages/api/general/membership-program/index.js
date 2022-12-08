import { faker } from "@faker-js/faker";
import okMessage from "../../../../lib/okmessage";


export default function handler(req, res) {
    res.status(200).json(okMessage(getUser()));
}

function getUser(){
    const images=[];
    Array.from({length:10}).forEach(()=>images.push(faker.image.food()))
    return  {
        "title": faker.company.name(),
        "content": faker.lorem.slug(1000),
        "image_list": images
    }
}