import { faker } from "@faker-js/faker";
import { okMessagePaging } from "../../../../lib/okmessage";

export default function handler(req, res) {
    const newList=[];
    const {page}=req.query;
    Array.from({length:10}).forEach(()=>newList.push(_new()))
    res.status(200).json(okMessagePaging(newList,page));
}
 function _new (){
    return {
        id: faker.datatype.number(),
        title: faker.lorem.word(),
        image: faker.image.fashion()
    }
}