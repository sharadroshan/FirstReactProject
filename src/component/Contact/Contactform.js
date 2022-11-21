import { AllInclusiveRounded, Message } from '@mui/icons-material'
import { CardContent, Typography, Card, TextField, Grid, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react'


export default function Contactform() {

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: ""

  })
  const [isSuccess, setIsSuccess] = useState(false);

  console.log('data.email', data.email);

  const handlerChange = (event) => {
    const { name, value } = event.target;

    if (name === "phone" && value.length > 10) {
      console.log("returning from here")
      return
    }

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.fname !== "" && data.lname !== "" && data.email !== "" && data.message !== "" && data.phone !== "" && data.email.includes('@') && (data.email.includes('.com') || data.email.includes('.co'))) {
      toast.success("Successfully Submitted !!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsSuccess(true);
      return
    } else {
      if (data.fname === '') {
        toast.error("First name is requird", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });

      }
      console.log("This is lname ", data.lname)
      if (data.lname === '') {
        toast.error("Last name is requird", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });

      }
      if (data.email === '') {
        toast.error("Email id is requird", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });

      }
      if (data.phone === '') {
        toast.error("Phone number is requird", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });

      }
      if (data.message === '') {
        toast.error("Message is requird", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });
      }
      if (!data.email.includes('@')) {
        toast.error("Invalid Email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });
      }

      if (!data.email.includes('.com') && !data.email.includes('.co')) {
        toast.error("Invalid Email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });
      }
    }
  }

  console.log(data);

  return (
    <div>
      <h1>{data.email}</h1>
      <Typography gutterBottom variant="h3" align="center">
        Contact Form
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={(event) => handleSubmit(event)}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField onChange={handlerChange} label="First Name" value={data.fname} name='fname' placeholder="Enter first name" variant='outlined' fullWidth />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField onChange={handlerChange} label="Last Name" name='lname' value={data.lname} placeholder="Enter last name" variant='outlined' fullWidth />
              </Grid>
              <Grid xs={12} item>
                <TextField onChange={handlerChange} type="text" name='email' label="Email" value={data.email} placeholder="Enter email name" variant='outlined' fullWidth />
              </Grid>
              <Grid xs={12} item>
                <TextField onChange={handlerChange} type="Number" name='phone' label="phone" value={data.phone} placeholder="Enter phone number" variant='outlined' fullWidth />
              </Grid>
              <Grid xs={12} item>
                <TextField onChange={handlerChange} label="Message" name='message' multiline rows={4} value={data.message} placeholder="Type your message here" variant='outlined' fullWidth />
              </Grid>
            </Grid>
            <Button type='submit' variant='contained' color='primary' fullWidth sx={{ mt: 4 }}>Submit</Button>
          </form>

        </CardContent>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {

        isSuccess ?
          <>
            <Grid item xs={12} md={6} >
              <h1> first name - {data.fname}</h1><br />
              <h1>last name -  {data.lname}</h1><br />
              <h1>email - {data.email}</h1><br />
              <h1> Phone -{data.phone}</h1><br />
              <h1>Message -{data.message}</h1>
            </Grid>
          </>

          :
          null

      }

    </div>
  )
}
