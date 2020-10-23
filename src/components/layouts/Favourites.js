import React from 'react'
import { Avatar, Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
      maxHeight: 345,
      margin: "2% 0%"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
}))

const Favourites = ({searchResultReducer: { favourites }}) => {
    const classes = useStyles()
    return (
        <div>
        <h5>FAVOURITES</h5>
        {favourites.length === 0 && 'No favourites'}
        {favourites.map(fav => (<Card className={classes.root}>
            <div>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" style={{'backgroundColor':'#DC1F0F'}}>
                        {fav.title.slice(0,1)}
                    </Avatar>
                    }
                    title={fav.title}
                />
            </div>
        </Card>))}
        </div>
    )
}

const mapStateToProps = state => ({
    searchResultReducer : state.searchResultReducer
})
export default connect(mapStateToProps, null) (Favourites)
