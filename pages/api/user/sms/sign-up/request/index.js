import { faker } from "@faker-js/faker";
import okMessage from "../../../../../../lib/okmessage";

export default function handler(req, res) {
    const otp = {
    otp:123456
}
    res.status(200).json(okMessage(otp));
}
