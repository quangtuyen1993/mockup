import { type } from 'os';
import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { DataResult, successPaging } from '../../../../lib/data_result';
import { generateList } from '../../../../lib/utility';
import { withSafeRequest } from '../../../../lib/with_safe_request';

type New = {
    id: string;
    title: string;
    image: string;
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<New>>
) {
    const newList = generateList<New>(_new);
    res.status(200).json(successPaging(newList, req));
}

function _new() {
    return {
        id: faker.datatype.number().toString(),
        title: faker.lorem.word(),
        image: faker.image.fashion()
    };
}

export default withSafeRequest(handler)
