import moment from 'Utils/moment';

const fields = [
  'address',
  'address.location',
  'address.coordinates',
  'hotel',
  'hotel.id',
  'hotel.name',
  'hotel.address',
  'hotel.address.location',
  'hotel.address.coordinates',
  'contract',
  'contract.number',
  'contract.begin_date',
  'contract.end_date',
  'check_in',
  'check_out',
  'travellers[]',
  'travellers[].first_name',
  'travellers[].last_name',
  'travellers[].middle_name',
  'travellers[].full_name',
  'travellers[].gender',
  'travellers[].age',
  'travellers[].age_group'
];

const placeholders = {
  address: 'Поиск по адресу',
  hotel: 'Поиск по названию санаторию',
  'travellers[].gender': 'пол',
  'travellers[].full_name': 'Фамилия Имя Отчество',
  'travellers[].age': 'возраст'
};

const labels = {};

const genderItems = [
  {
    value: 'male',
    label: 'мужской'
  },
  {
    value: 'female',
    label: 'женский'
  }
];

const extra = {
  'travellers[].gender': genderItems
};

const rules = {
  address: 'required',
  'address.location': 'required|string',
  'address.coordinates': 'required|array',
  hotel: 'required',
  'hotel.id': 'required|string',
  'hotel.name': 'required|string',
  check_in: 'required|date',
  check_out: 'required|date',
  'travellers[].age': 'integer|min:0|max:120'
};

const types = {
  'travellers[].age': 'number'
};

const values = {
  check_in: moment()
    .add(7, 'days')
    .format(),
  check_out: moment()
    .add(14, 'days')
    .format(),
  travellers: [
    {
      first_name: 'first_name',
      last_name: 'last_name',
      middle_name: 'middle_name',
      full_name: '',
      gender: null,
      age: null,
      age_group: null
    }
  ]
};

const output = {
  'travellers[].gender': ({ value }) => value
};

export default {
  fields,
  labels,
  placeholders,
  rules,
  types,
  values,
  extra,
  output
};
