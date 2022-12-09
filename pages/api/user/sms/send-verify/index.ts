import { NextApiRequest, NextApiResponse } from 'next';
import { emptySuccess } from '../../../../../lib/data_result';
import { withSafeRequest } from '../../../../../lib/with_safe_request';

function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(emptySuccess());
}

export default withSafeRequest(handler)
