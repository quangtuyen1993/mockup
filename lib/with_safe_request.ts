import { faker } from '@faker-js/faker';
import { NextApiHandler } from 'next';
import { error } from './data_result';

const withSafeRequest =(handler: NextApiHandler): NextApiHandler =>
    async (req, res) => {
        console.log(`${req.method} ${req.url}`)
        try {
            await handler(req, res);
        } catch (e) {
            res.status(500).json(error(`${e}`));
        }
    };

export { withSafeRequest };
