import React from 'react';
import DevTools from 'mobx-react-devtools';
import MainProvider from 'common/MainProvider';

const ThemeProxy = props => {
  const {
    nextProxy: { value: NextProxy, next }
  } = props;

  return (
    <MainProvider>
      <NextProxy {...props} nextProxy={next()} />

      {process.env.NODE_ENV === 'development' && (
        <DevTools position={{ bottom: 5, right: 20 }} />
      )}
    </MainProvider>
  );
};

export default [ThemeProxy];
