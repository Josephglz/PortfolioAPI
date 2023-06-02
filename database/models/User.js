const {
    pool
} = require('./../connection');
const util = require('util');

const query = util.promisify(pool.query).bind(pool);

const result = (res) => {
    if(res.length > 0){
        return {
            status: 1,
            data: res[0]
        }
    }else{
        return {
            status: 0,
            data: []
        }
    }
    return res;
}

const userQueries = {
    getAll: async () => {
        try {
            const queryResult = await query(`SELECT * FROM USERS_T`);
            return result(queryResult);
        } catch (error) {
            throw error
        }
    },
}

module.exports = userQueries;