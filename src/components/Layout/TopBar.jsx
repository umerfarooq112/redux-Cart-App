import { Button, Menu, MenuItem } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

import SettingsIcon from '@mui/icons-material/Menu';



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
            <div className="top-bar--content shadow-md pt-[25px] pl-5 pb-3">
                <Box className='flex justify-between items-center '>
                    <div>
                        Topbar
                    </div>
                    <div >
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            variant='text'

                        >
                            <SettingsIcon className='settings-icon' />
                        </Button>
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