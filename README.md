# api mocked

## 1. To get error message

please add `?error=1`
example:

```example
http://localhost:3000/api/user/login?error=1
http://localhost:3000/api/user/login?search=mock&&error=1
```

## 2. Modified type

To modify a file, find the file by flow by URL in the swagger doc
`example: /api/coupon/get/[id]  -> {{projectDir}}/page/api/coupon/get/[id].js`

## 3. List tracker

```list tracker
├ λ /api/coupon/get                        0 B            73.2 kB
├ λ /api/coupon/list                       0 B            73.2 kB
├ λ /api/coupon/redeem                     0 B            73.2 kB
├ λ /api/coupon/user/get                   0 B            73.2 kB
├ λ /api/coupon/user/history               0 B            73.2 kB
├ λ /api/coupon/user/history/get           0 B            73.2 kB
├ λ /api/coupon/user/list                  0 B            73.2 kB
├ λ /api/general/about-us                  0 B            73.2 kB
├ λ /api/general/homepage                  0 B            73.2 kB
├ λ /api/general/membership-program        0 B            73.2 kB
├ λ /api/general/menu                      0 B            73.2 kB
├ λ /api/general/supportive-page           0 B            73.2 kB
├ λ /api/news/get                          0 B            73.2 kB
├ λ /api/news/list                         0 B            73.2 kB
├ λ /api/store/get                         0 B            73.2 kB
├ λ /api/store/list                        0 B            73.2 kB
├ λ /api/transaction/new-purchase          0 B            73.2 kB
├ λ /api/transaction/point/history         0 B            73.2 kB
├ λ /api/transaction/purchase/history      0 B            73.2 kB
├ λ /api/user/delete-account               0 B            73.2 kB
├ λ /api/user/form/dropdown                0 B            73.2 kB
├ λ /api/user/login                        0 B            73.2 kB
├ λ /api/user/logout                       0 B            73.2 kB
├ λ /api/user/me                           0 B            73.2 kB
├ λ /api/user/password/reset               0 B            73.2 kB
├ λ /api/user/sms/forgot-password/reset    0 B            73.2 kB
├ λ /api/user/sms/send-verify              0 B            73.2 kB
├ λ /api/user/sms/sign-up                  0 B            73.2 kB
├ λ /api/user/sms/sign-up/request          0 B            73.2 kB
├ λ /api/user/sms/sign-up/verify           0 B            73.2 kB
├ λ /api/user/update                       0 B            73.2 kB
```

## Finally

I am poor. Please coffee me. Many thanks
