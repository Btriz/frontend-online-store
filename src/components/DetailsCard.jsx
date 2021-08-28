import React from 'react';
import PropTypes from 'prop-types';
import AddToCartButton from './AddToCartButton';
import low from '../img/low.png';

class DetailsCard extends React.Component {
  render() {
    const { product, onClick } = this.props;
    return (
      <div
        className="card detail-specs-card"
      >
        <h6>{`${product.condition} | ${product.sold_quantity} vendidos`}</h6>

        { product.original_price && (
          <div className="low-price">
            <h4>{ `R$ ${product.original_price}` }</h4>
            <img src={ low } alt="preço baixo" />
          </div>
        )}

        <h2>{ `R$ ${product.price}` }</h2>

        <ul>
          { product.attributes.map((attribute) => {
            const attributes = `${attribute.name}: ${attribute.value_name}`;
            return (
              <li key={ attribute.id }>
                {attributes}
              </li>
            );
          }) }
        </ul>

        <AddToCartButton
          onClick={ onClick }
          product={ product }
          testid="product-detail-add-to-cart"
        />
      </div>
    );
  }
}

DetailsCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DetailsCard;
