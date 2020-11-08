import { createStyles, Grid, IconButton, Typography, withStyles } from '@material-ui/core'
import React, { FC } from 'react'
import RestaurantsList from '../components/restaurants/RestaurantsList'
import TopLayout from '../../plugins/gatsby-plugin-top-layout/TopLayout';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image'
import InviteDrawer from '../components/InviteDrawer';
import { WhiteButton } from '../components/StyledComponents';
import FiltersDrawer from '../components/FiltersDrawer';
import BottomAppBar from '../components/BottomAppBar';
interface Props {
  classes?: any
}

const restaurantStyles = createStyles({
  mainContainer: { minWidth: '100vw'},
  homeButtonIcon: { position: 'absolute', top: '8px', left: '8px', minWidth: '64px' },
  dynamicListHeaderText: { marginTop: '17vh' },
  actionButtons: { marginTop: '15px' }
})

const Restaurants: FC<Props> = ({ classes }) => {
  
  const { logoButton } = useStaticQuery(graphql`
    query {
      logoButton: file(name: { eq: "homebutton-logo" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <TopLayout>
      <Grid container direction='column' justify='center' alignItems='center' className={classes.mainContainer}>
        <Grid container direction='row' justify='space-between'>
          <Grid item>
          <IconButton className={classes.homeButtonIcon} onClick={() => navigate('/')}>
            <GatsbyImage fluid={logoButton?.childImageSharp.fluid} className={classes.homeButtonIcon}></GatsbyImage>
          </IconButton>
        </Grid>
        <Grid item>
          <FiltersDrawer />
        </Grid>
        </Grid>
          <Grid item className={classes.dynamicListHeaderText}>
            <Typography variant='h6' style={{ fontFamily: 'Mono Space'}}>Shared List</Typography>
          </Grid>
          <Grid item>
            <RestaurantsList/>
          </Grid>
          <Grid container justify='center' className={classes.actionButtons}>
            <WhiteButton onClick={() => ('/restaurants')}>Eat</WhiteButton>
            {/* later separate "enter code" handling */}
            <InviteDrawer />
          </Grid>
          <BottomAppBar />
      </Grid>
    </TopLayout>
  )
}

export default withStyles(restaurantStyles)(Restaurants)