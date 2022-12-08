export type GenerateModel<T> = () => T;

export function generateList<T>(create: GenerateModel<T>): T[] {
    const ts: T[] = [];
    Array.from({ length: 10 }).forEach(() => ts.push(create()));
    return ts;
}
