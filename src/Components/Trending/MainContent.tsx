import React from 'react';
import { img_300, unavailable } from '../config';
import './Trending.css';


// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';


export interface singleContentProps {
    id: number,
    poster_path: string,
    title: string,
    name: string,
    release_date: string,
    media_type: string,
    vote_average: number,
    first_air_date: string,
    overview:string,
}

interface trendingProps {
    trending: singleContentProps[];
}


const MainContent: React.FC<trendingProps> = ({ trending }: trendingProps) => {


    return (
        <div>
            <div className='trending'>
                {trending.map(item => (
                    
                    <Card className="card" key={item.id}>
                        <CardActionArea>
                            <CardContent>

                                <img src={item.poster_path ?
                                    `${img_300}/${item.poster_path}` : unavailable}
                                    alt={item.title} />
                                    <div className="title-card">
                                    <span>
                                    {item.title || item.name}
                                    </span>
                                    </div>

                                <Typography variant="body1" color="textSecondary" component="p">
                                    <span className='date'>{item.release_date || item.first_air_date}</span>
                                    <span>{item.vote_average}</span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            <RemoveRedEyeIcon/><span className="btn">Watched</span>
                            </Button>
                            <Button size="small" color="secondary">
                            <FavoriteIcon/><span className="btn">Watch Later</span>
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default MainContent;