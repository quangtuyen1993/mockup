import { DataResult, success } from './../../../../lib/DataResult';
import { NextApiRequest, NextApiResponse } from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from "@faker-js/faker";

type Support={
    title:string,
    slug:string,
    content:string
}
export default function handler(req:NextApiRequest, res:NextApiResponse<DataResult<Support>>) {
    const support={
        title: faker.lorem.words(),
        slug: faker.lorem.lines(),
        content: faker.lorem.paragraphs(2)
    }
    res.status(200).json(success(support));
}
