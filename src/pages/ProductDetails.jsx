import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../components/BackButton';
import DetailsCard from '../components/DetailsCard';
import ShoppingCartButton from '../components/ShoppingCartButton';
import EvaluationForms from '../components/EvaluationForms';
import UserRating from '../components/UserRating';

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
      return <span data-testid="free-shipping">Frete Grátis</span>;
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
        <nav className="detail-nav">
          <BackButton history={ history } />
          <ShoppingCartButton />
          <h1 data-testid="shopping-cart-size">{ productQuantity }</h1>
        </nav>

        <main className="detail-main">
          <div className="detail-title-div">
            <h1 data-testid="product-detail-name">{ name }</h1>
            { this.availableQuantity() }
          </div>

          <div className="details">
            <div
              className="detail-img-div"
            >
              <img src={ product.thumbnail } alt={ product.title } />
            </div>

            <DetailsCard onClick={ this.handleClick } product={ product } />
          </div>
          <div>
            <h4>Avaliações</h4>
            <EvaluationForms id={ product.id } />
            <UserRating id={ product.id } product={ product } />
          </div>
        </main>
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
