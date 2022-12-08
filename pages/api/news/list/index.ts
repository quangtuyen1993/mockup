import { type } from 'os';
import { NextApiRequest, NextApiResponse } from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from "@faker-js/faker";
import { DataResult, successPaging } from '../../../../lib/DataResult';
import { generateList } from '../../../../lib/Utils';

type New={
    id: number,
    title:string,
    image:string
}

export default function handler(req:NextApiRequest, res:NextApiResponse<DataResult<New>>) {
    const newList=generateList<New>(_new)
    res.status(200).json(successPaging(newList,req));
}

function _new (){
    return {
        id: faker.datatype.number(),
        title: faker.lorem.word(),
        image: faker.image.fashion()
    }
}