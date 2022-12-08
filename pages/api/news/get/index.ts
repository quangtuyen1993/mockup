import { DataResult, success } from './../../../../lib/DataResult';
import { NextApiRequest, NextApiResponse } from 'next';
import { faker } from "@faker-js/faker";
import { generateList } from '../../../../lib/Utils';

type New={
    id:number,
    title:string,
    content:string,
    image:string[]
}

export default function handler(req:NextApiRequest, res:NextApiResponse<DataResult<New>>) {
    res.status(200).json(success(_new()));
}
function _new ():New{
    const images=generateList<string>(faker.image.sports)
    return {
        id: faker.datatype.number(),
        title: faker.lorem.word(),
        content:faker.lorem.paragraphs(),
        image: images
    }
}