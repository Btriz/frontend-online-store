import React from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';
import Nav from '../components/Nav';
import empty from '../img/background/urban-681.png';
import cart from '../img/background/clip-1082.png';
import calculator from '../img/background/urban-867.png';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: JSON.parse(localStorage.getItem('product')),
      currentAmount: 0,
    };
  }

  componentDidMount() {
    this.handleCurrentAmount();
  }

  // MUDA O VALOR TOTAL DE ACORDO COM A QUANTIDADE TOTAL DE PRODUTOS
  handleCurrentAmount = () => {
    const cartProducts = JSON.parse(localStorage.getItem('product'));

    if (cartProducts !== null) {
      this.setState({
        currentAmount: cartProducts.reduce((acc, curr) => acc + curr.amount, 0),
      });
    }
  }

  // DELETA UM ITEM DA LISTA DE ACORDO COM ID DO PARÂMENTRO
  handleClick = (itemId) => {
    const { cartProducts } = this.state;

    cartProducts.forEach((product, index) => {
      if (product.itemId === itemId) {
        cartProducts.splice(index, 1);
        console.log(itemId);
      }

      localStorage.setItem('product', JSON.stringify(cartProducts));
      this.setState({
        cartProducts: JSON.parse(localStorage.getItem('product')),
        currentAmount: cartProducts.reduce((acc, curr) => acc + curr.amount, 0),
      });
    });
  };

  checkIfEmpty = (cartProducts, currentAmount) => {
    if (cartProducts === null || cartProducts.length < 1) {
      return (
        <div
          className="cart-empty-message"
          data-testid="shopping-cart-empty-message"
          style={ { backgroundImage: `url(${empty})` } }
        >
          <h1>Seu carrinho está vazio</h1>
        </div>
      );
    }

    return (
      <div
        className="main cart-main"
        style={ { backgroundImage: `url(${cart})` } }
      >
        <h1>Carrinho</h1>

        <ul>
          <li className="title-li">
            <h5>Produto</h5>
            <h5>Quantidade</h5>
            <h5>Preço</h5>
          </li>

          {cartProducts.map((product) => (
            <List
              key={ product.itemId }
              product={ product }
              onClick={ this.handleClick }
              handleCurrentAmount={ this.handleCurrentAmount }
            />
          ))}

          <li className="total-price-li">
            <h3>Total</h3>
            <h2>{ `${Math.round(currentAmount * 100) / 100}` }</h2>
          </li>
        </ul>

        <div
          className="calculator"
          style={ { backgroundImage: `url(${calculator})` } }
        >
          <Link
            data-testid="checkout-products"
            to="/shopping-cart/checkout"
            className="green-button"
          >
            Checkout
          </Link>

        </div>
      </div>
    );
  }

  render() {
    const { cartProducts, currentAmount } = this.state;
    const { history } = this.props;

    return (
      <div>
        <Nav needBack history={ history } />
        {this.checkIfEmpty(cartProducts, currentAmount) }
      </div>
    );
  }
}

export default ShoppingCart;
