import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import Chat from './Chat';
import { IconButton } from '@material-ui/core';
import ChatIcon from 'mdi-react/ChatIcon'

const useStyles = makeStyles({
  chatDrawer: {
    maxHeight: '85vh',
    width: 'auto',
  }
});

const ChatDrawer = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  const classes = useStyles();

  return (
    <React.Fragment>
      <IconButton edge="start" color="primary" onClick={() => setOpen(true)}>
        <ChatIcon />
        </IconButton>
        <Drawer style={{ maxHeight: 'vh' }} anchor='bottom' open={isOpen} onClose={() => setOpen(false)}>
          <div className={classes.chatDrawer}>
            <Chat />
          </div>
      </Drawer>
    </React.Fragment>
  );
}

export default ChatDrawer