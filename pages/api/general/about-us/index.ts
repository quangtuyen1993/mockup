import { faker } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from 'next';
import { DataResult, success } from '../../../../lib/data_result';
import { withSafeRequest } from '../../../../lib/with_safe_request';

type AboutUs = {
    title: string;
    content: string;
    image: string;
    our_website: string;
    contact_us: string;
    facebook: string;
    instagram: string;
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResult<AboutUs>>
) {
    res.status(200).json(success(about_us()));
}

function about_us(): AboutUs {
    return {
        title: faker.lorem.lines(),
        content: `<!DOCTYPE html>
    <html>
    <body>
    <h1>Subtitle</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h1>Subtitle</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h1>Subtitle</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </body>
    </html> `,
        image: faker.image.animals(),
        our_website: 'https://www.pizzamaru.com.hk',
        contact_us: 'https://www.pizzamaru.com.hk/messageus',
        facebook: 'https://www.facebook.com/pizzamaruhk',
        instagram: 'https://www.instagram.com/pizzamaruhk/?hl=en'
    };
}

export default withSafeRequest(handler)
