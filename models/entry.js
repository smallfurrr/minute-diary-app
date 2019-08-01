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

    let showMoodReport = async function(cookies) {

        const sqlQuery = `SELECT content, mood_id, reason_id, created_at FROM entries WHERE user_id= $1`;

        const values = [cookies['id']];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    }

  return {
    addEntry,
    showMoodReport
  };
};