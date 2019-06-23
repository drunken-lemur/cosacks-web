import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import _debounce from 'lodash/debounce';
import styled from 'styled-components';

import HotelsStore from 'Stores/FiltersStore/HotelsStore';

import { Field, SelectX } from 'forms';

@observer
class NameField extends React.Component {
  constructor(props) {
    super(props);

    this.hotelsStore = HotelsStore.create();
  }

  @computed get options() {
    return this.hotelsStore.isFetched ? this.hotelsStore.selectOptions : [];
  }

  onSearchHandler = _debounce((chars = '') => {
    const data = { chars };

    if (chars.length >= 3) this.hotelsStore.fetch({ data });
  }, 500);

  render() {
    const { field, ...rest } = this.props;

    return (
      <Field
        field={field}
        component={SelectX}
        items={this.options}
        valueKey="id"
        labelKey="name"
        autoComplete="off"
        isLoading={this.hotelsStore.isPending}
        onSearch={this.onSearchHandler}
        {...rest}
      />
    );
  }
}

NameField.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  field: PropTypes.object.isRequired
};

export default styled(NameField)``;
