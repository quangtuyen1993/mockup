import {faker} from "@faker-js/faker";
import okMessage from "../../../../../lib/okmessage";
function spending(){
    return {
        id:faker.datatype.number(),
        createAt:faker.date.recent(),
        point :faker.finance.amount(),
        couponName:faker.random.word()
    }
  }

export default function handler(req, res) {
  const USERS= [];  
  Array.from({length:10}).forEach(()=>USERS.push(spending()));
  var {page,limit}= req.query;
    res.status(200).json(okMessage({
      page:page??1,
      data:USERS,
      total:30
    }));
  }