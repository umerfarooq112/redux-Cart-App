import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AxiosClient from "../../Common/AxiosClient";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormLabel } from '@mui/material';
import { useFormik } from "formik";
import Layout from "../../Layout";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Items() {
    const [Data, setTableData] = useState([])

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            description: ''
        },
        onSubmit: values => {
            console.log(values)
            AxiosClient.post('items/saveItems', values).then(res => {
                console.log(res, 'is the reponse')
                RefetchData()
                handleClose()
            })
        }
    })
    const RefetchData = () => {
        console.log('api func running')
        return AxiosClient.get('items/getAllItems').then(res => {
            console.log(res.data, 'get All items')
            setTableData(res.data)

        })
    }
    useEffect(() => {

        RefetchData()

    }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return <>
        <Layout>
            <div className="items-wrapper pl-5 pt-5 pr-5">
                <Box>
                    <Button onClick={handleOpen}>Open modal</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item Id</TableCell>
                                    <TableCell align="right">Item Name</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Description</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Data.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.description}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </Layout>
    </>;
}

export default Items;
