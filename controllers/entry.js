const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');

module.exports = function(db) {

    let addEntryHandler = async function(request, response) {
        try {
            let result = await db.entry.addEntry(request.body);

            if (result === true) {
                response.render('pages/logged')
                response.send('Entry logged successfully!')
            } else {
               response.send('Unable to log entry.');
            }
        } catch(error) {
            console.log('add entry controller' + error);
        }
    }

    let fetchMoodReportHandler = async function(request, response) {
        try {
            //gah the date selection should be here but lets fuck that for now

            let orderOfMoods = await db.entry.orderMoods(request.cookies);
            //returns an array of objects, with the keys of count and mood_id

            let topMoodId = orderOfMoods[0].mood_id;

            let topMood = await db.entry.getTopMood(orderOfMoods);
            //returns an array with ONE object with the key of mood and string value of top mood

            let orderOfReasons = await db.entry.orderReasons(request.cookies, topMoodId);
            //returns an array of objects with 2 keys each, count and reason_id

            let topReason = await db.entry.getTopReason(orderOfReasons);
            //returns an array with ONE object with the key of reason and string value of top reason

            // const moodData = {
            //     orderOfMoods:
            // }

            response.render('pages/mood', moodData);
            // response.send(topReason);

        } catch (error) {
            console.log('mood report controller' + error)
        }
    }

    return {
        addEntryHandler,
        fetchMoodReportHandler
    };
}