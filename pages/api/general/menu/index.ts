import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { DataResult, success } from '../../../../lib/data_result';
import { generateList } from '../../../../lib/utility';
import { withSafeRequest } from '../../../../lib/with_safe_request';

type Menu = {
    title: string;
    content: string;
    image_list: string[];
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<Menu>>
) {
    const images = generateList<string>(()=> faker.image.food(390, 844));
    const user = { image: images };
    res.status(200).json(success(user));
}


export default withSafeRequest(handler)