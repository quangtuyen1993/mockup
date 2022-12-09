import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { generateList } from '../../../../../lib/utility';
import { DataResult, successPaging } from '../../../../../lib/data_result';
import { withSafeRequest } from '../../../../../lib/with_safe_request';

type History = {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    status: number;
    used_at: Date;
    expired_at: Date;
};

function handler(
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

export default withSafeRequest(handler)

