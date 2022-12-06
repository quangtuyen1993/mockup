import {faker} from "@faker-js/faker";

 function purchase(){
  return{
    id:faker.datatype.number(),
    createAt:faker.date.recent(),
    total_amount:faker.finance.amount(),
    point:faker.finance.account()
  }
 }

export default function handler(req, res) {
  const USERS= [];
  Array.from({length:10}).forEach(()=>USERS.push(purchase()));
  var {page,limit}= req.query;
    res.status(200).json({
      page:page??1,
      data:USERS,
      total:30
    });
  }