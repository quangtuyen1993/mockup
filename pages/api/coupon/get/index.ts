import { DataResult } from './../../../../lib/DataResult';
import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { success } from '../../../../lib/DataResult';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<News>>
) {
    res.status(200).json(success(createNews()));
}

type News = {
    id: number;
    name: String;
    description: String;
    thumbnail: String;
    point: number;
    terms_conditions: String;
    image: String;
};

function createNews(): News {
    return {
        id: 0,
        name: faker.lorem.lines(),
        description: faker.lorem.paragraphs(),
        thumbnail: faker.image.avatar(),
        point: faker.datatype.number(1000),
        image: faker.image.fashion(),
        terms_conditions: faker.lorem.paragraphs(20)
    };
}
