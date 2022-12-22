import {
    NextApiRequest,
    NextApiResponse
} from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { generateList, generateListIndex } from '../../../../../lib/utility';
import { success } from '../../../../../lib/data_result';
import { withSafeRequest } from '../../../../../lib/with_safe_request';

type Gender = {
    id: number;
    name: string;
};
type AgeGroup = {
    id: number;
    name: string;
};

type District = {
    id: number;
    name: string;
};

type Data = {
    age_group: AgeGroup[];
    district: District[];
    gender: Gender[];
};

function handler(req: NextApiRequest, res: NextApiResponse) {
    var data: Data = {
        age_group: createAgeGroup(),
        district: createDistrict(),
        gender: [
            { id: 1, name: 'male' },
            { id: 2, name: 'female' }
        ]
    };
    res.status(200).json(success(data));
}

function createAgeGroup(): AgeGroup[] {
    const ageGroup = (id: number) => ({
        id: id,
        name: faker.lorem.word()
    });
    return generateListIndex(ageGroup, 1);
}

function createDistrict(): District[] {
    const districts = (id: number) => ({
        id: id,
        name: faker.address.cityName()
    });
    return generateListIndex(districts, 1);
}

export default withSafeRequest(handler);
