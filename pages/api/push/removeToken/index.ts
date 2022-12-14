import { DataResult, EmptySuccess, emptySuccess } from '../../../../lib/data_result';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSafeRequest } from '../../../../lib/with_safe_request';


function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<EmptySuccess>>
) {
    res.status(200).json(emptySuccess());
}


export default withSafeRequest(handler)
