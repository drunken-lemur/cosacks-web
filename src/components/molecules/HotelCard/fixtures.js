import component from './';
import ImageMockPath from './image.mock.png';

export default [
  {
    component,
    name: 'default',
    props: {
      name: 'Санаторий "Лесная новь" им. Ю.Ф. Янтарева',
      rating: 9.1,
      address: 'Кировская обл., Куменский р-н, пгт Нижнеивкино, ул. Курортная',
      price: 6300,
      image: ImageMockPath
    }
  },
  {
    component,
    name: 'without image',
    props: {
      name: 'Санаторий "Лесная новь" им. Ю.Ф. Янтарева',
      rating: 9.1,
      address: 'Кировская обл., Куменский р-н, пгт Нижнеивкино, ул. Курортная',
      price: 6300
    }
  },
  {
    component,
    name: 'active',
    props: {
      name: 'Санаторий «Алтай-West»',
      rating: 9.1,
      active: true,
      address: 'Алтайский край, г. Белокуриха, ул. Славского, д. 39',
      price: 6300,
      image: ImageMockPath
    }
  }
];
