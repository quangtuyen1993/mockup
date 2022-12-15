import { faker } from '@faker-js/faker';

export enum ECouponType {
    gold = 'Gold Member Coupon',
    redeemed = 'Redeemed Coupon'
}

export function randomECouponType(): string {
    var value = faker.datatype.number({ min: 0, max: 1 });
    var data = value == 1 ? ECouponType.gold : ECouponType.redeemed;
    return data;
}
