import React from 'react';
import PropTypes from 'prop-types';
import statesData from '../statesData';

class CheckoutForms extends React.Component {
  renderFullName = () => {
    const { onChange } = this.props;
    return (
      <label htmlFor="name">
        <input
          required
          placeholder="Nome completo"
          data-testid="checkout-fullname"
          id="name"
          name="name"
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }

  renderCPF = () => {
    const { onChange } = this.props;
    return (
      <label htmlFor="cpf">
        <input
          maxLength="11"
          placeholder="CPF"
          data-testid="checkout-cpf"
          id="cpf"
          name="cpf"
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }

  renderEmail = () => {
    const { onChange } = this.props;
    return (
      <label htmlFor="email">
        <input
          placeholder="Email"
          data-testid="checkout-email"
          id="email"
          name="email"
          type="email"
          onChange={ onChange }
        />
      </label>
    );
  }

  renderPhone = () => {
    const { onChange } = this.props;
    return (
      <label htmlFor="phone">
        <input
          maxLength="12"
          placeholder="Telefone"
          data-testid="checkout-phone"
          id="phone"
          name="phone"
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }

  renderCEP = () => {
    const { onChange } = this.props;
    return (
      <label htmlFor="cep">
        <input
          maxLength="8"
          placeholder="CEP"
          data-testid="checkout-cep"
          id="cep"
          name="cep"
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }

  renderAddress = () => {
    const { onChange } = this.props;
    return (
      <label htmlFor="address">
        <input
          placeholder="Endereço"
          data-testid="checkout-address"
          id="address"
          name="address"
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }

  renderComplement = () => {
    const { onChange } = this.props;
    return (
      <label htmlFor="complement">
        <input
          placeholder="Complemento"
          id="complement"
          name="complement"
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }

  renderNumber = () => {
    const { onChange } = this.props;
    return (
      <label htmlFor="number">
        <input
          placeholder="Número"
          id="number"
          name="number"
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }

  renderCity = () => {
    const { onChange } = this.props;
    return (
      <label htmlFor="city">
        <input
          placeholder="Cidade"
          id="city"
          name="city"
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }

  renderStates = () => {
    const { onChange } = this.props;
    const states = (
      <label htmlFor="states">
        <select id="states" name="states" onChange={ onChange }>
          {statesData.map((state) => (
            <option key={ state.value } value={ state.value }>{state.label}</option>
          ))}
        </select>
      </label>
    );
    return states;
  }

  render() {
    return (
      <>
        { this.renderFullName() }
        { this.renderCPF() }
        { this.renderEmail() }
        { this.renderPhone() }
        { this.renderCEP() }
        { this.renderAddress() }
        { this.renderComplement() }
        { this.renderNumber() }
        { this.renderCity() }
        { this.renderStates() }
      </>
    );
  }
}

CheckoutForms.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CheckoutForms;
