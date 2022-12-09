import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { success } from '../../../../lib/data_result';
import { withSafeRequest } from '../../../../lib/with_safe_request';

type NewPurchase = {
    point: number;
    expired_at: Date;
};

function handler(req: NextApiRequest, res: NextApiResponse) {
    const newPurchase: NewPurchase = {
        point: faker.datatype.number(),
        expired_at: faker.date.future()
    };
    res.status(200).json(success(newPurchase));
}

export default withSafeRequest(handler)
