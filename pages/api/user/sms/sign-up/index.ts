import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { onLoginSuccess } from '../../../../../lib/data_result';
import { withSafeRequest } from '../../../../../lib/with_safe_request';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    await delay(5000);
    res.status(200).json(onLoginSuccess());
}

export default withSafeRequest(handler)

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}