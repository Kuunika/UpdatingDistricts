# UpdatingDistricts
Updating The Districts in Master Health Facility Registry

# Installation
Begin by running
```bash
npm install
```

To ensure that the installation process was successful run
```bash
npm run test
```

Once successfully installed in the root directory modify the ormconfig.json file
```json
{
   "type": "mysql",
   "host": "", // Add Host
   "port": 3306,
   "username": "", // Add Username
   "password": "", // Add Password
   "database": "", // Add Database
   "synchronize": false,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
```

After modifying the file run
```bash
npm run start
```
This will update the database records to reflect the correct district codes and update facility codes to reflect the changes to the district codes.