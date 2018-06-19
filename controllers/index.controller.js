const requestHandler = (req, res) => {
    let response;
    let {sessionId, serviceCode, phoneNumber, text} = req.body;

    if (text == '') {
        response = `CON What would you want to check
        1. My Cooperative
        2. Wazobia Loans
        3. Join Agbetuntu
        4. Request a Call`;

        res.send(response);
    }
    else if (text == '1') {
        response = `CON Choose which of your account information you want to view:
        1. Check Balance
        2. Request Loan
        3. Make Deposit`;

        res.send(response)
    } else if (text == '2') {
        response = `CON 
        1. Register
        2. Repay Loan
        3. Make Deposit
        4. Request Loan
        5. Request a Call`;

        res.send(response)
    }
    else {
        res.status(400).send('Kindly enter a number in the options.')
    }
};

module.exports = {requestHandler};