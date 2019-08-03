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

    //use this to get entries for the log page laterrrr
    let getUserEntries = async function(cookies) {

        const sqlQuery = `SELECT * FROM entries WHERE user_id= $1`;

        const values = [cookies['id']];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    }

    let orderMoods = async function(cookies) {

        const sqlQuery = `SELECT COUNT(*), mood_id, mood FROM entries INNER JOIN moods ON entries.mood_id = moods.id WHERE entries.user_id=$1 GROUP BY mood_id, mood ORDER BY count DESC;`;
        //returns count, mood_id and mood name, ordered by desc mood_id count

        const values = [cookies['id']];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    }

    let orderReasons = async function(cookies, moodId) {

       const sqlQuery = `SELECT COUNT(*),x.mood_id,x.reason_id,x.reason FROM (SELECT entries.mood_id, entries.reason_id, reasons.reason, entries.user_id FROM entries INNER JOIN reasons ON (reasons.id = entries.reason_id) WHERE user_id=$1 AND mood_id=$2) AS x GROUP BY x.mood_id,x.reason_id,x.reason`;
       //returns count, mood_id (according to query), reason_id, reason ordered by count of reason_id
       //sort by date can possibly go under the WHERE portion

        const values = [cookies['id'], moodId];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    }

    let getMessage = async function(moodId) {
        const sqlQuery = `SELECT content FROM messages WHERE mood_id=$1`;

        const values = [moodId];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    }

    let getMeditations = async function(moodId) {
        const sqlQuery = `SELECT id,title,link FROM tracks WHERE mood_id=$1`;

        const values = [moodId];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    }

    let checkFaves = function(podcastId, userId) {
        console.log(podcastId);
        console.log(userId);
    }

  return {
    addEntry,
    getUserEntries,
    orderMoods,
    orderReasons,
    getMessage,
    getMeditations,
    checkFaves
  };
};