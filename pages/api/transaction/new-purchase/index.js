import { faker } from "@faker-js/faker";

export default function handler(req, res) {
    const newPurchase={
        point:faker.finance.amount(),
        expired_at:faker.date.future()
    }
      res.status(200).json(okMessage(newPurchase));
}
