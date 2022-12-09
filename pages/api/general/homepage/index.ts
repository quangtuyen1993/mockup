import {
    NextApiRequest,
    NextApiResponse
} from './../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from '@faker-js/faker';
import { DataResult, successPaging } from '../../../../lib/data_result';
import { generateList } from '../../../../lib/utility';
import { withSafeRequest } from '../../../../lib/with_safe_request';

type Data = {
    banner: Banner[];
    news_list: NewList[];
};

type Banner = {
    id: number;
    image: string;
};

type NewList = {
    id: number;
    title: string;
    image: string;
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<Data>>
) {
    const data = { banner: createBanner(), news_list: createNewList() };
    res.status(200).json(successPaging(data, req));
}

function createBanner(): Banner[] {
    const banner = (): Banner => ({
        id: faker.datatype.number(),
        image: faker.image.city()
    });
    var result: Banner[] = generateList(banner);
    return result;
}

function createNewList(): NewList[] {
    const _new = (): NewList => ({
        id: faker.datatype.number(),
        title: faker.lorem.lines(),
        image: faker.image.city()
    });
    return generateList<NewList>(_new);
}

export default withSafeRequest(handler)
