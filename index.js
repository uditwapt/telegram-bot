'use strict';

const Telegram = require('telegram-node-bot');
const keys = require('./config/keys')
const tg = new Telegram.Telegram(keys.token, {
    workers: 1
});

const CommandController = require('./controllers/command');
const OtherwiseController = require('./controllers/otherwise');
// const ParticipantController = require('./controllers/participant');
// const OrganiserController = require('./controllers/organiser');

const commandController = new CommandController();
// const participantController = new ParticipantController();
// const organiserController = new OrganiserController();

tg.router
    .when(new Telegram.TextCommand('/start', 'helpCommand'), commandController)
    .when(new Telegram.TextCommand('/help', 'helpCommand'), commandController)
    
    .when(new Telegram.TextCommand('/details', 'detailsCommand'), commandController)
    .when(new Telegram.TextCommand('/judgingcriteria', 'criteriaCommand'), commandController)
    .when(new Telegram.TextCommand('/schedule', 'scheduleCommand'), commandController)
    .when(new Telegram.TextCommand('/location', 'locationCommand'), commandController)
    .when(new Telegram.TextCommand('/subscribe', 'subscribeCommand'), commandController)
    .when(new Telegram.TextCommand('/unsubscribe', 'unsubscribeCommand'), commandController)
    .when(new Telegram.TextCommand('/allannouncements', 'allAnnouncementsCommand'), commandController)
    .when(new Telegram.TextCommand('/sharepic', 'sharepicCommand'), commandController)
    .when(new Telegram.TextCommand('/feedback', 'feedbackCommand'), commandController)

    .when(new Telegram.TextCommand('/newPoster', 'newPosterCommand'), commandController)
    .when(new Telegram.TextCommand('/removePoster', 'removePosterCommand'), commandController)
    .when(new Telegram.TextCommand('/editDetails', 'editDetailsCommand'), commandController)
    .when(new Telegram.TextCommand('/editCriteria', 'editCriteriaCommand'), commandController)
    .when(new Telegram.TextCommand('/editSchedule', 'editScheduleCommand'), commandController)
    .when(new Telegram.TextCommand('/editLocation', 'editLocationCommand'), commandController)
    .when(new Telegram.TextCommand('/allSubscribers', 'allSubscribersCommand'), commandController)
    .when(new Telegram.TextCommand('/announcement', 'announcementCommand'), commandController)
    .when(new Telegram.TextCommand('/broadcastPic', 'broadcastPicCommand'), commandController)
    .when(new Telegram.TextCommand('/allFeedbacks', 'allFeedbacksCommand'), commandController)
    
    // .when(new Telegram.TextCommand('/test', 'testCommand'), commandController)
    .otherwise(new OtherwiseController());