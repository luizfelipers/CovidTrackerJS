import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
    console.log(confirmed);
    if(!confirmed){
        return 'Loading...';

    }

    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={8} s={2} md={2} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                delay={1}
                                duration={1}
                                separator='.'
                                
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Número de casos de Covid19

                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}  xs={8} s={2} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                        <CountUp
                         start={0}
                         end={recovered.value}
                         delay={1}
                         duration={1}
                         separator='.'
                        /></Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>
                      Número de recuperados da Covid19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}  xs={8} s={2} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                        <CountUp
                         start={0}
                         end={deaths.value}
                         delay={1}
                         duration={1}
                         separator='.'
                        />
                        </Typography>
                        <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant='body2'>
                       Número de óbitos pela Covid19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={8} s={2} md={2} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>% of deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={  deaths.value / confirmed.value }
                                delay={0}
                                duration={1}
                                
                                
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Taxa total de óbitos

                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards
