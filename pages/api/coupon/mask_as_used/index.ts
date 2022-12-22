import { emptySuccess } from '../../../../lib/data_result';
import { DataResult } from '../../../../lib/data_result';
import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { withSafeRequest } from '../../../../lib/with_safe_request';

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<any>>
) {
    res.status(200).json(emptySuccess());
}
export default withSafeRequest(handler)
