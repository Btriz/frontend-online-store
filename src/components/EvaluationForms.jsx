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
      <label className="evaluation-email" htmlFor="email">
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
      <label className="evaluation-message" htmlFor="message">
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
      <form
        onSubmit={ this.handleSubmit }
        className="evaluation-form"
      >
        <div className="evaluation-form-div">
          <div className="">
            { this.renderEmail() }
            { this.renderTextarea() }
          </div>

          <InputRadio handleChange={ this.handleChange } />
        </div>

        <button type="submit" className="blue-button">Avaliar</button>
      </form>
    );
  }
}

EvaluationForms.propTypes = {
  id: PropTypes.string.isRequired,
};
export default EvaluationForms;
