import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/image/default_icon.jpg';
import MyprofileIcon from '../assets/image/ビューティフルシャドー.jpg';

const Chat = (props)=> {
  const isQuestioin = (props.type === 'question');
  const classes = isQuestioin ? 'p-chat_row' : 'p-chat_reverse';
  return(
    <ListItem>
      <ListItemAvatar>
        {isQuestioin ? (
          <Avatar alt = 'icon' src = {MyprofileIcon}/>
        ) : (
          <Avatar alt = 'icon' src = {NoProfile} />
        )}

      </ListItemAvatar>
      <div className = "p-chat__bubble">{props.text}</div>
  </ListItem>
  )
}

export default Chat