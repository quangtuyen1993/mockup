import { emptySuccess } from './../../../../lib/DataResult';
import { DataResult } from '../../../../lib/DataResult';
import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<any>>
) {
    res.status(200).json(emptySuccess());
}
