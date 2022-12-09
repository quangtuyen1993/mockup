import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { error, success } from '../../../../../../lib/DataResult';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);
    if (req.body == 123456) {
        const data = {
            verification_code: faker.datatype.uuid()
        };
        res.status(200).json(success(data));
    } else {
        res.status(400).json(error('Wrong OTP'));
    }
}
