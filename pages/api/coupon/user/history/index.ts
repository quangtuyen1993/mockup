import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { DateOrNull, generateList, randomDate } from '../../../../../lib/utility';
import { DataResult, successPaging } from '../../../../../lib/data_result';
import { withSafeRequest } from '../../../../../lib/with_safe_request';
import { randomECouponType } from '../../../../../model/ecoupon_type';

type History = {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    status: number;
    used_at: DateOrNull;
    expired_at: Date;
    type:string
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
        status: faker.datatype.number({min:0,max:1}),
        used_at: randomDate(faker.date.recent()),
        expired_at: faker.date.future(),
        type: randomECouponType()
    
    };
}

export default withSafeRequest(handler)

