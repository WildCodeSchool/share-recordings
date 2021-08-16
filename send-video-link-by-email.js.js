const emailer = require('./emailer');

emailer.sendMail(
  {
    from: 'noreply@wilder.school',
    to: 'jitsi-trainers@wildcodeschool.com',
    subject: 'New conference recording is available',
    text: 'Hello world',
    html: '<p>Hello <em>world</em></p>',
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);
