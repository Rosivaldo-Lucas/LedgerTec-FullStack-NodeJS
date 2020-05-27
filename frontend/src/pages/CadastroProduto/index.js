import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import api from '../../service/api';

import { Container, Form } from './styles';

class CadastroProduto extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    categorias: [],
    produto: {},
    inputDescricao: '',
    selectItemCategoria: 0,
  };

  async componentDidMount() {
    const { match } = this.props;
    const idProduto = decodeURIComponent(match.params.produto);

    if (parseInt(idProduto, 10)) {
      const response = await api.get(`/api/produtos/${idProduto}`);

      this.setState({
        produto: response.data,
        selectItemCategoria: response.data.Categorium.id,
        inputDescricao: response.data.descricao,
      });
    }

    const response = await api.get('/api/categorias');

    this.setState({ categorias: response.data });
  }

  handleInputDescricao = (e) => {
    this.setState({ inputDescricao: e.target.value });
  };

  handleSelectCategoria = (e) => {
    this.setState({ selectItemCategoria: e.target.value });
  };

  handleSubmitProduto = async (e) => {
    e.preventDefault();

    const { inputDescricao, selectItemCategoria, produto } = this.state;

    if (!inputDescricao) {
      Swal.fire({
        title: '',
        text: 'Campo de descrição é obrigatório!',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (!parseInt(selectItemCategoria, 10)) {
      Swal.fire({
        title: '',
        text: 'Campo de categoria é obrigatório!',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return;
    }

    try {
      const baseURL = `http://localhost:3333/api/produtos/`;
      const method = produto.id ? 'put' : 'post';
      const url = produto.id
        ? `${baseURL}${parseInt(produto.id, 10)}`
        : `${baseURL}`;

      await api[method](url, {
        descricao: inputDescricao,
        id_categoria: selectItemCategoria,
      });

      Swal.fire({
        title: 'Sucesso',
        text: 'Produto cadastrado com sucesso!',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      this.setState({
        inputDescricao: '',
        selectItemCategoria: 0,
      });
    } catch (err) {
      Swal.fire({
        title: 'Erro',
        text: `Erro ao cadastrar o produto!`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  handleUpdateProduto = async (e) => {
    e.preventDefault();
  };

  render() {
    const { categorias, inputDescricao, selectItemCategoria } = this.state;

    return (
      <Container>
        <h1>Cadastrar Produto</h1>

        <Form onSubmit={this.handleSubmitProduto}>
          <label htmlFor="descricao">
            <span>Descrição</span>
            <input
              id="descricao"
              value={inputDescricao}
              type="text"
              placeholder="Informe uma descrição para o produto"
              onChange={this.handleInputDescricao}
            />
          </label>
          <label htmlFor="categoria">
            <span>Categoria</span>
            <select
              id="categoria"
              onChange={this.handleSelectCategoria}
              value={selectItemCategoria}
            >
              <option value={0}>Selecione uma categoria</option>

              {categorias.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.categoria}
                </option>
              ))}
            </select>
          </label>
          <div>
            <button type="submit">Cadastrar</button>
            <Link to="/">
              <button type="button">Voltar</button>
            </Link>
          </div>
        </Form>
      </Container>
    );
  }
}

CadastroProduto.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      produto: PropTypes.number,
    }),
  }).isRequired,
};

export default CadastroProduto;
