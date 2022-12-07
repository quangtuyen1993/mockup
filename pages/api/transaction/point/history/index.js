import {faker} from "@faker-js/faker";
import okMessage, { okMessagePaging } from "../../../../../lib/okmessage";
function spending(){
    return {
        id:faker.datatype.number(),
        createAt:faker.date.recent(),
        point :faker.datatype.number(100000),
        couponName:faker.random.word()
    }
  }

export default function handler(req, res) {
  const USERS= [];  
  Array.from({length:10}).forEach(()=>USERS.push(spending()));
  var {page,limit}= req.query;
    res.status(200).json(okMessagePaging(USERS,page));
  }