import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { ReactComponent as AvatarLogo } from '../../assets/avatar.svg'
import InboxIcon from '@mui/icons-material/Inbox';
import { Link } from 'react-router-dom';
function LeftSidebar() {
    return (
        <aside className='left--sidebar shadow-lg'>
            <div className="header flex pl-5 pt-4 pb-3 gap-3  items-center">
                <AvatarLogo className='w-[60px] h-[60px]' />
                <h4 className='text-[24px]'>Adminator</h4>
            </div>
            <List className=''>
                <Link to='/dashboard'>
                    <ListItem disablePadding >
                        <ListItemButton>
                            <ListItemText >
                                <h2 className='text-[16px] pl-5 font-bold'>Dashbaord</h2>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/items'>

                    <ListItem disablePadding>
                        <ListItemButton >
                            <ListItemText><h2 className='text-[16px] pl-5 font-bold'>Items</h2></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/settings'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText  >
                                <h2 className='text-[16px] pl-5 font-bold'>Settings</h2>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                </Link>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText  >
                            <h2 className='text-[16px] pl-5 font-bold'>Logout</h2>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </aside>
    )
}

export default LeftSidebar