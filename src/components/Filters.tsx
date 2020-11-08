import { IconButton, createStyles, Grid,  withStyles } from '@material-ui/core'
import React from 'react'
import CloseIcon from 'mdi-react/CloseIcon'
import { GreenButton } from './StyledComponents'
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';

const filtersStyles = () => createStyles({
  closeIcon: { marginRight: 'auto', padding: '20px' },
  filtersMockImg: { width: '100%' },
  filter: {
    borderRadius: '15px'
  },
})

export interface FiltersProps {
  classes: any
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Filters: React.FC<FiltersProps> = ({ classes, setOpen }) => {
  
  const { mockFiltersImg } = useStaticQuery(graphql`
  query {
    mockFiltersImg: file(name: { eq: "filters_mock" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <Grid container direction='column' justify='center' alignItems='center' className={classes.mainContainer}>
      <IconButton className={classes.closeIcon} onClick={() => setOpen(false)}>
        <CloseIcon size={20} />
      </IconButton>
      <GatsbyImage fluid={mockFiltersImg?.childImageSharp.fluid} className={classes.filtersMockImg}></GatsbyImage>
        <Grid container justify='center' className={classes.actionButtons}>
          <GreenButton onClick={() => setOpen(false)}>Apply</GreenButton>
          {/* later separate "enter code" handling */}
      </Grid>
    </Grid>
  )}



export default withStyles(filtersStyles)(Filters)