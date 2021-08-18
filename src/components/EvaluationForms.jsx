import React from 'react';
import PropTypes from 'prop-types';
import InputRadio from './InputRadio';

class EvaluationForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      rating: '',
      id: props.id,
    };
  }

  // CAPTURA OS VALORES DOS INPUT
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // ARMAZENA OS DADOS DA AVALIÇÃO NO LOCAL STORAGE
  handleSubmit = (event) => {
    event.preventDefault();
    let evaluation = [];
    // REFERÊNCIA - https://abre.ai/c9iQ
    // Object.prototype.hasOwnProperty.call - VERIFICA SE JÁ EXISTE A PROPRIEDADE NO LOCAL STORAGE
    if (Object.prototype.hasOwnProperty.call(localStorage, 'evaluation')) {
      evaluation = JSON.parse(localStorage.getItem('evaluation'));
    }

    evaluation.push(this.state);
    localStorage.setItem('evaluation', JSON.stringify(evaluation));
    this.setState({ email: '', message: '', rating: 0 });
  }

  renderEmail = () => {
    const { email } = this.state;
    return (
      <label htmlFor="email">
        <input
          value={ email }
          required
          placeholder="Email"
          id="email"
          onChange={ this.handleChange }
          name="email"
          type="email"
        />
      </label>
    );
  }

  renderTextarea = () => {
    const { message } = this.state;
    return (
      <label htmlFor="message">
        <textarea
          value={ message }
          placeholder="Mensagem (opcional)"
          data-testid="product-detail-evaluation"
          id="message"
          name="message"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    return (
      <fieldset>

        <form onSubmit={ this.handleSubmit }>
          { this.renderEmail() }
          { this.renderTextarea() }
          <InputRadio handleChange={ this.handleChange } />
          <button type="submit">Avaliar</button>
        </form>

      </fieldset>
    );
  }
}

EvaluationForms.propTypes = {
  id: PropTypes.string.isRequired,
};
export default EvaluationForms;
