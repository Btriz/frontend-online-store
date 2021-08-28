import React from 'react';
import * as api from '../services/api';
import CategoryList from '../components/CategoryList';
import Products from '../components/Products';
import Search from '../components/Search';
import Nav from '../components/Nav';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryState: [],
      categoryId: '',
      query: '',
      productResults: [],
      productQuantity: 0,
    };
  }

  // FAZ A REQUISIÇÃO PRA LISTAR AS CATEGORIAS DISPONÍVEIS AO RENDERIZAR
  componentDidMount() {
    this.getCategoriesApi();
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

  // CAPTURA O VALOR DO INPUT - CATEGORIA OU TERMO - NO ESTADO
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

    if (event.target.name === 'categoryId') {
      this.getSearchApi(event.target.value, '');
    }
  }

  // ATIVADA NO ONCLICK DO BOTÃO DE BUSCA. ENVIA A CATEGORIA E TERMO DO ESTADO PARA API
  handleSearch = () => {
    const { categoryId, query } = this.state;

    this.getSearchApi(categoryId, query);
  }

  // REQUISIÇÃO PRA API - LISTA DE CATEGORIAS
  async getCategoriesApi() {
    const categoriesApi = await api.getCategories();

    this.setState({
      categoryState: categoriesApi,
    });
  }

  // ATIVADA NO ENTER DO BOTÃO DE BUSCA.
  handleKeyPress = (event) => {
    if (event.key === 'Enter') this.handleSearch();
  }

  // REQUISIÇÃO PRA API - BUSCA
  async getSearchApi(categoryId, query) {
    const searchResult = await api.getProductsFromCategoryAndQuery(categoryId, query);
    const { results } = searchResult;

    this.setState({
      productResults: results,
    });
  }

  render() {
    const { categoryState, productResults, productQuantity } = this.state;

    return (
      <div className="product-list-page">
        <Nav
          needCart
          productQuantity={ productQuantity }
        />

        <div
          className="product-list-page-1 main"
        >
          <aside className="category-list">
            <h3>CATEGORIAS</h3>
            <CategoryList list={ categoryState } onChange={ this.handleChange } />
          </aside>

          <main className="main-product-list">
            <Search
              onChange={ this.handleChange }
              onKeyPress={ this.handleKeyPress }
              onClick={ this.handleSearch }
            />

            <Products onClick={ this.handleClick } list={ productResults } />
          </main>
        </div>

      </div>

    );
  }
}

export default HomePage;
