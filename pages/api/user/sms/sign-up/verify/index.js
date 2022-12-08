import okMessage from "../../../../../../lib/okmessage";
import { faker } from "@faker-js/faker";

export default function handler(req, res) {
    if(req.body('otp')){
        const data = {
            verification_code: faker.datatype.uuid()
        }
        res.status(200).json(okMessage());
    }else{
        res.status(400).json(message('Wrong OTP'));
    }   
}
