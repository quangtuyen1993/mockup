import { faker } from '@faker-js/faker';
export type GenerateModel<T> = () => T;
export type GenerateModelIndex<T> = (id: number) => T;

export function generateList<T>(create: GenerateModel<T>): T[] {
    const ts: T[] = [];
    Array.from({ length: 10 }).forEach(() => ts.push(create()));
    return ts;
}

export function generateListIndex<T>(
    create: GenerateModelIndex<T>,
    start: number = 0,
    page: number = 0
): T[] {
    const ts: T[] = [];
    Array.from({ length: 10 }).forEach((e, index) =>
        ts.push(create(index + start))
    );
    return ts;
}

export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export type DateOrNull = Date | null;

export function randomDate(expiredDate: Date): DateOrNull {
    var number = Math.random();
    if (number < 0.5) {
        return null;
    } else {
        return expiredDate;
    }
}

export function termsConditions(lines: number = 5): string {
    var result = '';
    for (let index = 0; index < lines; index++) {
        result += `<p> ${index + 1}. ${faker.lorem.lines(1)} </p> </br>`;
    }
    return result;
}
