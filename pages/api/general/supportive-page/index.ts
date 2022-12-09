import { DataResult, success } from '../../../../lib/data_result';
import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { withSafeRequest } from '../../../../lib/with_safe_request';

type Support = {
    title: string;
    slug: string;
    content: string;
};
function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<Support>>
) {
    const support = {
        title: faker.lorem.words(),
        slug: faker.lorem.lines(),
        content: faker.lorem.paragraphs(2)
    };
    res.status(200).json(success(support));
}

export default withSafeRequest(handler)
