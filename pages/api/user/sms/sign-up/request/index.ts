import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../../node_modules/next/dist/shared/lib/utils.d';
import { success } from '../../../../../../lib/DataResult';

type Otp = {
    otp: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const otp: Otp = {
        otp: '123456'
    };
    res.status(200).json(success(otp));
}
