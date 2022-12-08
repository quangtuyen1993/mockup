import { NextApiRequest, NextApiResponse } from './../../../../../node_modules/next/dist/shared/lib/utils.d';
import { faker } from "@faker-js/faker";
import { generateList } from "../../../../../lib/Utils";
import { success } from '../../../../../lib/DataResult';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    var data = {
        age_group: createAgeGroup(),
        district: createDistrict()
    }
    res.status(200).json(success(data))
}

type AgeGroup={
    id:number,
    name:string
}

type District={
    id:number,
    name:string
}

type Data ={
    age_group:AgeGroup[],
    district:District
}


function createAgeGroup ():AgeGroup[]{
    const ageGroup=()=>({
        id: faker.datatype.number(),
        name: faker.lorem.word()
    })
    return generateList(ageGroup)
}

function createDistrict():District[]{
    const ageGroup=()=>({
        id: faker.datatype.number(),
        name: faker.address.cityName()
    })
    return generateList(ageGroup)
}