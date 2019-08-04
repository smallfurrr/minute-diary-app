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

        const sqlQuery = `SELECT e.content, md.mood, r.reason, e.created_at FROM entries AS e INNER JOIN moods AS md ON e.mood_id = md.id INNER JOIN reasons AS r ON e.reason_id = r.id WHERE e.user_id=$1 ORDER BY e.created_at DESC;`;

        const values = [cookies['id']];

        let result = await dbPoolInstance.query(sqlQuery, values);

        //do a second inner join now to get mood_id and reason_id
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

    let getUserFaves = async function(cookies) {
        const sqlQuery = `SELECT podcast_id FROM favorites WHERE user_id=$1`;

        const values = [cookies['id']];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    }

    let toggleFaves = async function(podcastId, userId) {

        const sqlQuery = `SELECT id FROM favorites WHERE podcast_id=$1 AND user_id=$2`;

        const values = [podcastId, userId];

        let result = await dbPoolInstance.query(sqlQuery, values);

        if (result.rows.length > 0) {

            const sqlQuery2 = `DELETE FROM favorites WHERE podcast_id=$1 AND user_id=$2 RETURNING *`;

            let result = await dbPoolInstance.query(sqlQuery2, values);

            console.log("deleted from faves!");

            return true;

        } else {

            const sqlQuery2 = `INSERT INTO favorites (podcast_id, user_id) VALUES ($1, $2) RETURNING *`;

            let result = dbPoolInstance.query(sqlQuery2, values);

            console.log("added to faves!");

            return true;
        }
    }

  return {
    addEntry,
    getUserEntries,
    orderMoods,
    orderReasons,
    getMessage,
    getMeditations,
    getUserFaves,
    toggleFaves
  };
};