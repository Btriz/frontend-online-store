import React from 'react';
import PropTypes from 'prop-types';
import master from '../img/mastercard.png';
import visa from '../img/visa.png';
import paypal from '../img/paypal.png';
import cash from '../img/dinheiro.png';

class PaymentMethods extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="form2">
        <h3>Método de pagamento</h3>
        <div>
          <label htmlFor="payment_1">
            <input
              type="radio"
              id="payment_1"
              value="boleto"
              name="payment"
              onChange={ onChange }
            />
            <img src={ cash } alt="cash" />
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
            <img src={ visa } alt="visa" />
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
            <img src={ master } alt="visa" />
            MasterCard
          </label>

          <label htmlFor="payment_4">
            <input
              type="radio"
              id="payment_4"
              value="paypal"
              name="payment"
              onChange={ onChange }
            />
            <img src={ paypal } alt="visa" />
            PayPal
          </label>
        </div>
      </div>
    );
  }
}

PaymentMethods.propTypes = {
  onChange: PropTypes.string.isRequired,
};

export default PaymentMethods;
