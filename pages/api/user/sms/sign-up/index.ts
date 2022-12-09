import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { onLoginSuccess } from '../../../../../lib/data_result';
import { withSafeRequest } from '../../../../../lib/with_safe_request';

function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(onLoginSuccess());
}

export default withSafeRequest(handler)

