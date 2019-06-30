import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {ApplyTheme} from 'rambler-ui/theme';
import {createTheme} from 'rambler-ui/theme/base';

import colors from 'themes/colors';

@observer
class RamblerTheme extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    config: PropTypes.object.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {children, config} = this.props;

    if (!config.colors) {
      config.colors = {};
    }

    const theme = createTheme({
      ...config,
      colors: {
        ...colors,
        ...config.colors
      }
    });

    return <ApplyTheme theme={theme}>{children}</ApplyTheme>;
  }
}

export default RamblerTheme;
