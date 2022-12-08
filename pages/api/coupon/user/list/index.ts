import { DataResult, successPaging } from './../../../../../lib/DataResult';
import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { generateList } from '../../../../../lib/Utils';

type Coupon = {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    point: number;
};

export default function handler(
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
