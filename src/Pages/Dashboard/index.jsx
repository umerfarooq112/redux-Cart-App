import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
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
    <Layout>
      <div className="dashboard-wrapper pl-5 pt-5">
        <Box>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, fuga?</p>
        </Box>
      </div>
    </Layout>
  </>;
}

export default Dashboard;
