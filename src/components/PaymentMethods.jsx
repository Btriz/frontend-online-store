import React from 'react';
import PropTypes from 'prop-types';

class PaymentMethods extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <h3>Meétodo de pagamento</h3>
        <label htmlFor="payment_1">
          <input
            type="radio"
            id="payment_1"
            value="boleto"
            name="payment"
            onChange={ onChange }
          />
          Boleto
        </label>
        <label htmlFor="payment_2">
          <input
            type="radio"
            id="payment_2"
            value="Visa"
            name="payment"
            onChange={ onChange }
          />
          Visa
        </label>
        <label htmlFor="payment_3">
          <input
            type="radio"
            id="payment_3"
            value="MasterCard"
            name="payment"
            onChange={ onChange }
          />
          MasterCard
        </label>
        <label htmlFor="payment_4">
          <input
            type="radio"
            id="payment_4"
            value="Elo"
            name="payment"
            onChange={ onChange }
          />
          Elo
        </label>
      </div>
    );
  }
}

PaymentMethods.propTypes = {
  onChange: PropTypes.string.isRequired,
};

export default PaymentMethods;
