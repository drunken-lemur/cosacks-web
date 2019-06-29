import React from 'react';
import {history} from 'utils';
import reset from 'styled-reset';
import {Provider} from 'mobx-react';
import {Router} from 'react-router-dom';
import {ApplyTheme} from 'rambler-ui/theme';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

import theme from 'theme';
import globalCss from 'theme/global.css';

import AuthStore from 'Stores/AuthStore';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${globalCss};
`;

const stores = {
  authStore: AuthStore.create()
};

class MainProvider extends React.PureComponent {
  render() {
    const {children} = this.props;

    return (
      <Router history={history}>
        <Provider {...stores}>
          <ThemeProvider theme={theme}>
            <ApplyTheme theme={theme}>
              <>
                <GlobalStyle/>
                {children}
              </>
            </ApplyTheme>
          </ThemeProvider>
        </Provider>
      </Router>
    );
  }
}

export default MainProvider;
