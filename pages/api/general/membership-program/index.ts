import { faker } from '@faker-js/faker';
import { generateList } from '../../../../lib/utility';
import { DataResult, success } from '../../../../lib/data_result';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSafeRequest } from '../../../../lib/with_safe_request';

type Program = {
    title: string;
    content: string;
    image_list: string[];
};

function handler(
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

export default withSafeRequest(handler)
