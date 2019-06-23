import React from 'react';
import { Add } from 'icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { display, typography } from 'theme/mixins';

const Wrapper = styled.div`
  color: #3aa6d2;
  cursor: pointer;
  ${typography(14, 16, 500)};
  ${display('flex', 'center')};

  ${Add} {
    margin-right: 6px;
  }
  vertical-align: center;
`;

class AddTraveller extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    travellers: PropTypes.object.isRequired
  };

  static defaultProps = {
    className: ''
  };

  onClick = e => {
    const { travellers } = this.props;
    travellers.onAdd(e);
  };

  render() {
    const { travellers, ...rest } = this.props;

    return (
      <Wrapper {...rest} onClick={this.onClick}>
        <Add /> Добавить гостя
      </Wrapper>
    );
  }
}

export default styled(AddTraveller)``;
