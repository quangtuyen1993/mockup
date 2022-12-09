import { NextApiRequest, NextApiResponse } from 'next/dist/shared/lib/utils';
import { error, onLoginSuccess, success } from '../../../lib/data_result';
import { withSafeRequest } from '../../../lib/with_safe_request';

type Login = {
    password: string;
    phone: string;
    prefix: string;
};

function handler(req: NextApiRequest, res: NextApiResponse) {
    var userLogin: Login = req.body;
    if (userLogin.password != 'aA12345@') {
        res.status(400).json(error('Bad Request'));
    } else {
        res.status(200).json(onLoginSuccess());
    }
}
export default withSafeRequest(handler);
