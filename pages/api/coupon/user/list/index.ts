import { DataResult, successPaging } from '../../../../../lib/data_result';
import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { generateList } from '../../../../../lib/utility';
import { withSafeRequest } from '../../../../../lib/with_safe_request';

type Coupon = {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    point: number;
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<Coupon>>
) {
    const result: Coupon[] = generateList(createCoupon);
    res.status(200).json(successPaging(result, req));
}

function createCoupon(): Coupon {
    return {
        id: faker.datatype.number(),
        name: faker.lorem.lines(),
        description: faker.lorem.paragraphs(),
        thumbnail: faker.image.avatar(),
        point: faker.datatype.number(1000)
    };
}

export default withSafeRequest(handler)
