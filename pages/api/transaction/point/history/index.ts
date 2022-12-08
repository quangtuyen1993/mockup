import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { successPaging } from '../../../../../lib/DataResult';
import { generateList } from '../../../../../lib/Utils';
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    var data = generateList<Spending>(spending);
    res.status(200).json(successPaging(data, req));
}
