const emailer = require('./emailer');

const link = process.argv[2];

emailer.sendMail(
  {
    from: 'noreply@wilder.school',
    to: 'jitsi-trainers@wildcodeschool.com',
    subject: 'New conference recording is available : ' + link,
    text: 'The recording is available here : ' + link,
    html:
      '<p>The recording is available <a href="' +
      link +
      '" _target="blank">here</a></p>',
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);
