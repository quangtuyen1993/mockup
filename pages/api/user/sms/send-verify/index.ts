import { NextApiRequest, NextApiResponse } from 'next';
import { emptySuccess } from '../../../../../lib/DataResult';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(emptySuccess());
}
