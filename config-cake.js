var slackbot = require('./lib/bot');

var config = {

  showIssueDetails: true,
  issueDetailsToShow: {'fields.summary' : 0 , 'fields.assignee' : 0, 'fields.creator' : 0, 'fields.description' : 1},
  showDetailsByDefault: false, //if true, you don't need the '+' to get details
  bot_name: "jira",
  token: 'XXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXX', // bot or test token
  jira_urls: {
   "DEFAULT": {
      url: "https://cakemarketing.atlassian.net/browse/",
      jira: {
        user: 'username', // be sure to use the username, not the user email
        password: 'password',
        host: 'cakemarketing.atlassian.net',
        protocol: 'https',
        port: 443,
        version: '2',
        verbose: true,
        strictSSL: true
      }
    }
  },
  projects: ["CAKE", "FB", "FRS", "CS", "CHZ", "DESIGN", "IOD"],
  post: true,
  verbose: false,
  custom_texts: {
    messagePrefix: "" //message you might like to prefix to JiraBot's post
  },
  emoji: ":troll:", // be sure to upload your custom emoji in slack
  link_separator: ", ",// use \n if you want new lines
  error_channel: 'C29B1MXRB' // #bot-test // the id of the channel to send low level log errors.  If not defined, will use the current channel
};

//DO NOT EDIT BELOW HERE
var slackbot = new slackbot.Bot(config);
slackbot.run();
