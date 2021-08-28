import React from 'react';
import PropTypes from 'prop-types';

class UserRating extends React.Component {
  getStars = (rate) => {
    let stars = '⭐';
    for (let i = 1; i < rate; i += 1) {
      stars += '⭐';
    }
    return stars;
  }

  renderEvaluation = () => {
    const { id } = this.props;
    const evaluation = JSON.parse(localStorage.getItem('evaluation'));
    if (evaluation !== null) {
      return evaluation.filter((element) => element.id === id).map((element) => (
        <fieldset
          key={ element.email }
          className="user-rate"
        >
          <legend>{ this.getStars(element.rating) }</legend>
          <h5>{element.email}</h5>
          <p>{element.message}</p>
        </fieldset>
      ));
    }
  }

  render() {
    return (
      <>{this.renderEvaluation()}</>
    );
  }
}

UserRating.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UserRating;
