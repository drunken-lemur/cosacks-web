import React, { Fragment } from 'react';
import reset from 'styled-reset';
import { Provider } from 'mobx-react';
import { ApplyTheme } from 'rambler-ui/theme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from 'theme';
import globalCss from 'theme/global.css';

import AuthStore from "Stores/AuthStore";

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${globalCss};
`;

const stores = {
  authStore: AuthStore.create()
}

class MainProvider extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <BrowserRouter>
        <Provider {...stores}>
          <ThemeProvider theme={theme}>
            <ApplyTheme theme={theme}>
              <Fragment>
                <GlobalStyle />
                {children}
              </Fragment>
            </ApplyTheme>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default MainProvider;
