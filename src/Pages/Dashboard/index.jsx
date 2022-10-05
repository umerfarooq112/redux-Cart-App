import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AxiosClient from "../../Common";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormLabel } from '@mui/material';
import { useFormik } from "formik";
function Dashboard() {
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
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    p: 4,
  };

  return <>
    <Button onClick={handleOpen} variant="contained">Add Item</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <FormLabel>Name </FormLabel>
            <TextField id="name" name='name'
              onChange={formik.handleChange}
              value={formik.values.name}
              label="Name" variant="outlined" />
          </div>
          <div>
            <FormLabel>Price </FormLabel>
            <TextField id="name"
              onChange={formik.handleChange}
              value={formik.values.price}
              type='number'
              label="Name" name='price' variant="outlined" margin="normal" />
          </div>
          <div>
            <FormLabel>Description </FormLabel>
            <TextField
              placeholder="Description"
              name='description'
              multiline
              rows={2}
              maxRows={4}
              onChange={formik.handleChange}
              value={formik.values.description}
            />    </div>
          <Button variant="outlined" onClick={handleClose}>cancel</Button>
          <Button variant="contained" type="submit" >Save</Button>
        </form>
      </Box>
    </Modal>
    <Table component={Paper} className='my-1'>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          Data.map(items => {
            return <TableRow key={items._id}>
              <TableCell component="th" scope="row">
                {items._id}
              </TableCell>
              <TableCell component="th" scope="row">
                {items.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {items.price}
              </TableCell>
            </TableRow>
          })
        }
      </TableBody>
    </Table>
  </>;
}

export default Dashboard;
