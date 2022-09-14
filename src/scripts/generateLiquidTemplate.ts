import * as en from './en.json';
import * as fr from './fr.json';

const messageByLanguage = (messageKey: string, prefix?: string, postfix?: string) => {
    return `
        {% if user.user_metadata.lang == 'en' %}
            ${prefix ? prefix : ''}${en[messageKey]}${postfix ? postfix : ''}
        {% elseif user.user_metadata.lang == 'fr' %}
            ${prefix ? prefix : ''}${fr[messageKey]}${postfix ? postfix : ''}
        {% else %}
            ${prefix ? prefix : ''}${en[messageKey]}${postfix ? postfix : ''}
        {% endif %}
    `
}

const welcomeMessage = () => {
    return messageByLanguage('welcomeMessage', '', '!')
}

const getStarted = () => {
    return messageByLanguage('getStarted', '', '.')
}

export const generateEmailTemplate = () => {
    return `
        ${welcomeMessage()}
        ${getStarted()}
    `
}
