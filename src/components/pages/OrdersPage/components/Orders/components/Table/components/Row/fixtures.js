import component from './';

export default [
  {
    component,
    name: 'example 1',
    props: {
      id: '123123',
      checkin: '02-01-2019',
      checkout: '02-01-2019',
      guests: {
        people: 45,
        rooms: 10
      },
      sanatory: 'Филиал-санаторий "Руно" СХК Донагрокурорт',
      manager: 'Иванов И. И.',
      changed: '02-01-2019 в 13:34',
      status: 'reserved',
      messages: 2
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      id: '02-123123',
      checkin: '02-01-2019',
      checkout: '02-01-2019',
      guests: {
        people: 10,
        rooms: 5
      },
      sanatory: 'Эко-курорт «Марьин остров»',
      manager: 'Тутербродов Е. А.',
      changed: '02-01-2019 в 13:34',
      status: 'accepted',
      messages: 0
    }
  },
  {
    component,
    name: 'example 3',
    props: {
      id: '4323432',
      checkin: '02-01-2019',
      checkout: '02-01-2019',
      guests: {
        people: 34,
        rooms: 15
      },
      sanatory: 'Филиал-санаторий "Руно" СХК Донагрокурорт',
      manager: 'Иванов И. И.',
      changed: '02-01-2019 в 13:34',
      status: 'canceled',
      messages: 0
    }
  },
  {
    component,
    name: 'example 4',
    props: {
      id: '2342313',
      checkin: '02-01-2019',
      checkout: '02-01-2019',
      guests: {
        people: 23,
        rooms: 10
      },
      sanatory: 'Эко-курорт «Марьин остров»',
      manager: 'Тутербродов Е. А.',
      changed: '02-01-2019 в 13:34',
      status: 'accepted1c',
      messages: 1
    }
  },
  {
    component,
    name: 'example 5',
    props: {
      id: '1231231',
      checkin: '02-01-2019',
      checkout: '02-01-2019',
      guests: {
        people: 47,
        rooms: 14
      },
      sanatory: 'Филиал-санаторий "Руно" СХК Донагрокурорт',
      manager: 'Иванов И. И.',
      changed: '02-01-2019 в 13:34',
      status: 'error',
      messages: 0
    }
  },
  {
    component,
    name: 'example 6',
    props: {
      id: '1231231',
      checkin: '02-01-2019',
      checkout: '02-01-2019',
      guests: {
        people: 18,
        rooms: 4
      },
      sanatory: 'Золотая роща',
      manager: 'Тутербродов Е. А.  Карпов А. Н.',
      changed: '02-01-2019 в 13:34',
      status: 'accepted',
      messages: 0
    }
  }
];
