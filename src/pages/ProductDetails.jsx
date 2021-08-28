import React from 'react';
import PropTypes from 'prop-types';
import DetailsCard from '../components/DetailsCard';
import EvaluationForms from '../components/EvaluationForms';
import UserRating from '../components/UserRating';
import Nav from '../components/Nav';
import free from '../img/free.png';
import background from '../img/background/clip-1670.png';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productQuantity: 0,
    };
  }

  componentDidMount() {
    this.handleClick();
  }

  // MUDA A QUANTIDADE TOTAL DE PRODUTOS
  handleClick = () => {
    const product = JSON.parse(localStorage.getItem('product'));
    if (product !== null) {
      this.setState({
        productQuantity: product.reduce((acc, curr) => acc + curr.qts, 0),
      });
    }
  }

  // EXIBE SE O FRETE É GRÁTIS SE DISPONIVEL
  availableQuantity = () => {
    const { location: { state: { shipping } } } = this.props;
    if (shipping.free_shipping) {
      return (
        <div className="details-free-shipping">
          <img src={ free } alt="free shipping" />
          <div data-testid="free-shipping">
            Frete Grátis
          </div>
        </div>
      );
    }
  }

  render() {
    const {
      history,
      location: { state: product },
      match: { params: { name } },
    } = this.props;

    const { productQuantity } = this.state;

    return (
      <div className="detail-page">
        <Nav
          needBack
          needCart
          productQuantity={ productQuantity }
          history={ history }
        />

        <main className="detail-main main">
          <div className="detail-title-div">
            { this.availableQuantity() }
            <h1 data-testid="product-detail-name">{ name }</h1>
          </div>

          <div className="details">
            <div
              className="detail-img-div"
            >
              <img src={ product.thumbnail } alt={ product.title } />
            </div>

            <DetailsCard onClick={ this.handleClick } product={ product } />
          </div>
        </main>
        <section
          className="evaluation-section"
          style={ { backgroundImage: `url(${background})` } }
        >
          <h2>Avaliações</h2>
          <EvaluationForms id={ product.id } />
          <UserRating id={ product.id } product={ product } />
        </section>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
