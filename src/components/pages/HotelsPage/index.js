import React from 'react';
import HotelsPage from './HotelsPage';
import { Provider, observer } from 'mobx-react';
import HotelsStore from 'stores/hotelsStore';
import { setDisplayName } from 'recompose';

@setDisplayName('HotelsPage')
@observer
class HotelWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.hotelsStore = HotelsStore.create();
    this.hotelsStore.search();
  }

  render() {
    const { ...props } = this.props;
    const { data: sanatories } = this.hotelsStore;

    if (this.hotelsStore.status === 'loading') {
      return <div>Loading...</div>;
    }

    if (this.hotelsStore.status === 'error') {
      return <div>Error {JSON.stringify(this.hotelsStore.errors)}</div>;
    }

    return (
      <Provider hotelsStore={this.hotelsStore}>
        <HotelsPage {...props} hotels={{ sanatories }} />
      </Provider>
    );
  }
}

export default HotelWrapper;
