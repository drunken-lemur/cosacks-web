import React from 'react';
import PropTypes from 'prop-types';
import {CustomRoute} from 'components/common';

class PageGroup extends React.PureComponent {
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        exact: PropTypes.bool,
        path: PropTypes.string,
        component: PropTypes.func,
        isPrivate: PropTypes.bool,
      })
    ),
  };

  static defaultProps = {
    routes: []
  };

  render() {
    const {routes} = this.props;

    return routes.map((route, key) => (
      <CustomRoute key={key} {...route}/>
    ));

  }
}

export default PageGroup;
