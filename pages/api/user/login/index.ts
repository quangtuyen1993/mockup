import { NextApiRequest, NextApiResponse } from './../../../../node_modules/next/dist/shared/lib/utils.d';
import {faker} from '@faker-js/faker'
import { success } from '../../../../lib/DataResult';

type User={
    userId:number,
    username:string,
    email:string,
    avatar:string,
    password:string,
    birthdate:Date,
    registeredAt:string,
    fullName:string,
    address:string
}

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    const user:User={
        userId: faker.datatype.number(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.address.state(),
        fullName: faker.name.fullName(),
        address:faker.address.street()
    
    }
    res.status(200).json(success(user));
  }