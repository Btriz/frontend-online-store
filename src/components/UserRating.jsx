import React from 'react';
import PropTypes from 'prop-types';

class UserRating extends React.Component {
  renderEvaluation = () => {
    const { id } = this.props;
    const evaluation = JSON.parse(localStorage.getItem('evaluation'));
    if (evaluation !== null) {
      return evaluation.filter((element) => element.id === id).map((element) => (
        <div key={ element.email }>
          <fieldset>
            <span>{element.email}</span>
            <span>{element.message}</span>
            <span>{element.rating}</span>
          </fieldset>
        </div>
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
