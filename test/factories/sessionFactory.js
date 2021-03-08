const KeyGrip = require('keygrip');
const keys = require('../../config/keys');
const Buffer = require('safe-buffer').Buffer;
const keyGrip = new KeyGrip([keys.cookieKey]);

module.exports = (user) => {
    const sessionObject = {
        passport: {
            user: user._id.toString()
        }
    };
    const session = Buffer.from(
        JSON.stringify(sessionObject)
    ).toString('base64')


    const signature = keyGrip.sign('session='+session);
    return { session, signature }
}