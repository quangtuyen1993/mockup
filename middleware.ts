import { faker } from '@faker-js/faker';
import { NextRequest, NextResponse } from 'next/server';

// Limit the middleware to paths starting with `/api/`
export const config = {
    matcher: '/api/:function*'
};

export function middleware(req: NextRequest) {
    req.headers.append( 'content-type' ,'application-json' )
    var searchParams = req.nextUrl.searchParams;
    if ((searchParams.get('error') as string) == '1')
        return NextResponse.json(
            {
                message: 'Bad Request',
                server_time: faker.date.recent()
            },
            {
                status: 401
            }
        );
    return NextResponse.next();
}
