import React from 'react';
import {history} from 'utils';
import reset from 'styled-reset';
import {Provider} from 'mobx-react';
import {Router} from 'react-router-dom';
import {ApplyTheme} from 'rambler-ui/theme';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

import theme from 'theme';
import globalCss from 'theme/global.css';

import AuthStore from 'stores/auth/AuthStore';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${globalCss};
`;

class MainProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.authStore = AuthStore.create()
  }

  render() {
    const {authStore} = this;
    const {children} = this.props;

    return (
      <Router history={history}>
        <Provider authStore={authStore}>
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
