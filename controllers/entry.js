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
            //should return an descending array of moods that should correspond to moodByCount array

            let topMoodId = orderOfMoods[0].mood_id;
            //DO NOT REMOVE need this to find the top reason later

            let topMood = await db.entry.getTopMood(orderOfMoods);
            //returns an array with ONE object with the key of mood and string value of top mood

            // let orderOfReasons = await db.entry.orderReasons(request.cookies, topMoodId);
            //this SHOULD not return a similar array to orderOfMoods with the keys of count, reason_id and reason

            // let topReason = await db.entry.getTopReason(orderOfReasons);
            //returns an array with ONE object with the key of reason and string value of top reason

            const moodData = {
                moodCountArray: moodByCount,
                moodNameArray: moodByName,
                // reasonArray: orderOfReasons,
                topMood: topMood[0].mood,
                // topReason: topReason[0].reason,
            };

            // response.render('pages/mood', moodData);
            response.send(moodData);

        } catch (error) {
            console.log('mood report controller' + error)
        }
    }

    return {
        addEntryHandler,
        fetchMoodReportHandler
    };
}