import { createStyles, Grid, IconButton, Typography, withStyles } from '@material-ui/core'
import React, { FC } from 'react'
import RestaurantsList from '../components/restaurants/RestaurantsList'
import TopLayout from '../../plugins/gatsby-plugin-top-layout/TopLayout';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image'
import InviteDrawer from '../components/InviteDrawer';
import { WhiteButton } from '../components/StyledComponents';

interface Props {
  classes?: any
}

const restaurantStyles = createStyles({
  mainContainer: { minWidth: '100vw'},
  homeButtonIcon: { position: 'absolute', top: '15px', left: '10px', minWidth: '64px' },
  dynamicListHeaderText: { marginTop: '25vh' },
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
        <IconButton className={classes.homeButtonIcon} onClick={() => navigate('/')}>
          <GatsbyImage fluid={logoButton?.childImageSharp.fluid} className={classes.homeButtonIcon}></GatsbyImage>
        </IconButton>
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
      </Grid>
    </TopLayout>
  )
}

export default withStyles(restaurantStyles)(Restaurants)