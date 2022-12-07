import  { NextRequest ,NextResponse} from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()
  console.log(response)
  return response;
}