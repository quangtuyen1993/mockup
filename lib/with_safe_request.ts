import { faker } from '@faker-js/faker';
import { NextApiHandler } from 'next';
import { error } from './data_result';

const withSafeRequest =
    (handler: NextApiHandler): NextApiHandler =>
    async (req, res) => {
        try {
            var { langParams } = req.query;

            var lang;
            if (langParams == 'zh_cn') {
                lang = 'zh_CN';
            } else if ((langParams = 'zh_hk')) {
                lang = 'zh_TW';
            } else {
                lang = 'en';
            }
            faker.setLocale(lang)
            await handler(req, res);
        } catch (e) {
            res.status(500).json(error(`${e}`));
        }
    };

export { withSafeRequest };
