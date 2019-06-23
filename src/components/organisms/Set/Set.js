import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

class Set extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    component: PropTypes.func.isRequired,
    props: PropTypes.object,
    propsList: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    props: {},
    propsList: [],
    className: ''
  };

  render() {
    const { props, propsList, component: Component, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        {propsList.map((props_, key) => (
          <Component key={key} {...{ ...props, ...props_ }} />
        ))}
      </Wrapper>
    );
  }
}

export default styled(Set)``;
