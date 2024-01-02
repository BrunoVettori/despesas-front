import * as React from 'react'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
// import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
// import ExpandLess from '@mui/icons-material/ExpandLess'
// import ExpandMore from '@mui/icons-material/ExpandMore'
// import StarBorder from '@mui/icons-material/StarBorder'
import IconButton from '@mui/material/IconButton'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Grid } from '@mui/material'

export default function Sidebar() {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <Grid container direction="column">
        <Grid item container>
          <Grid item>
            <Collapse in={open} timeout="auto" orientation="horizontal">
              Menu
            </Collapse>
          </Grid>
          <Grid item>
            <IconButton color="primary" onClick={handleClick}>
              <MenuRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Collapse in={open} timeout="auto" orientation="horizontal">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
              {/* <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto">
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse> */}
            </List>
          </Collapse>
        </Grid>
      </Grid>
    </>
  )
}
