const axios = require('axios');

const sendSlackMessage = (text) => {
  console.log(text);
  /*axios
    .post(
      'https://hooks.slack.com/services/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',
      { text }
    )
    .then((res) => {
      console.log('message successfully sent');
      // return res.json();
    })
    .catch((error) => {
      console.log(error.message);
    });*/
};

const contactsBook = {
  Coach: 'U02UM4RPJER',
  'Alina Kypryk': 'U02UTV42X6H',
  'Anastasiia Perih': 'U02UXE3R63E',
  'Andrii Romanov': 'U02UT7LR7D2',
  'Anna Vdovichenko': 'U0303RVLE0G',
  'Arseniy Egoyants': 'U02V7580CJD',
  'Dmytro Hryshanov': 'U02UHFU4WEA',
  'Dmytro Suhaniaka': 'U02UTNGLB6E',
  'Igor Iubenskiy': 'U02V96ZFRUH',
  'Inna Roshcheniuk': 'U02V3S6HUBB',
  'Mariia Mykytenko': 'U02UQA6JE2E',
  Marina: 'U02UHKW1GJ2',
  'Mykhailo Shpilienko': 'U02UPR0A886',
  'Nataliya Kotenko': 'U02V8P4LLM7',
  'Oleksandr Kovalchuk': 'U02UT7KASRY',
  Olga: 'U02USFJ4HBN',
  'Sasha Shapoval': 'U02V2RALPPT',
  'Veronika Barnyachenko': 'U02UMK400N9',
  'Viktor Muzyka': 'U02VDU6CZJL',
  Влад: 'U02UQC3TB1Q',
};

module.exports = {
  sendSlackMessage,
  contactsBook,
};
