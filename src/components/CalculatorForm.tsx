import DateTimePicker from '@mui/lab/DateTimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { Button, InputAdornment, TextField } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { useFormik } from 'formik'
import * as React from 'react'
import * as Yup from 'yup'
import { FormProps } from '../types/types'

const CalculatorForm: React.FC<FormProps> = ({ onSubmit }) => {
  const deliverySchema = Yup.object().shape({
    cart_value: Yup.number()
      .min(1, `Minimum amount is 1€`)
      .typeError('Invalid value')
      .required('Enter cart value'),
    delivery_distance: Yup.number()
      .min(0, `Can't be negative`)
      .typeError('Invalid value')
      .required('Enter Delivery Distance'),
    number_of_items: Yup.number()
      .min(1, `You can't order less than 1 item :(`)
      .typeError('Invalid value')
      .required('Enter the number of items'),
    date: Yup.date()
  })

  const formik = useFormik({
    initialValues: {
      cart_value: '',
      delivery_distance: '',
      number_of_items: '',
      date: new Date()
    },
    validationSchema: deliverySchema,
    onSubmit: onSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit} className="calculatorForm">
      <TextField
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">€</InputAdornment>
        }}
        id="cart_value"
        name="cart_value"
        label="Cart value"
        value={formik.values.cart_value}
        onChange={formik.handleChange}
        error={formik.touched.cart_value && Boolean(formik.errors.cart_value)}
        helperText={formik.touched.cart_value && formik.errors.cart_value}
      />

      <br />

      <TextField
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">meters</InputAdornment>
        }}
        id="delivery_distance"
        name="delivery_distance"
        label="Delivery distance"
        value={formik.values.delivery_distance}
        onChange={formik.handleChange}
        error={
          formik.touched.delivery_distance &&
          Boolean(formik.errors.delivery_distance)
        }
        helperText={
          formik.touched.delivery_distance && formik.errors.delivery_distance
        }
      />
      <br />

      <TextField
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">pcs</InputAdornment>
        }}
        id="number_of_items"
        name="number_of_items"
        label="Number of items"
        value={formik.values.number_of_items}
        onChange={formik.handleChange}
        error={
          formik.touched.number_of_items &&
          Boolean(formik.errors.number_of_items)
        }
        helperText={
          formik.touched.number_of_items && formik.errors.number_of_items
        }
      />
      <br />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="Delivery time"
          value={formik.values.date}
          inputFormat="dd/MM/yyyy hh:mm a"
          onChange={(val) => formik.setFieldValue('date', val)}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
      </LocalizationProvider>
      <br />
      <Button type="submit" variant="contained">
        Calculate
      </Button>
    </form>
  )
}

export default CalculatorForm
