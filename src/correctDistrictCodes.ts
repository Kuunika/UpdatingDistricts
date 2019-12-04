import { Districts } from "./entity/Districts";

export function correctDistrictCodes(districtsFromCSV, districts: Districts[]): Districts[] {

    
    for (const district of districts) {
        const district_code  = districtsFromCSV.find(districtCSV => districtCSV['district_name'] === district.district_name);
        
        if(district_code){
            district.district_code = district_code['district_code'];
        }
    }

    return districts;

}