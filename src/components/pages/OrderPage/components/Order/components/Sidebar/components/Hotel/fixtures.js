import component from './Hotel';

export default [
  {
    component,
    name: 'example',
    props: {
      title: 'Санаторий "Лесная новь" им. Ю.Ф.Янтарева',
      address: 'г. Кисловодск, ул. Коминтерна, д. 10- 11',
      checkin: '12:00',
      checkout: '14:00',
      description: 'Расчетный час – день',
      note: 'Учет в путевках',
      phone: '+7 (495) 123-34-34',
      url: '#'
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      title: 'Санаторий "Новая жизнь" им. В.П.Иванова',
      address: 'г. Орел, ул. Большая Проходная, д. 12- 17',
      checkin: '12:00',
      checkout: '11:00',
      description: 'Расчетный час – день',
      note: 'Учет в путевках',
      phone: '+7 (495) 999-66-33',
      url: '#'
    }
  }
];
