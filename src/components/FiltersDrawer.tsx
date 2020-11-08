import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import Filters from './Filters';
import TuneIcon from 'mdi-react/TuneIcon'
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  filters: {
    minWidth: '360px',
  },
  filtersIcon: { position: 'absolute', top: '18px', right: '10px', width: '64px', color: '#66CC66' }
});

const FiltersDrawer = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  const classes = useStyles();

  return (
    <React.Fragment>
      <IconButton className={classes.filtersIcon} onClick={() => setOpen(true)}>
        <TuneIcon size={40} className={classes.filtersIcon}/>
      </IconButton>
        <Drawer style={{ height: '100vh' }} anchor='right' open={isOpen} onClose={() => setOpen(false)}>
          <div className={classes.filters}>
            <Filters {...{setOpen}} />
          </div>
      </Drawer>
    </React.Fragment>
  );
}

export default FiltersDrawer