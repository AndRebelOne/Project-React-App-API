import React from 'react';
import { Switch, Route} from 'react-router-dom';
import TopRated from '../TopRated-TVShows/TopRated';
import Trending from '../Trending/Trending';
import Upcoming from '../Upcoming/Upcoming';




export const Routing: React.FC = () => {

    return (

            <Switch>

                <Route exact path="/">
                    <Trending/>
                </Route>

                <Route path="/upcoming">
                    <Upcoming />
                </Route>

                <Route path="/tv-shows">
                    <TopRated />
                </Route>

            </Switch>


    )
}

