import React from 'react'
import MuiLink from '@material-ui/core/Link'
import { Link as GatsbyLink } from 'gatsby'

const CustomMuiLink = React.forwardRef(function Link(props: any, ref: any) {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />
})

export default CustomMuiLink
