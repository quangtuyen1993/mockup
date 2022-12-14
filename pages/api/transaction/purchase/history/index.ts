import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { generateList } from '../../../../../lib/utility';
import { successPaging } from '../../../../../lib/data_result';
import { withSafeRequest } from '../../../../../lib/with_safe_request';

type Purchase = {
    id: number;
    created_at: Date;
    total_amount: number;
    point: number;
    store_name: string;
};

function purchase(): Purchase {
    return {
        id: faker.datatype.number(),
        created_at: faker.date.recent(),
        total_amount: faker.datatype.number(100000),
        point: faker.datatype.number(100000),
        store_name: faker.animal.bird()
    };
}

function handler(req: NextApiRequest, res: NextApiResponse) {
    var data = generateList<Purchase>(purchase);
    res.status(200).json(successPaging(data, req));
}

export default withSafeRequest(handler)

