import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { DataResult, successPaging } from '../../../../lib/DataResult';
import { generateList } from '../../../../lib/Utils';

type New = {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    point: number;
};

function createNew(): New {
    return {
        id: faker.datatype.number(),
        name: faker.lorem.word(),
        description: faker.lorem.lines(3),
        thumbnail: faker.image.animals(),
        point: faker.datatype.number(1000)
    };
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<New>>
) {
    const result = generateList<New>(createNew);
    res.status(200).json(successPaging(result, req));
}
