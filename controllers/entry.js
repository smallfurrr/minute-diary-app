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
            let customMeditations = await db.entry.getMeditations(topMoodId);

            let userFaves = await db.entry.getUserFaves(request.cookies);
            let faveArray = userFaves.map(fave => fave.podcast_id);
            //results in empty array if user has no faves

            const moodData = {
                moodCountArray: moodByCount,
                moodNameArray: moodByName,
                topMood: orderOfMoods[0].mood,
                reasonCountArray: reasonByCount,
                reasonNameArray: reasonByName,
                topReason: orderOfReasons[0].reason,
                customMessage: customMessage[0].content,
                customMeditations: customMeditations,
                faveArray: faveArray
            };

            response.render('pages/mood', moodData);
            // response.send(moodData);
        } catch (error) {
            console.log('mood report controller' + error)
        }
    }

    let toggleFavesHandler = async function(request, response) {
        try {
            let userId = request.cookies['id'];

            let podcastId = request.body.podcastId;

            let result = await db.entry.toggleFaves(podcastId, userId);

        } catch (error) {
            console.log('toggle faves controller' + error);
        }
    }

    let fetchAllEntriesHandler = async function(request, response) {
        try {

            let result = await db.entry.getUserEntries(request.cookies);

            response.send(result);
        } catch (error) {
            console.log('fetch entries controller' + error);
        }
    }

    return {
        addEntryHandler,
        fetchMoodReportHandler,
        toggleFavesHandler,
        fetchAllEntriesHandler
    };
}