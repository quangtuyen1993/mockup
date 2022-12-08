import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { generateList } from '../../../../../lib/Utils';
import { DataResult, successPaging } from '../../../../../lib/DataResult';

type History = {
    id: number;
    name: String;
    description: String;
    thumbnail: String;
    status: number;
    used_at: Date;
    expired_at: Date;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<History>>
) {
    const result = generateList<History>(_new);
    res.status(200).json(successPaging(result, req));
}

function _new(): History {
    return {
        id: faker.datatype.number(),
        name: faker.animal.bear(),
        description: faker.lorem.paragraph(),
        thumbnail: faker.image.animals(),
        status: 0,
        used_at: faker.date.recent(),
        expired_at: faker.date.future()
    };
}
