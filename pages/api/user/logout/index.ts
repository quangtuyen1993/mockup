import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { emptySuccess } from '../../../../lib/DataResult';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(emptySuccess());
}
