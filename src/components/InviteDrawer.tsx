import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import Invite from './Invite';
import { GreenButton } from './StyledComponents';

const useStyles = makeStyles({
  inviteDrawer: {
    maxHeight: '85vh',
    width: 'auto',
  }
});

const InviteDrawer = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  const classes = useStyles();

  return (
    <React.Fragment>

      <GreenButton onClick={() => setOpen(true)}>Share</GreenButton>
        <Drawer style={{ maxHeight: '80vh' }} anchor='bottom' open={isOpen} onClose={() => setOpen(false)}>
          <div className={classes.inviteDrawer}>
            <Invite />
          </div>
      </Drawer>
    </React.Fragment>
  );
}

export default InviteDrawer