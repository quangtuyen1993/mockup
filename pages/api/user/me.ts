import {
    NextApiRequest,
    NextApiResponse
} from './../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { success } from '../../../lib/data_result';
import { withSafeRequest } from '../../../lib/with_safe_request';
import { min } from 'date-fns';

type Me = {
    first_name: string;
    last_name: string;
    email: string;
    district_id: number;
    gender: number;
    age_group: number;
    phone_no: string;
    birthday: Date;
    created_at: Date;
    member_no: number;
    membership_name: string;
    point: number;
    spending: number;
    expired_at: Date;
    min: number;
    max: number;
};

function handler(req: NextApiRequest, res: NextApiResponse) {
    var email=req.body
    const userMe: Me = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        district_id: faker.datatype.number(10),
        gender: 1,
        age_group: faker.datatype.number(10),
        phone_no: faker.phone.phoneNumber(),
        birthday: faker.date.birthdate(),
        created_at: faker.date.past(),
        member_no: faker.datatype.number(),
        membership_name: randomPriority(),
        point: faker.datatype.number(),
        spending: faker.datatype.number({ min: 20, max: 80 }),
        expired_at: faker.date.future(),
        min: faker.datatype.number({ min: 0, max: 10 }),
        max: faker.datatype.number({ min: 90, max: 100 })
    };
    res.status(200).json(success(userMe));
}

export default withSafeRequest(handler);

type Priority = 'gold' | 'saver' | 'silver';

function randomPriority(): Priority {
    var number = faker.datatype.number({ min: 1, max: 3 });
    console.log(number);
    switch (number) {
        case 1: {
            console.log('here gold')
            return 'gold';
        }
        case 2: {
            console.log('here sliver')

            return 'silver';
        }
        default: {
            return 'saver';
        }
    }
}
