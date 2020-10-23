import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Search from './components/layouts/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import store from './store';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding:0
  },
  title: {
    flexGrow: 1,
  },
}))
const App = () => {
  const classes = useStyles()
  const [show, setShow] = useState(false)
  return (
    <Provider store={store}>
      <div className='app'>
        <div className={classes.root}>
          <AppBar color='default'>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Acme Search
              </Typography>
              <IconButton
                aria-label="show more"
                // aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={e => setShow(!show)}
                color="inherit"
              >
                <FavoriteIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        <Search show={show} setShow={setShow}/>
      </div>
    </Provider>
  );
}

export default App;
