import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { successPaging } from '../../../../lib/data_result';
import { generateList } from '../../../../lib/utility';
import { withSafeRequest } from '../../../../lib/with_safe_request';
type Store = {
    id: number;
    name: string;
    district_name: string;
    thumbnail: string;
    latitude: number;
    longitude: number;
};
function handler(req: NextApiRequest, res: NextApiResponse) {
    var data = generateList<Store>(store);
    res.status(200).json(successPaging(data, req));
}

function store() {
    return {
        id: faker.datatype.number(),
        name: faker.name.fullName(),
        district_name: faker.address.country(),
        thumbnail: faker.image.animals(),
        latitude: 22.2845080,
        longitude: 114.21599,
    };
}

export default withSafeRequest(handler)
