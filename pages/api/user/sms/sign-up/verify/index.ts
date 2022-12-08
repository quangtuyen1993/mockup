import { NextApiRequest, NextApiResponse } from './../../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from "@faker-js/faker";
import { emptySuccess, error } from '../../../../../../lib/DataResult';



export default function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.body('otp')){
        const data = {
            verification_code: faker.datatype.uuid()
        }
        res.status(200).json(emptySuccess());
    }else{
        res.status(400).json(error('Wrong OTP'));
    }
}
