import PropTypes from 'prop-types';
import React from 'react';
import PaymentMethods from '../components/PaymentMethods';
import CheckoutForms from '../components/CheckoutForms';
import Nav from '../components/Nav';
import back from '../img/background/urban-890.png';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      number: '',
      city: '',
      states: '',
      payment: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // ARMAZENA OS DADOS DO FORMS NO LOCAL STORAGE
  handleSubmit = (event) => {
    event.preventDefault();
    let registerUser = [];

    // REFERÊNCIA - https://abre.ai/c9iQ
    // Object.prototype.hasOwnProperty.call - VERIFICA SE JÁ EXISTE A PROPRIEDADE NO LOCAL STORAGE
    if (Object.prototype.hasOwnProperty.call(localStorage, 'registerUser')) {
      registerUser = JSON.parse(localStorage.getItem('registerUser'));
    }

    registerUser.push(this.state);
    localStorage.setItem('registerUser', JSON.stringify(registerUser));
    this.setState({
      name: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      number: '',
      city: '',
      states: '',
      payment: '',
    });
  }

  render() {
    const products = JSON.parse(localStorage.getItem('product'));
    const { history } = this.props;

    return (
      <div>
        <Nav needBack needCart history={ history } />
        <main
          className="main checkout-main"
          style={ { backgroundImage: `url(${back})` } }
        >
          <div className="order-details">
            <h3>Revise seu pedido</h3>
            <ul>
              {products.map((product) => (
                <li key={ product.itemId }>
                  <span>{ `${product.qts}x` }</span>
                  <span className="li-ellipsis">{product.title}</span>
                  <strong>{ `${Math.round(product.amount * 100) / 100}`}</strong>
                </li>
              ))}
            </ul>

            <h2>
              {` Total: R$ ${Math.round((
                products.reduce((acc, curr) => acc + curr.amount, 0)
              ) * 100) / 100}` }
            </h2>
          </div>

          <fieldset className="checkout-fieldset card">
            <form onSubmit={ this.handleSubmit }>
              <h3>Informações do comprador</h3>
              <CheckoutForms onChange={ this.handleChange } />
              <PaymentMethods onChange={ this.handleChange } />
              <button type="submit" className="green-button">Finalizar pedido</button>
            </form>
          </fieldset>
        </main>
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Checkout;
