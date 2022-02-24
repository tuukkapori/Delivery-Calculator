import { DeliveryValues } from '../types/types'

const isRushHour = (deliveryDate: Date): boolean => {
  return (
    deliveryDate.getDay() === 5 &&
    deliveryDate.getHours() >= 15 &&
    deliveryDate.getHours() < 19
  )
}

const manyItemsSurcharge = (items: number): number => {
  if (items <= 4) {
    return 0
  } else {
    return (items - 4) * 50
  }
}

const lowCartValueSurcharge = (cart: number): number => {
  if (cart >= 1000) {
    return 0
  }
  return 1000 - cart
}

const deliveryBasedOnDistance = (distance: number): number => {
  return Math.ceil(distance / 500) * 100
}

export const calculateDelivery = (values: DeliveryValues) => {
  const { cart_value, delivery_distance, number_of_items, date } = values

  const cart = Number(cart_value) * 100

  if (cart > 10000) {
    return 0
  }

  const distance = Number(delivery_distance)
  const items = Number(number_of_items)

  let delivery =
    deliveryBasedOnDistance(distance) +
    lowCartValueSurcharge(cart) +
    manyItemsSurcharge(items)

  if (isRushHour(date)) {
    delivery *= 1.1
  }

  return Math.min(1500, Math.round(delivery))
}
