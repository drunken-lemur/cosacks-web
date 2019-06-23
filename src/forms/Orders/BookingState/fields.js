import { Input, Address, SelectX } from 'forms';
import moment from "Utils/moment";

const fields = [
  'hotel',
  'hotel.id',
  'hotel.name',
  'hotel.address',
  'hotel.address.location',
  'hotel.address.coordinates',
  'address.location',
  'address.coordinates',
  'check_in',
  'check_out',
  'travellers[]',
  'travellers[].first_name',
  'travellers[].last_name',
  'travellers[].middle_name',
]

const placeholders = {
  address: 'Поиск по адресу',
  hotel: 'Поиск по названию санаторию'
}

const labels = {
}

const extra = {
  address: {
    component: Address
  },
  hotel: {
    component: SelectX
  },
  contract: {
    component: Input
  }
}

const rules = {
  'address': 'required',
  'address.location': 'required|string',
  'address.coordinates': 'required|array',
  'hotel': 'required',
  'hotel.id': 'required|string',
  'hotel.name': 'required|string',
  'check_in': 'required|date',
  'check_out': 'required|date'
}

const types = {
}

const values = {
  check_in: moment().add(7, 'days').format(),
  check_out: moment().add(14, 'days').format(),
  travellers: [
    { first_name: 'Александр', last_name: 'Котов', gender: 'male', age: 35 }
  ]
}

export default {
  fields,
  labels,
  placeholders,
  rules,
  types,
  values,
  extra
};

