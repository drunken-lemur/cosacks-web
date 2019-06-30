import React from 'react';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import {configure, mount, render, shallow} from 'enzyme';

import MainProvider from 'common/MainProvider';

configure({adapter: new Adapter()});

global.shallow = shallow;
global.render = render;
global.mount = mount;

const wrapWithContext = (fn, children, options) => {
  return fn(<MainProvider>{children}</MainProvider>, options);
};

global.shallowWithContext = (...args) => wrapWithContext(shallow, ...args);
global.mountWithContext = (...args) => wrapWithContext(mount, ...args);
global.renderWithContext = (...args) => wrapWithContext(render, ...args);
