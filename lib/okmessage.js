import {faker} from '@faker-js/faker'

function okMessage(data){
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

function okMessagePaging(data,page){
    const metadata={
        page:parseInt(page??"1"),
        record_cnt: 10,
        total_cnt: 30
    }
    return {
        message:"OK",
        server_time:faker.date.recent(),
        data: data,
        metadata:metadata
    }
}

export default okMessage;
export {okMessagePaging}