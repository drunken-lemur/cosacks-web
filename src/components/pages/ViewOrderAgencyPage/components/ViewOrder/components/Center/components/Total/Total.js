import React from 'react';
import { Text } from 'atoms';
import { Button } from 'forms';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils';
import styled from 'styled-components';
import { display, typography } from 'theme/mixins';

const Wrapper = styled.div`
  ${display('flex', 'center', 'flex-end')};

  ${Text} {
    color: #4a515c;
    margin-right: 20px;
    ${typography(16, 20, 700)};
  }
`;

class Total extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    total: PropTypes.number,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    className: '',
    onSubmit: () => null
  };

  render() {
    const { total, onSubmit, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Text>Итог: {formatPrice(total)}</Text>

        <Button onClick={onSubmit}>Забронировать</Button>
      </Wrapper>
    );
  }
}

export default styled(Total)``;
