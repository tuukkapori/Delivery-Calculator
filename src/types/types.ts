export interface DeliveryValues {
  cart_value: string
  delivery_distance: string
  number_of_items: string
  date: Date
}

export interface FormProps {
  onSubmit: (values: DeliveryValues) => void
}
