const at_options = require('../config/africastalking');
const at = require('africastalking')(at_options);
const voice = at.VOICE;

const voiceCall = (callFrom, callTo) => {
    let log = "";
    voice.call({
        callFrom,
        callTo
    }).then((data) => {
        if (!data)
            return Promise.reject();

        const entries = JSON.parse(data).entries;

        //This will loop through all the numbers you want to call [one in our case]
        for (let result of entries) {
            // Only status "Queued" means the call was successfully placed
            log += '\nStatus : ' + result.status;
            log += ';phoneNumber : ' + result.phoneNumber;
        }

        return 'Call initiated. #Listen to music';
        // Our API will now contact your callback URL once recipient answers the call!
    }).catch((err) => {
        console.log('Error:', err);
        throw err;
    });
};

//Can't test. I don't have the callback.
module.exports = voiceCall;