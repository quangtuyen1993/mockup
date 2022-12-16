import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { DataResult, success } from '../../../../../lib/data_result';
import { withSafeRequest } from '../../../../../lib/with_safe_request';
import { termsConditions } from '../../../../../lib/utility';
import { randomECouponType } from '../../../../../model/ecoupon_type';

type User = {
    id: number;
    name: string;
    description: string;
    terms_conditions: string;
    image: string;
    expired_at: Date;
    point: number;
    qrcode: string;
    type: string;
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<User>>
) {
    res.status(200).json(success(_new()));
}

function _new(): User {
    return {
        id: faker.datatype.number(),
        name: faker.company.name(),
        description: faker.lorem.paragraph(),
        terms_conditions: termsConditions(),
        image: faker.image.animals(),
        expired_at: faker.date.future(),
        point: faker.datatype.number({min:0,max:100}),
        qrcode: faker.lorem.sentence(),
        type: randomECouponType()
    };
}

export default withSafeRequest(handler);
