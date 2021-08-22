import React from 'react';
import PropTypes from 'prop-types';
import home from '../img/background/urban-912.png';

class Search extends React.Component {
  render() {
    const { onChange, onClick, onKeyPress } = this.props;

    return (
      <div className="search-div" style={ { backgroundImage: `url(${home})` } }>
        <div className="search">
          <label
            htmlFor="searchInput"
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              data-testid="query-input"
              type="text"
              id="searchInput"
              name="query"
              onChange={ onChange }
              onKeyPress={ onKeyPress }
            />
          </label>

          <button
            data-testid="query-button"
            type="button"
            className="search-button"
            onClick={ onClick }
          >
            Buscar
          </button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};

export default Search;
