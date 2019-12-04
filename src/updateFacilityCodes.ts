import { Facilities } from "./entity/Facilities";
import { Districts } from "./entity/Districts";

export function updateFacilityCodes(facilities: Facilities[], districts: Districts[]): Facilities[] {

    for (const facility of facilities) {

        const { facility_code } = facility;
        const { id } = facility.district;
        const { district_code } = districts.find(district => district.id === id);
        facility.facility_code = correctFacilityCode(facility_code, district_code);

    }

    return facilities;

}

export function correctFacilityCode(facilityCode: string, districtCode: string): string{
    const facilityCodeSubString = facilityCode.split(/\D/);

    return `${districtCode}${facilityCodeSubString[facilityCodeSubString.length - 1]}`;

}