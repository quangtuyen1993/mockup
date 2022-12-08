import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { DataResult, success } from '../../../../../../lib/DataResult';

type HistoryCoupon = {
    id: number;
    name: String;
    description: String;
    terms_conditions: String;
    image: String;
    status: number;
    used_at: Date;
    expired_at: Date;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<HistoryCoupon>>
) {
    res.status(200).json(success(createHistoryCoupon()));
}

function createHistoryCoupon(): HistoryCoupon {
    return {
        id: faker.datatype.number(),
        name: faker.company.name(),
        description: faker.lorem.paragraph(),
        terms_conditions: faker.lorem.paragraph(50),
        image: faker.image.animals(),
        status: 0,
        used_at: faker.date.recent(),
        expired_at: faker.date.future()
    };
}
