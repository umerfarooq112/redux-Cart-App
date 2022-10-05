import { RestaurantMenu } from '@mui/icons-material'
import { Snackbar } from '@mui/material'
import React from 'react'

function ToastMessage({ message, ...rest }) {


    return (
        <Snackbar
            anchorOrigin={{ vertical: rest.vertical, horizontal: rest.horizontal }}
            message={message.message}
            {...rest}

        />)
}

export default ToastMessage