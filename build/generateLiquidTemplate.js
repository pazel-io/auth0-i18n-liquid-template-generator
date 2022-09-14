"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEmailTemplate = void 0;
var en = require("./en.json");
var fr = require("./fr.json");
var messageByLanguage = function (messageKey, prefix, postfix) {
    return "\n        {% if user.user_metadata.lang == 'en' %}\n            " + (prefix ? prefix : '') + en[messageKey] + (postfix ? postfix : '') + "\n        {% elseif user.user_metadata.lang == 'fr' %}\n            " + (prefix ? prefix : '') + fr[messageKey] + (postfix ? postfix : '') + "\n        {% else %}\n            " + (prefix ? prefix : '') + en[messageKey] + (postfix ? postfix : '') + "\n        {% endif %}\n    ";
};
var welcomeMessage = function () {
    return messageByLanguage('welcomeMessage', '', '!');
};
var getStarted = function () {
    return messageByLanguage('getStarted', '', '.');
};
exports.generateEmailTemplate = function () {
    var template = "\n        " + welcomeMessage() + "\n        " + getStarted() + "\n    ";
    console.log('template', template);
};
//# sourceMappingURL=generateLiquidTemplate.js.map