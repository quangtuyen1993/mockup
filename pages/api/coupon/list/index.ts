import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { DataResult, successPaging } from '../../../../lib/DataResult';
import { generateList } from '../../../../lib/Utils';

type New = {
    id: number;
    name: String;
    description: String;
    thumbnail: String;
    point: number;
};

function createNew(): New {
    return {
        id: faker.datatype.number(),
        name: faker.lorem.lines(),
        description: faker.lorem.paragraphs(),
        thumbnail: faker.image.avatar(),
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
