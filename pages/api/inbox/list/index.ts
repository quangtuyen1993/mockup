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
        id: '1',
        type: 1,
        title: 'faker.lorem.sentence()',
        body: 'faker.lorem.sentences()',
        read_at: '2012-02-27',
        created_at : '2012-02-27'
    };
}


export default withSafeRequest(handler)
