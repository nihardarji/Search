import { 
    GET_SEARCH_RESULT,
    SET_FAVOURITE
} from './types'
import _ from 'lodash';
import { calendar } from '../acme-search/calendar.json'
import { contacts } from '../acme-search/contacts.json'
import { dropbox } from '../acme-search/dropbox.json'
import { slack } from '../acme-search/slack.json'
import { tweet } from '../acme-search/tweet.json'


export const getSearchResult = (str) => dispatch => {
    if(str){
        const calendarFiltered = calendar.filter(cal => _.indexOf(cal.matching_terms, str) > -1)
        const contactsFiltered = contacts.filter(cal => _.indexOf(cal.matching_terms, str) > -1)
        const dropboxFiltered = dropbox.filter(cal => _.indexOf(cal.matching_terms, str) > -1)
        const slackFiltered = slack.filter(cal => _.indexOf(cal.matching_terms, str) > -1)
        const tweetFiltered = tweet.filter(cal => _.indexOf(cal.matching_terms, str) > -1)
        dispatch({
            type: GET_SEARCH_RESULT,
            payload: {
                calendarFiltered,
                contactsFiltered,
                dropboxFiltered,
                slackFiltered,
                tweetFiltered
            }
        })
    } else{
        dispatch({
            type: GET_SEARCH_RESULT,
            payload: []
        })
    }
} 

export const favourite = item => dispatch => {
    dispatch({
        type: SET_FAVOURITE,
        payload: item
    })
}