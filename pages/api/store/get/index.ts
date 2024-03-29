import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { DataResult, success } from '../../../../lib/data_result';
import { withSafeRequest } from '../../../../lib/with_safe_request';

type Store = {
    id: number;
    name: string;
    district_name: string;
    status: number;
    banner: string[];
    phone_no: string;
    address: string;
    closet_mtr: string;
    opening_hour: OpeningHour[];
    last_order: Date;
    latitude: number;
    longitude: number;
};

type OpeningHour = {
    weekday: string;
    service_hour: string;
    closed_hour: string;
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<Store>>
) {
    res.status(200).json(success(store()));
}

function store(): Store {
    return {
        id: faker.datatype.number(),
        name: faker.finance.accountName(),
        district_name: faker.address.state(),
        status: faker.datatype.number({ min: 0, max: 1 }),
        banner: [faker.image.fashion()],
        phone_no: faker.phone.number(),
        address: faker.address.streetAddress(),
        closet_mtr: faker.name.fullName(),
        opening_hour: [
            {
                weekday: faker.date.weekday(),
                service_hour: '7h am',
                closed_hour: '8h am'
            }
        ],
        last_order: faker.date.past(),
        latitude: 22.2845080,
        longitude: 114.21599,
    };
}

export default withSafeRequest(handler)
