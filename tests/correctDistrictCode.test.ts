import { correctDistrictCodes } from '../src/correctDistrictCodes';
import { correctFacilityCode, updateFacilityCodes} from '../src/updateFacilityCodes';

const districtCodesTestData = require('./districtsTestData.json');
const facilitiesTestData = require('./facilitiesTestData.json');
const districtCodes = require('./districts.json');

describe('Testing Updating of District Codes', () => {
    it('Should Update Incorrect District Codes from ', () => {

        const updatedDistricts = correctDistrictCodes(districtCodes, districtCodesTestData.input);
        expect(updatedDistricts).toEqual(districtCodesTestData.expectedOutput);
        
    });
    
});

describe('Testing Updating of Facility Codes', () => {

    it('Should Update Facility Codes with Corrected District Section', () => {
        // Assuming that the previous test is true.
        const updatedDistricts = correctDistrictCodes(districtCodes, districtCodesTestData.input);
        const updatedFacilities = updateFacilityCodes(facilitiesTestData.input, updatedDistricts);

        expect(updatedFacilities).toEqual(facilitiesTestData['expectedOutput']);
    });
    
});
