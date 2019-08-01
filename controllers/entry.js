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
            //collect all relevant SQL queries
            //send as a collective data object
            //pass to page to render

            //gah the date selection should be here but lets fuck that for now

            // let entriesByUser = await db.entry.getUserEntries(request.cookies);
            //returns an array of objects, each object is a user entry

            let result = await db.entry.orderMoods(request.cookies);

            if (result) {

                // const data = {
                //     name: result[0].first_name,
                //     id: result[0].id,
                //     loggedIn: result[0].id
                // };

                response.send(result);
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