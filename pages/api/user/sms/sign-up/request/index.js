import { faker } from "@faker-js/faker";

export default function handler(req, res) {
    const otp={
    otp:faker.finance.pin(6)
}
    res.status(200).json(okMessage(otp));
}