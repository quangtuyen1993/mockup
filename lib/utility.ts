import { faker } from '@faker-js/faker';
import { randomInt } from 'crypto';
import { handleClientScriptLoad } from 'next/script';
export type GenerateModel<T> = () => T;

export function generateList<T>(create: GenerateModel<T>): T[] {
    const ts: T[] = [];
    Array.from({ length: 10 }).forEach(() => ts.push(create()));
    return ts;
}


export function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export type DateOrNull = Date|null;

export function randomDate(expiredDate:Date):DateOrNull{
    var number=Math.random();
    if(number<0.5){
        return null;
    }else{
        return expiredDate;
    }
}

export function termsConditions(lines :number=5):string{
    var result='';
    for (let index = 0; index <lines; index++) {
        result +=`<p> ${index+1}. ${faker.lorem.lines(1)} </p> </br>`
    }
    return result;
}