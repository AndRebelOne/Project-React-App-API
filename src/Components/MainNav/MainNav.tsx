import React from 'react';
import {Link} from 'react-router-dom';
import './MainNav.css';

// Icons 
import FaceIcon from '@material-ui/icons/Face';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const MainOptions = [
  {
    path: '/',
    label: 'Trending'
  },
  {
    path: '/upcoming',
    label: 'Upcoming'
  },
  {
    path: '/tv-shows',
    label: 'Top-Rated TV Shows'
  },
]

export const MainNav: React.FC = () => {

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          color: '#e1dad2',
          fontFamily: 'Kanit',
          fontSize: '14px',
          textTransform: 'capitalize',
          textDecoration: 'none',
        },
      },
    }),
  );

  const classes = useStyles();

  return (
      <div className="container">
        <span className='title'>NetMovies+</span>

        {MainOptions.map(item => (
          <div key={item.label} className={classes.root}>
            <Link to={item.path}>{item.label}</Link>
          </div>
        ))}


        <div className="profile">
          <RemoveRedEyeIcon />
          <FavoriteIcon />
          <FaceIcon />
        </div>

      </div>
  );
}