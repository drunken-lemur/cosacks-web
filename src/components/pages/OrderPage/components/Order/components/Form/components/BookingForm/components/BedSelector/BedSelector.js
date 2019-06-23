import React from 'react';
import { Chip } from 'atoms';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DoubleTitle } from 'molecules';

const Wrapper = styled.div`
  display: flex;

  ${Chip} + ${Chip} {
    margin-left: 12px;
  }
`;

class BedSelector extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    className: PropTypes.string,
    max: PropTypes.number,
    selected: PropTypes.number,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    title: '',
    subTitle: '',
    className: '',
    max: 0,
    selected: 0,
    onSelect: () => null
  };

  render() {
    const { title, subTitle, max, selected, onSelect, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <DoubleTitle {...{ title, subTitle }}>
          {new Array(max).fill().map((_, key) => (
            <Chip
              key={`chip_${key + 1}`}
              label={key + 1}
              isSelected={key + 1 === selected}
              onClick={e => onSelect(e, key + 1)}
            />
          ))}
        </DoubleTitle>
      </Wrapper>
    );
  }
}

export default styled(BedSelector)``;
