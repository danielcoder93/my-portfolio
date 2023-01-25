import React, { Fragment } from "react";
import { validationSchema } from "./validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paper, Box, Grid, TextField, Typography, Button } from "@mui/material";
import axios from "axios";

// update your form to show correct fields - phone, name, email, message
// match yup validation with it

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (data: any) => {
    console.log(JSON.stringify(data, null, 2));
    try {
      await axios.post("/api/contact-form", data);
      //set some state to show a confirmation message
    } catch (e) {
      // set some state to show some error message
      console.log(e);
    }
  };
  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
            LET&apos;S TRANSFORM YOUR ONLINE BUSINESS
          </Typography>
          <Typography variant="h3" align="center" margin="dense">
            Start a conversation with us
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="fullname"
                label="Full Name"
                fullWidth
                margin="dense"
                {...register("fullname")}
                error={errors.fullname ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.fullname?.message as string}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="companyname"
                label="Company Name"
                fullWidth
                margin="dense"
                {...register("companyname")}
                error={errors.companyname ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.companyname?.message as string}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="email"
                label="Email"
                fullWidth
                margin="dense"
                {...register("email")}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message as string}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="phonenumber"
                label="Phone Number"
                fullWidth
                margin="dense"
                {...register("Phone Number")}
                error={errors.phonenumber ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.phonenumber?.message as string}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="message"
                label="Message"
                fullWidth
                margin="dense"
                {...register("message")}
                error={errors.message ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.phonenumber?.message as string}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default ContactUsForm;
