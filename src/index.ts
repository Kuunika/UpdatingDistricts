import "reflect-metadata";
import { createConnection } from "typeorm";
import { Districts } from "./entity/Districts";
import * as csv from 'csvtojson';
import { Facilities } from "./entity/Facilities";
import { correctDistrictCodes } from './correctDistrictCodes';
import { updateFacilityCodes } from './updateFacilityCodes';

createConnection().then(async connection => {

    console.log(`Starting Update Process ${Date.now()}`);
    
    console.log('Updating District Codes')
    const districtsFromJson = require('../districts.json');
    const updatedDistricts: Districts[] = correctDistrictCodes(districtsFromJson, await connection.manager.find(Districts));
    connection.manager.save(updatedDistricts);

    console.log('Districts Codes Updated');

    console.log('Now Updating Facility Codes');

    const facilities: Facilities[] = await connection.manager.find(Facilities, { relations: ['district'] });
    const updatedFacilitiesCodes = updateFacilityCodes(facilities, updatedDistricts);
    await connection.manager.save(updatedFacilitiesCodes);

    console.log('Update Complete');

}).catch(error => console.log(error));


export async function convertCSVtoJson() {

    return await csv().fromFile(__dirname + '/district_codes.csv');

}