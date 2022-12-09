import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../../node_modules/next/dist/shared/lib/utils.d';
import { success } from '../../../../../../lib/data_result';
import { withSafeRequest } from '../../../../../../lib/with_safe_request';

type Otp = {
    otp: string;
};

function handler(req: NextApiRequest, res: NextApiResponse) {
    const otp: Otp = {
        otp: '123456'
    };
    res.status(200).json(success(otp));
}

export default withSafeRequest(handler)

