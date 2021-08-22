import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import ShoppingCartButton from './ShoppingCartButton';

class Nav extends React.Component {
  render() {
    const { needBack, needCart, productQuantity, history } = this.props;

    return (
      <nav className="back-and-cart-nav">
        { needBack && <BackButton history={ history } /> }
        <div className="home-nav-items">
          <Link to="/"><h3>HOME</h3></Link>
          <h3>PROMOÇÕES</h3>
          <h3>BAIXE O APP</h3>
          <h3>FALE CONOSCO</h3>
        </div>
        { needCart && <ShoppingCartButton productQuantity={ productQuantity } /> }
      </nav>
    );
  }
}

Nav.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  needBack: PropTypes.bool.isRequired,
  needCart: PropTypes.bool.isRequired,
  productQuantity: PropTypes.number.isRequired,
};

export default Nav;
