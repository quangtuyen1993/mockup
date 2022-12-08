import {faker} from "@faker-js/faker";
import okMessage, { okMessagePaging } from "../../../../../lib/okmessage";

 function purchase(){
  return{
    id:faker.datatype.number(),
    created_at:faker.date.recent(),
    total_amount:faker.datatype.number(100000),
    point:faker.datatype.number(100000),
    store_name:faker.animal.bird()

  }
 }

export default function handler(req, res) {
  const USERS= [];
  Array.from({length:10}).forEach(()=>USERS.push(purchase()));

  var {page,limit}= req.query;
    res.status(200).json( okMessagePaging(USERS,page));
  }