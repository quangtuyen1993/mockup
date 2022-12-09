import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { error, success } from '../../../../../../lib/data_result';
import { withSafeRequest } from '../../../../../../lib/with_safe_request';

function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.body.otp == 123456) {
        const data = {
            verification_code: faker.datatype.uuid()
        };
        res.status(200).json(success(data));
    } else {
        res.status(400).json(error('Wrong OTP'));
    }
}

export default withSafeRequest(handler)
