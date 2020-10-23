import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import BusinessIcon from '@material-ui/icons/Business';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';
import { connect } from 'react-redux';
import { favourite } from '../actions/searchResultActions';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

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

const SearchResultItem = ({content, type, favourite, searchResultReducer}) => {
    const classes = useStyles()
    const { favouriteIds, favourites } = searchResultReducer


    return (
        <Card className={classes.root}>
            {type ==='calendar' && <div>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" style={{'backgroundColor':'#DC1F0F'}}>
                    {content.title.slice(0,1)}
                </Avatar>
                }
                title={content.title}
                subheader={content.date}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <b> Invitees:</b> {content.invitees}
                </Typography>
            </CardContent>
            </div>}
            {type ==='contact' && <div>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" style={{'backgroundColor':'#1A6345'}}>
                    {content.name.slice(0,1)}
                </Avatar>
                }
                title={content.name}
                subheader={content.last_contact}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <BusinessIcon/> {content.company}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {content.emails.map((e)=> (
                        <div>
                            <MailIcon/> {e}
                        </div>
                    ))}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {content.phones.map( p =>(
                        <div>
                            <PhoneIcon/> {p}
                        </div>
                    ))}
                </Typography>
            </CardContent>
            </div>}
            {type ==='dropbox' && <div>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" style={{'backgroundColor':'#4D2896'}}>
                    {content.title.slice(1,2)}
                </Avatar>
                }
                title={content.title}
                subheader={content.created}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <InsertLinkIcon/>{content.path}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {content.shared_with.map((e)=> (
                            <div>
                                <MailIcon/> {e}
                            </div>
                        ))}
                </Typography>
            </CardContent>
            </div>}
            {type ==='slack' && <div>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" style={{'backgroundColor':'#AC173B'}}>
                    {content.channel.slice(0,1)}
                </Avatar>
                }
                title={content.channel}
                subheader={content.timestamp}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <AccountCircleIcon/>{content.author}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <MessageIcon/>{content.message}
                </Typography>
            </CardContent>
            </div>}
            {type ==='tweet' && <div>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" style={{'backgroundColor':'#17AAAC'}} >
                    {content.user.slice(1,2)}
                </Avatar>
                }
                title={content.user}
                subheader={content.timestamp}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <MessageIcon/>{content.message}
                </Typography>
            </CardContent>
            </div>}
            <CardActions disableSpacing>
                <IconButton onClick={() => favourite(content)} aria-label="add to favorites">
                    {favouriteIds.includes(content.id) ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon/>}
                </IconButton>
            </CardActions>
        </Card>
    )
}

const mapStateToProps = state => ({
    searchResultReducer: state.searchResultReducer
})
export default connect(mapStateToProps, { favourite }) (SearchResultItem)
