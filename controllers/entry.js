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
            //returns an array of objects with the keys of count, mood_id and mood name
            let moodByCount = orderOfMoods.map(mood => mood.count);
            //returns an descending array of integers
            let moodByName = orderOfMoods.map(mood => mood.mood);
            //returns an descending array of moods that corresponds to moodByCount array
            let topMoodId = orderOfMoods[0].mood_id;
            //DO NOT REMOVE need this to find the top reason later
            let topMood = await db.entry.getTopMood(orderOfMoods);
            //returns an array with ONE object with the key of mood and string value of top mood - extract string in data
            let orderOfReasons = await db.entry.orderReasons(request.cookies, topMoodId);
            //returns an array of objects which are the related reasons in descending order
            let reasonByCount = orderOfReasons.map(reason => reason.count);
            let reasonByName = orderOfReasons.map(reason => reason.reason);
            let topReason = orderOfReasons[0].reason;

            const moodData = {
                moodCountArray: moodByCount,
                moodNameArray: moodByName,
                topMood: topMood[0].mood,
                reasonCountArray: reasonByCount,
                reasonNameArray: reasonByName,
                topReason: topReason,
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