var Chart = require('chart.js');

module.exports = function(dbPoolInstance) {

    let addEntry = async function(requestbody) {
        try {
            const sqlQuery = `INSERT INTO entries (user_id, content, mood_id, reason_id) VALUES ($1, $2, $3, $4)`;

            const values = [requestbody.user_id, requestbody.content, requestbody.mood_id, requestbody.reason_id];

            let result = await dbPoolInstance.query(sqlQuery, values);
            return true;

        } catch(error) {
            console.log('add entry model: ' + error);
            return false;
        }
    };

    //use this to get entries for the log page
    let getUserEntries = async function(cookies) {

        const sqlQuery = `SELECT * FROM entries WHERE user_id= $1`;

        const values = [cookies['id']];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    }

    let orderMoods = async function(cookies) {

        const sqlQuery = `SELECT COUNT(*),mood_id FROM entries WHERE user_id=$1 GROUP BY mood_id ORDER BY count DESC`;

        const values = [cookies['id']];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    }

    let getTopMood = async function(moods) {

        const sqlQuery = `SELECT mood FROM moods WHERE id=$1`;

        const values = [moods[0].mood_id];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    }

    let orderReasons = async function(cookies, moodId) {

        // const sqlQuery = `SELECT entries.mood_id, entries.reason_id FROM entries INNER JOIN (SELECT COUNT(*),mood_id FROM entries WHERE user_id=$1 GROUP BY mood_id HAVING mood_id=$2) AS x ON (x.mood_id = entries.mood_id)`;

        const sqlQuery = `SELECT COUNT(*),reason_id FROM (SELECT entries.mood_id, entries.reason_id FROM entries INNER JOIN (SELECT COUNT(*),mood_id FROM entries WHERE user_id=$1 GROUP BY mood_id HAVING mood_id=$2)AS x ON (x.mood_id = entries.mood_id))AS y GROUP BY reason_id`;

        //$1 needs to be the user id cookie, $2 needs to be the top mood_id
        const values = [cookies['id'], moodId];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    }

  return {
    addEntry,
    getUserEntries,
    orderMoods,
    getTopMood,
    orderReasons
  };
};