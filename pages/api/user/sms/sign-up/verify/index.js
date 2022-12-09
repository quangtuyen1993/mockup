import okMessage from "../../../../../../lib/okmessage";
import { faker } from "@faker-js/faker";

export default function handler(req, res) {
    const body = JSON.parse(req.body)
    if(body['otp'] == '123456'){
        const data = {
            verification_code: faker.datatype.uuid()
        }
        res.status(200).json(okMessage());
    }else{
        res.status(400).json(message('Wrong OTP'));
    }   
}
