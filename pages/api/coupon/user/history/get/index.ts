import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { DataResult, success } from '../../../../../../lib/data_result';
import { withSafeRequest } from '../../../../../../lib/with_safe_request';
import { termsConditions } from '../../../../../../lib/utility';
import { randomECouponType } from '../../../../../../model/ecoupon_type';

type HistoryCoupon = {
    id: number;
    name: string;
    description: string;
    terms_conditions: string;
    image: string;
    status: number;
    used_at: Date;
    expired_at: Date;
    type:String
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<HistoryCoupon>>
) {
    res.status(200).json(success(createHistoryCoupon()));
}

function createHistoryCoupon(): HistoryCoupon {
    return {
        id: faker.datatype.number(),
        name: faker.company.name(),
        description: faker.lorem.paragraph(),
        terms_conditions: termsConditions(),
        image: faker.image.animals(),
        status: 0,
        used_at: faker.date.recent(),
        expired_at: faker.date.future(),
        type:randomECouponType()
    };
}

export default withSafeRequest(handler)
