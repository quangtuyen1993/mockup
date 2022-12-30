import { DataResult, EmptySuccess, emptySuccess, success } from '../../../../lib/data_result';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSafeRequest } from '../../../../lib/with_safe_request';
import { StringColorFormat } from '@faker-js/faker';
import { faker } from '@faker-js/faker';

type Inbox = {
    id: string;
    type: number;
    title: string;
    body: string;
    read_at: string | null;
    created_at: String;
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<EmptySuccess>>
) {
    
    res.status(200).json(success(getRandomInt() == 0? []:[_item()]));
}

function _item() {
    return {
        id: faker.datatype.number().toString(),
        type: 1,
        title: faker.lorem.word(),
        body: faker.lorem.sentence(),
        read_at: faker.date.past().toISOString(),
        created_at : faker.date.past().toISOString()
    };
}

function getRandomInt() {
    return Math.floor(Math.random() * 2);
  }


export default withSafeRequest(handler)
