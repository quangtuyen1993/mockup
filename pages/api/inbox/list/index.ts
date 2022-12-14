import { DataResult, EmptySuccess, emptySuccess, successPaging } from '../../../../lib/data_result';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSafeRequest } from '../../../../lib/with_safe_request';
import { StringColorFormat } from '@faker-js/faker';
import { faker } from '@faker-js/faker';
import { generateList } from '../../../../lib/utility';

type Inbox = {
    id: string;
    type: number;
    title: string;
    body: string;
    read_at: string | null;
    created_at: string;
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<EmptySuccess>>
) {
    const newList = generateList<Inbox>(_item);
    res.status(200).json(successPaging(newList, req));
}


function _item() {
    return { 
        id: faker.datatype.number().toString(),
        type: Math.floor(Math.random() * 3) + 1,
        title: faker.lorem.sentence(),
        body: faker.lorem.sentences(),
        read_at: faker.date.past().toISOString(),
        created_at : faker.date.past().toISOString()
    };
}


export default withSafeRequest(handler)
