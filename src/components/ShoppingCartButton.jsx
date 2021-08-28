import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../img/cart2.png';

class ShoppingCartButton extends React.Component {
  render() {
    const { productQuantity } = this.props;

    return (
      <div className="shopping-cart-button">
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <h1
            data-testid="shopping-cart-size"
            className="shopping-cart-size"
          >
            { productQuantity }
          </h1>
          <img src={ cart } alt="carrinho de compras" />
        </Link>
      </div>
    );
  }
}

ShoppingCartButton.propTypes = {
  productQuantity: PropTypes.number.isRequired,
};

export default ShoppingCartButton;
