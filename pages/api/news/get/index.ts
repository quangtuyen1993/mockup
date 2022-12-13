import { DataResult, success } from '../../../../lib/data_result';
import { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';
import { generateList } from '../../../../lib/utility';
import { withSafeRequest } from '../../../../lib/with_safe_request';

type New = {
    id: string;
    title: string;
    content: string;
    image_list: string[];
    start_date: string;
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<New>>
) {
    res.status(200).json(success(_new()));
}
function _new(): New {
    const images = generateList<string>(faker.image.sports);
    return {
        id: faker.datatype.number().toString(),
        title: faker.lorem.word(),
        content: faker.lorem.paragraphs(),
        image_list: images,
        start_date: '2022-07-12 00:00:00'
    };
}

export default withSafeRequest(handler)
