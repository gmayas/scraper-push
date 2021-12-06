const webpush = require('web-push');
const mailto = 'mailto:' + process.env.MAILTO;
const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;
//
console.log('MAILTO:', mailto);
console.log('PUBLIC_KEY:', publicKey);
console.log('PRIVATE_KEY:', privateKey);
//
webpush.setVapidDetails( mailto, publicKey, privateKey );
//
module.exports = webpush;