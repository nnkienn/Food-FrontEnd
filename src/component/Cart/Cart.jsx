// Cart.jsx
import { Divider, Grid, TextField } from '@mui/material';
import React from 'react';
import CartItem from './CartItem';
import AddressCard from './AddressCard';
import { Button } from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';

const items = [1, 1];

const Cart = () => {
  const createOrderUsingSelectedAddress = () => {
    // Function logic here
  };
  const handleOpenAddressModel = () => setOpen(true);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
  };

  const initialValues = {
    streetAddress: "",
    state: "",
    pincode: '',
    city: ""
  };

  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string().required("Pincode is required"),
    city: Yup.string().required("City is required")
  });

  const handleSubmit = (values) => {
    console.log("form value",values)
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <main className='lg:flex justify-between'>
        <section className='lg:w-[40%] space-y-6 lg:min-h-screen pt-10'>
          {items.map((item, index) => (
            <div key={index}>
              <CartItem />
            </div>
          ))}

          <Divider className="my-4" />

          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-4">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>$599</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>$9</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Coupon</p>
                <p>$33</p>
              </div>

              <Divider className="my-2" />
            </div>
            <div className="flex justify-between font-semibold text-gray-500">
              <p>Total pay</p>
              <p>$200</p>
            </div>
          </div>
        </section>

        <Divider orientation="vertical" flexItem />

        <section className="lg:w-[60%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className='text-center font-semibold text-2xl py-10'>
              Choose delivery address
            </h1>
            <div className='flex gap-5 flex-wrap justify-between'>
              {[1, 1, 1].map((item, index) => (
                <AddressCard key={index} handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true} />
              ))}
            </div>
            <div className="flex gap-5 w-64 p-5">
              <AddLocationIcon />
              <div className='space-y-3 text-gray-500'>
                <h1 className='font-semibold text-lg text-white '>Add new address</h1>

                <Button variant="outlined" fullWidth onClick={handleOpenAddressModel}  sx={{ color: '#f06b7a', borderColor: '#f06b7a', '&:hover': { backgroundColor: '#f06b7a', color: 'white' } }}>
                  Add
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="streetAddress"
                      label="Street Address"
                      fullWidth
                      variant="outlined"
                      helperText={<ErrorMessage name="streetAddress" component="span" className="text-red-500" />}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      as={TextField}
                      name="state"
                      label="State"
                      fullWidth
                      variant="outlined"
                      helperText={<ErrorMessage name="state" component="span" className="text-red-500" />}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      as={TextField}
                      name="pincode"
                      label="Pincode"
                      fullWidth
                      variant="outlined"
                      helperText={<ErrorMessage name="pincode" component="span" className="text-red-500" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="city"
                      label="City"
                      fullWidth
                      variant="outlined"
                      helperText={<ErrorMessage name="city" component="span" className="text-red-500" />}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button fullWidth type="submit" variant="contained" color="primary"   sx={{ backgroundColor: '#f06b7a', color: 'white', '&:hover': { backgroundColor: '#e05a68' } }}
                    >
                      Deliver here
                    </Button>

                  </Grid>
                </Grid>

              </form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
