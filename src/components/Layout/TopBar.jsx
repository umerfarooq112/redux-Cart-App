import { Badge, Button, Menu, MenuItem } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

import SettingsIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';

import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';


function TopBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='primary-topbar'>
            <div className="top-bar--content shadow-md pt-[25px] pr-10 pl-5 pb-3">
                <Box className='flex justify-between items-center '>
                    <div>
                        Topbar
                    </div>
                    <div className='flex gap-8   items-center' >
                        <Badge badgeContent={4} color="primary">
                            <NotificationsIcon color="action" />
                        </Badge>
                        <Badge badgeContent={4} color="primary">
                            <MailIcon color="action" />
                        </Badge>
                        <IconButton
                            id="basic-IconButton"

                            onClick={handleClick}


                        >
                            <SettingsIcon className='settings-icon' />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Box>
            </div>

        </div>
    )
}

export default TopBar