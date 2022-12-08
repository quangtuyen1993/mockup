import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { success } from '../../../../lib/DataResult';

type NewPurchase = {
    point: number;
    expired_at: Date;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const newPurchase: NewPurchase = {
        point: faker.datatype.number(),
        expired_at: faker.date.future()
    };
    res.status(200).json(success(newPurchase));
}
