import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { successPaging } from '../../../../../lib/data_result';
import { generateList } from '../../../../../lib/utility';
import { withSafeRequest } from '../../../../../lib/with_safe_request';
type Spending = {
    id: number;
    created_at: Date;
    point: number;
    coupon_name: string;
};

function spending(): Spending {
    return {
        id: faker.datatype.number(),
        created_at: faker.date.recent(),
        point: faker.datatype.number(100000),
        coupon_name: faker.random.word()
    };
}

function handler(req: NextApiRequest, res: NextApiResponse) {
    var data = generateList<Spending>(spending);
    res.status(200).json(successPaging(data, req));
}

export default withSafeRequest(handler)

