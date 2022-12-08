import { NextApiRequest, NextApiResponse } from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from "@faker-js/faker";
import { DataResult, success } from '../../../../../lib/DataResult';

type User={
    id: number,
        name: String,
        description: String,
        terms_conditions: String,
        image: String,
        expired_at: Date,
        point: number,
        qrcode: String
}

export default function handler(req:NextApiRequest, res:NextApiResponse<DataResult<User>>) {
    res.status(200).json(success(_new()))
}

function _new ():User{
    return {
        id: faker.datatype.number(),
        name: faker.company.name(),
        description: faker.lorem.paragraph(),
        terms_conditions: faker.lorem.paragraphs(300),
        image: faker.image.animals(),
        expired_at: faker.date.future(),
        point: faker.datatype.number(),
        qrcode: faker.lorem.sentence()
    }
}