import React from 'react';
import PaymentMethods from '../components/PaymentMethods';
import CheckoutForms from '../components/CheckoutForms';

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
    if (products !== null) {
      return (
        <div>
          <fieldset>
            <h3>Revise seus Produto</h3>
            <ul>
              {products.map((product) => (
                <li key={ product.itemId }>
                  <span>{product.qts}</span>
                  <span>{product.title}</span>
                  <span>{product.amount}</span>
                </li>
              ))}
            </ul>
            <span>{`Total ${products.reduce((acc, curr) => acc + curr.amount, 0)}`}</span>
          </fieldset>
          <fieldset>
            <form onSubmit={ this.handleSubmit }>
              <h3>Informações do comprador</h3>
              <CheckoutForms onChange={ this.handleChange } />
              <PaymentMethods onChange={ this.handleChange } />
              <button type="submit">Comprar</button>
            </form>
          </fieldset>
        </div>
      );
    } return (
      <h1>Seu carrinho está vazio</h1>
    );
  }
}

export default Checkout;
