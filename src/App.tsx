import { Box } from '@material-ui/core'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import CalculatorForm from './components/CalculatorForm'
import { calculateDelivery } from './service/calculateDelivery'
import { DeliveryValues } from './types/types'

const App: React.FC = () => {
  const [delivery, setDelivery] = useState<number | null>(null)

  const getDelivery = (values: DeliveryValues) => {
    console.log(values)
    setDelivery(calculateDelivery(values))
  }

  return (
    <div className="App">
      <Box className="calculatorWrapper">
        <Typography variant="h5" component="h1" gutterBottom>
          Delivery Calculator
        </Typography>
        <CalculatorForm onSubmit={getDelivery} />
        {delivery !== null ? (
          <Box className="deliveryWrapper">
            <Typography>Delivery:</Typography>
            <Typography variant="h2">{delivery / 100} €</Typography>
          </Box>
        ) : null}
      </Box>
    </div>
  )
}

export default App
