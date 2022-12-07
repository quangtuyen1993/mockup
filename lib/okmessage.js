import {faker} from '@faker-js/faker'

export default function okMessage(data){
    if(data == undefined){
        return {
            message:"OK",
            server_time:faker.date.recent(),
        }
    }
    return {
        message:"OK",
        server_time:faker.date.recent(),
        data:data
    }
}