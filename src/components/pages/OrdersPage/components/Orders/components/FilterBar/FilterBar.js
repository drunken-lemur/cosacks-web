import React from 'react';
import { Button } from 'forms';
import PropTypes from 'prop-types';
import { Plus, Close } from 'icons';
import styled from 'styled-components';
import { typography, display, ruiClass } from 'theme/mixins';

import { Filter } from './components';

const Wrapper = styled.div`
  ${display('flex', 'center', 'space-between')};

  ${Filter} {
    margin-left: 7px;
  }
`;

const Filters = styled.div`
  width: 100%;
  height: 42px;
  margin-right: 22px;
  background: #fbfbfb;
  border-radius: 4px;
  border: 1px solid #d1d5db;

  ${display('flex', 'center', 'space-between')};
`;

const FiltersWrapper = styled.div`
  ${display('flex', 'center', 'flex-start')};
`;

const AddFilter = styled(Button).attrs({
  variant: 'outline'
})`
  ${ruiClass('rui-Button-button')} {
    margin-left: 6px;
    ${ruiClass('rui-Button-content', 'span')} {
      height: 30px;
      ${typography(13, 30)};
    }
  }
`;

const ClearAll = styled.div`
  height: 30px;
  padding: 0 20px;
  cursor: pointer;
  border-left: 1px solid #d1d5db;
  ${display('flex', 'center', 'center')};
`;

const DownloadButton = styled(Button).attrs({
  rounded: true,
  variant: 'outline'
})``;

class FilterBar extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    filters: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string
      })
    ),
    onClear: PropTypes.func
  };

  static defaultProps = {
    className: '',
    filters: [],
    onClear: () => null
  };

  render() {
    const { filters, onClear, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Filters>
          <FiltersWrapper>
            {filters.map(({ name, value }) => (
              <Filter {...{ name, value }} />
            ))}
            <AddFilter icon={<Plus />}>Фильтр</AddFilter>
          </FiltersWrapper>

          <ClearAll>
            <Close />
          </ClearAll>
        </Filters>

        <DownloadButton>Скачать отчет</DownloadButton>
      </Wrapper>
    );
  }
}

export default styled(FilterBar)``;
