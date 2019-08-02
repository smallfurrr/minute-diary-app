var Chart = require('chart.js');

module.exports = function(dbPoolInstance) {

    let addEntry = async function(requestbody) {
        try {
            const sqlQuery = `INSERT INTO entries (user_id, content, mood_id, reason_id) VALUES ($1, $2, $3, $4)`;

            const values = [parseInt(requestbody.user_id), requestbody.content, parseInt(requestbody.mood_id), parseInt(requestbody.reason_id)];

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

        const sqlQuery = `SELECT COUNT(*), mood_id, mood FROM entries INNER JOIN moods ON entries.mood_id = moods.id WHERE entries.user_id=$1 GROUP BY mood_id, mood ORDER BY count DESC;`;
        //now returns count, mood_id and mood name


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

    // let orderReasons = async function(cookies, moodId) {

    //     const sqlQuery = `SELECT COUNT(*),reason_id, reason FROM (SELECT entries.mood_id, entries.reason_id FROM entries INNER JOIN (SELECT COUNT(*),mood_id, mood FROM entries WHERE user_id=$1 GROUP BY mood_id HAVING mood_id=$2)AS x ON (x.mood_id = entries.mood_id))AS y GROUP BY reason_id, reason ORDER BY count DESC`;
    //     //i suspect this is where it will fuck up lol

    //     const values = [cookies['id'], moodId];

    //     let result = await dbPoolInstance.query(sqlQuery, values);

    //     return result.rows;
    // }

    // let getTopReason = async function(reasons) {

    //     const sqlQuery = `SELECT reason FROM reasons WHERE id=$1`;

    //     const values = [reasons[0].reason_id];

    //     let result = await dbPoolInstance.query(sqlQuery, values);

    //     return result.rows;
    // }

  return {
    addEntry,
    getUserEntries,
    orderMoods,
    getTopMood,
    // orderReasons,
    // getTopReason
  };
};