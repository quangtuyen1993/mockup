import { faker } from '@faker-js/faker';
import { generateList } from '../../../../lib/Utils';
import { DataResult, success } from '../../../../lib/DataResult';
import { NextApiRequest, NextApiResponse } from 'next';

type Program = {
    title: string;
    content: string;
    image_list: string[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<Program>>
) {
    res.status(200).json(success(getUser()));
}

function getUser(): Program {
    var images = generateList<string>(faker.image.food);
    return {
        title: faker.company.name(),
        content: faker.lorem.paragraphs(30),
        image_list: images
    };
}
