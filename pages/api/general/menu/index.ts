import { NextApiRequest, NextApiResponse } from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from "@faker-js/faker";
import { DataResult, success } from '../../../../lib/DataResult';
import { generateList } from '../../../../lib/Utils';

type Menu= {
    title:string,
    content:string,
    image_list:string[]
}

export default function handler(req:NextApiRequest, res:NextApiResponse<DataResult<Menu>>) {
    const images=  generateList<string>(faker.image.food)
    const user = {
        title: faker.company.name(),
        content: faker.lorem.paragraph(10),
        image_list:images
    }
    res.status(200).json(success(user));
}