import React, { useState } from 'react'
import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import SearchResult from '../SearchResult'
import Favourites from './Favourites'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10% 8% 2% 8%',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
}))

const Search = ({show, setShow}) => {
    const classes = useStyles()
    const [searchText, setSearchText] = useState(null)
    const [searchStr, setSearchStr] = useState(null)
    const onSearch = () => {
        setSearchStr(searchText)
        console.log('123', searchText)
        setShow(false)
    }
    return (
        <div>
            <Paper className={classes.root}>
                <InputBase
                    fullWidth
                    className={classes.input}
                    placeholder="Search Ads"
                    inputProps={{ 'aria-label': 'search ads' }}
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
                <IconButton onClick={onSearch} className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            {!show && <div style={{margin: '2% 8% 2% 8%'}}>
                <SearchResult searchStr={searchStr}/>
            </div>}
            {show && <div style={{margin: '2% 8% 2% 8%'}}>
                <Favourites/>
            </div>}
        </div>
    )
}

export default Search
