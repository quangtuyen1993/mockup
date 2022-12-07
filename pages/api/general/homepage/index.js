import { faker } from "@faker-js/faker";
import okMessage, { okMessagePaging } from "../../../../lib/okmessage";


export default function handler(req, res) {
    const data={ banner:createBanner(),news_list:createNewList()}
    res.status(200).json(okMessagePaging(data));
}


function createBanner(){
    const banners=[]
    const banner={
        id:faker.datatype.number(),
        image:faker.image.city()
    }
    Array.from({length:3}).forEach(()=>banners.push(banner))
    return banners;
}

function createNewList(){
    const news_list=[]
    const _new={
        id:faker.datatype.number(),
        title:faker.lorem.lines(),
        image:faker.image.city()
    }
    Array.from({length:3}).forEach(()=>news_list.push(_new))
    return news_list;
}