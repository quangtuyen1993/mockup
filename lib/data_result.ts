import { NextApiRequest } from 'next/dist/shared/lib/utils';
import { faker } from '@faker-js/faker';

export interface DataResult<T> {}

export type Metadata = {
    page: number;
    record_cnt: number;
    total_cnt: number;
};

export interface Success<T> extends DataResult<T> {
    message: string;
    server_time: Date;
    data?: T;
}

export class EmptySuccess implements DataResult<any> {
    message = 'OK';
    server_time = faker.date.recent();
}

export interface Error<T> extends DataResult<T> {
    message: string;
    server_time: Date;
}

export interface SuccessLogin<T> extends DataResult<T> {
    message: string;
    server_time: Date;
    access_token:string
}

export interface Paging<T> extends Success<T> {
    metadata: Metadata;
    data: T;
}

export function success<T>(data: T): Success<T> {
    return {
        message: 'OK',
        server_time: faker.date.recent(),
        data: data
    };
}
export function onLoginSuccess<T>(): SuccessLogin<any> {
    return {
        message: 'OK',
        server_time: faker.date.recent(),
        access_token: faker.finance.bitcoinAddress()
    };
}

export function error<T>(message: string): Error<T> {
    return {
        message: message,
        server_time: faker.date.recent()
    };
}

export function successPaging<T>(data: T, req: NextApiRequest): Paging<T> {
    const page: number = parseInt(req.query.page as string) ?? 1;
    return {
        message: 'OK',
        server_time: faker.date.recent(),
        data: data,
        metadata: {
            page: page,
            record_cnt: 10,
            total_cnt: 50
        }
    };
}

export function emptySuccess(): EmptySuccess {
    return new EmptySuccess();
}
