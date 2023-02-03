const AbstractManager = require("./AbstractManager");

class RegionManager extends AbstractManager {
  constructor() {
    super({ table: "region" });
  }

  insert(region) {
    return this.database.query(
      `insert into ${this.table} (region_name) values (?)`,
      [region.region_name]
    );
  }

  update(region) {
    return this.database.query(
      `update ${this.table} set region_name = ? where id = ?`,
      [region.region_name, region.id]
    );
  }
}

module.exports = RegionManager;
