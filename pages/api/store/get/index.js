import { faker } from "@faker-js/faker";
import okMessage, { okMessagePaging } from "../../../../lib/okmessage";
export default function handler(req, res) {
    res.status(200).json(okMessage(store()));
}
 function store (){
    return {
        id: faker.datatype.number(),
        name: faker.finance.accountName(),
        district_name: faker.address.state(),
        status: faker.datatype.number({min:0,max:1}),
        banner: [
          faker.image.fashion()
        ],
        phone_no: faker.phone.number(),
        address: faker.address.streetAddress(),
        closet_mtr: faker.name.fullName(),
        opening_hour: [
          {
            weekday: faker.date.weekday(),
            service_hour: "7h am",
            closed_hour: "8h am"
          }
        ],
        last_order: "string",
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude()
    }
}