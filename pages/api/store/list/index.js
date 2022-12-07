import { faker } from "@faker-js/faker";
import okMessage, { okMessagePaging } from "../../../../lib/okmessage";
export default function handler(req, res) {
    const stores=[];
    Array.from({length:10}).forEach(()=>stores.push(store()))
    res.status(200).json(okMessagePaging(stores));
}
 function store (){
    return {
        id: faker.datatype.number(),
        name: faker.name.fullName(),
        district_name: faker.address.country(),
        thumbnail: faker.image.avatar(),
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude()
    }
}