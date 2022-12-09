import {
    NextApiRequest,
    NextApiResponse
} from 'next/dist/shared/lib/utils';
import { faker } from '@faker-js/faker';
import { onLoginSuccess, success } from '../../../../lib/DataResult';

type User = {
    userId: number;
    username: string;
    email: string;
    avatar: string;
    password: string;
    birthdate: Date;
    registeredAt: string;
    fullName: string;
    address: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(onLoginSuccess());
}
