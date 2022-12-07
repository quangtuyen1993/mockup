import {faker} from '@faker-js/faker'

export default function okMessage(data){
    return {
        message:"ok",
        server_time:faker.date.recent(),
        data:data
    }
}