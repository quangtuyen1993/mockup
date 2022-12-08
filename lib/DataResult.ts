import { NextApiRequest } from './../node_modules/next/dist/shared/lib/utils.d';
import { number } from './../node_modules/property-information/lib/util/types.d';
import { faker } from '@faker-js/faker';
import { NextApiResponse } from 'next';

export interface DataResult<T>{}

export type Metadata = {
    page:number,
    record_cnt: number,
    total_cnt: number
}

export interface Success<T> extends DataResult<T>{
    message:String,
    server_time:Date,
    data?:T
}

export class EmptySuccess implements DataResult<any>{
    message="OK";
    server_time=faker.date.recent()
}

export interface Error<T> extends DataResult<T>{
    message:String,
    server_time:Date,
}

export interface Paging<T> extends Success<T>{
    metadata:Metadata,
    data:T
}

export function success<T>(data:T):Success<T>{
    return {
        message:"OK",
        server_time:faker.date.recent(),
        data:data
    }
}

export function error<T>(message:String):Error<T>{
    return {
        message:message,
        server_time:faker.date.recent()
    }
}

export function successPaging<T>(data:T,req:NextApiRequest):Paging<T>{
    const page:number=parseInt(req.query.page as string)??1
    return {
        message:"OK",
        server_time:faker.date.recent(),
        data:data,
        metadata:{
            page:page,
            record_cnt:10,
            total_cnt:30
        }
    }
}

export function emptySuccess():EmptySuccess{
    return new EmptySuccess();
}