/**
 * A file to hold various DAOs (Data Access Objects).
 * @author Vincent
 */

var mockedData = require('../data/profile.json');

class CrappyDao {
    async getAll() {
        await new Promise(x => setTimeout(x, 3000));
        return mockedData;
    }
}

class GoodDao {
    async getAll() {
        return mockedData;
    }
}

module.exports = {
    CrappyDao,
    GoodDao
}