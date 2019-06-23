import Api from './Api';

const Hotels = {
  // todo: uncomment attrs
  search: async (/* data */) => {
    const url = '/hotels/search';
    const data = {
      // todo: remove mock data
      data: {
        check_in: '2019-06-10T14:35:01.293Z',
        check_out: '2019-06-20T14:35:01.294',
        char: '',
        travellers: [
          {
            age_group: 'adult',
            age: 0
          }
        ]
      }
    };

    return await Api.get(url, data);
  },
  getById: async (/* id */) => {
    const id = '5c9dc3ba18b94f016306bf67'; // todo: remove mock data
    const url = `/hotels/${id}`;

    return await Api.get(url);
  },
  priceList: async (/* id, data */) => {
    const id = '5c9dc3ba18b94f016306bf67'; // todo: remove mock data
    const url = `/hotels/${id}/price_list`;
    const data = {
      // todo: remove mock data
      data: {
        check_in: '2019-06-10T14:35:01.293Z',
        check_out: '2019-06-20T14:35:01.294',
        travellers: [
          {
            age_group: 'adult',
            age: 0
          }
        ]
      }
    };

    return await Api.get(url, data);
  },
  tariffPrice: async (/* id, data */) => {
    const id = '5c9dc3ba18b94f016306bf67'; // todo: remove mock data
    const url = `/hotels/${id}/tariff_price`;
    const data = {
      // todo: remove mock data
      data: {
        check_in: '2019-06-10T14:35:01.293Z',
        check_out: '2019-06-20T14:35:01.294',
        room_type_id: '5c9dd19e18b94f006c4f9d6e',
        tariff_id: '5c9dd57918b94f006c4f9dcb',
        travellers: [
          {
            age_group: 'adult',
            age: 0
          }
        ]
      }
    };

    return await Api.get(url, data);
  }
};

export default Hotels;
