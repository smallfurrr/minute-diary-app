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
            //returns an array of objects, orderOfMoods[0].mood_id is the top occuring mood_id

            let topMoodId = orderOfMoods[0].mood_id;

            let topMood = await db.entry.getTopMood(orderOfMoods);
            //returns an array with ONE object with the key of mood and the value of whatever mood is top

            let orderOfReasons = await db.entry.orderReasons(request.cookies, topMoodId);

            if (orderOfReasons) {

                // const data = {
                //     name: result[0].first_name,
                //     id: result[0].id,
                //     loggedIn: result[0].id
                // };

                response.send(orderOfReasons);
                // response.render('pages/mood');
            } else {
                response.send('Something went fucking wrong.');
            }
        } catch (error) {
            console.log('mood report controller' + error)
        }
    }

    return {
        addEntryHandler,
        fetchMoodReportHandler
    };
}