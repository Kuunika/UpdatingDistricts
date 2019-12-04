const csv = require('csvtojson');
const fs = require('fs');

async function main() {
    const jsonDistricts = await csv().fromFile(__dirname + '/district_codes.csv');
    fs.writeFileSync('districts.json',JSON.stringify(jsonDistricts))
}

main();