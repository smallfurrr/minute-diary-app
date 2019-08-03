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
            let moodByCount = orderOfMoods.map(mood => mood.count);
            let moodByName = orderOfMoods.map(mood => mood.mood);

            let topMoodId = orderOfMoods[0].mood_id;

            let orderOfReasons = await db.entry.orderReasons(request.cookies, topMoodId);
            let reasonByCount = orderOfReasons.map(reason => reason.count);
            let reasonByName = orderOfReasons.map(reason => reason.reason);

            let customMessage = await db.entry.getMessage(topMoodId);
            let customMeditations = await db.entry.getMeditations(topMoodId)
            //should be an array of objects with each object being a meditation with title and link

            const moodData = {
                moodCountArray: moodByCount,
                moodNameArray: moodByName,
                topMood: orderOfMoods[0].mood,
                reasonCountArray: reasonByCount,
                reasonNameArray: reasonByName,
                topReason: orderOfReasons[0].reason,
                customMessage: customMessage[0].content,
                customMeditations: customMeditations
            };

            response.render('pages/mood', moodData);
            // response.send(moodData);

        } catch (error) {
            console.log('mood report controller' + error)
        }
    }

    return {
        addEntryHandler,
        fetchMoodReportHandler
    };
}