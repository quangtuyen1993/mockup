import { faker } from "@faker-js/faker";
import okMessage from "../../../../../lib/okmessage";

export default function handler(req, res) {
    var data = {
        age_group: createAgeGroup(),
        district: createDistrict()
    }
    res.status(200).json(okMessage(data))
}

function createAgeGroup (){
    var groups=[]
    const ageGroup=()=>({
        id: faker.datatype.number(),
        name: faker.lorem.word()
    })

    Array.from({length:5}).forEach(()=>{
        groups.push(ageGroup())
    })
    return groups;
}
function createDistrict(){
    var groups=[]
    const ageGroup=()=>({
        id: faker.datatype.number(),
        name: faker.address.cityName()
    })
    Array.from({length:5}).forEach(()=>groups.push(ageGroup()))
    return groups;
}