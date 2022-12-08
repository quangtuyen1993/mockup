import { faker } from "@faker-js/faker";
import okMessage from "../../../../lib/okmessage";
export default function handler(req, res) {
    res.status(200).json(okMessage());
}
