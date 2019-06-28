import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Item from './HomeItem';

class ItemList extends PureComponent {
  render() {
    const articleElements = this.props.items.map(item => <Item item={item} key={item.id} />);
    return <>{articleElements}</>;
  }
}

ItemList.propTypes = {
  items: PropTypes.string.isRequired
};

export default ItemList;
