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
            let result = await db.entry.showMoodReport(request.cookies);

            //if there is a fucking result i guess
            if (result) {
                // response.cookie('name', result[0].first_name);
                // response.cookie('id', result[0].id);
                // response.cookie('loggedIn', sha256(result[0].id));

                // const cookieData = {
                //     name: result[0].first_name,
                //     id: result[0].id,
                //     loggedIn: result[0].id
                // };
                response.send(result);
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