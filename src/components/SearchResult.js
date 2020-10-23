import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSearchResult } from '../actions/searchResultActions'
import SearchResultItem from './SearchResultItem'

const SearchResult = ({searchStr, getSearchResult,searchResultReducer}) => {
    const { result, favouriteIds, favourites } = searchResultReducer
    
    useEffect(() => {
        
        searchStr && getSearchResult(searchStr.toLowerCase())
    },[searchStr])
    console.log(result)
    return (
        <div>
            {result.calendarFiltered && result.calendarFiltered.map(calendar => (
                <SearchResultItem content={calendar} type='calendar'/>
            ))}
            {result.contactsFiltered && result.contactsFiltered.map(contact => (
                <SearchResultItem content={contact} type='contact'/>
            ))}
            {result.dropboxFiltered && result.dropboxFiltered.map(dropbox => (
                <SearchResultItem content={dropbox} type='dropbox'/>
            ))}
            {result.slackFiltered && result.slackFiltered.map(slack => (
                <SearchResultItem content={slack} type='slack'/>
            ))}
            {result.tweetFiltered && result.tweetFiltered.map(tweet => (
                <SearchResultItem content={tweet} type='tweet'/>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    searchResultReducer: state.searchResultReducer
})

export default connect(mapStateToProps, { getSearchResult }) (SearchResult)
 