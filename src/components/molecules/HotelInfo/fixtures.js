import component from './';
import ImageMockPath from 'molecules/HotelCard/image.mock.png';

export default [
  {
    component,
    name: 'example',
    props: {
      image: ImageMockPath,
      name: 'Санаторий "Лесная новь" им. Ю.Ф. Янтарева',
      address: 'Кировская обл., Куменский р-н',
      phone: '+7 (914) 123 12 12',
      link: '#'
    }
  }
];
