import { DataResult } from '../../../../lib/data_result';
import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { success } from '../../../../lib/data_result';
import { withSafeRequest } from '../../../../lib/with_safe_request';

const handler=(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<News>>
)=> res.status(200).json(success(createNews()));

type News = {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    point: number;
    terms_conditions: string;
    image: string;
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

export default withSafeRequest(handler);
