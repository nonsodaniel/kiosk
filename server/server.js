const app = require("commander");
const inquirer = require("inquirer")

// Require Library
const Flutterwave = require('ravepay');
// Authenticate Library with test public_key and test secret_key
const merchant = new Flutterwave('FLWPUBK-4ac4e33078150d16dbcbc21d27825655-X', 'FLWSECK-33fe20a4081f1e762f1aadfa470f21ad-X', false);

const receiver = () => {
    inquirer.prompt([
        { type: 'input', name: 'cardno', message: 'Your card no' },
        { type: 'input', name: 'cvv', message: 'Your cvv' },
        { type: 'input', name: 'expirymonth', message: 'Your expirymonth' },
        { type: 'input', name: 'expiryyear', message: 'Your expiryyear' },
        { type: 'input', name: 'currency', message: 'Your currency' },
        { type: 'input', name: 'amount', message: 'Your amount' },
        { type: 'input', name: 'pin', message: 'Your pin' },
        { type: 'input', name: 'suggested_auth', message: 'Your suggested_auth' },
        { type: 'input', name: 'email', message: 'Your email' },
        { type: 'input', name: 'IP', message: 'Your IP' },
        { type: 'input', name: 'txRef', message: 'Your txRef' }


    ]).then(async (answers) => {
        console.log(answers)
        const chargedUser = await merchant.Card.charge({
            cardno: answers.cardno,
            cvv: answers.cvv,
            expirymonth: answers.expirymonth,
            expiryyear: answers.expiryyear,
            currency: answers.currency,
            amount: answers.amount,
            pin: answers.pin,
            suggested_auth: answers.suggested_auth,
            email: answers.email,
            IP: answers.IP,
            txRef: answers.txRef
        });
        // verify charged transaction with test one time password
        const verifyCharge = (await merchant.Card.validate({
            transaction_reference: chargedUser.body.data.flwRef,
            otp: 12345
        })).body;
        console.log("verify", verifyCharge)
    })
}





app.version('1.0.0')
    .action(receiver)

app.parse(process.argv)