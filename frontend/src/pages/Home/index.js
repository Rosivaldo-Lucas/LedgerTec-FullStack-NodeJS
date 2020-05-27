import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MdDeleteForever,
  MdEdit,
  MdSearch,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';
import Swal from 'sweetalert2';

import api from '../../service/api';

import { Container, ProdutoTable, Pesquisa, ButtonProxAnt } from './styles';

class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    produtos: [],
    produtoInput: '',
    page: 1,
    totalPage: 0,
  };

  async componentDidMount() {
    this.loadProdutos();
  }

  loadProdutos = async (page = 1) => {
    try {
      const response = await api.get(`/api/produtos?page=${page}`);

      this.setState({
        produtos: response.data.docs,
        page,
        totalPage: response.data.pages,
      });
    } catch (err) {
      Swal.fire({
        title: 'Erro!',
        text: err,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  paginaAnterior = () => {
    const { page } = this.state;

    if (page === 1) {
      return;
    }

    const numPagina = page - 1;

    this.loadProdutos(numPagina);
  };

  proximaPagina = () => {
    const { page, totalPage } = this.state;

    if (page === totalPage) {
      return;
    }

    const numPagina = page + 1;

    this.loadProdutos(numPagina);
  };

  handleInputChange = (e) => {
    this.setState({ produtoInput: e.target.value });
  };

  handleButtonClick = async () => {
    const { produtoInput, totalPage } = this.state;

    const produtoList = [];

    for (let i = 0; i < totalPage; i += 1) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const p = await api.get(`/api/produtos?page=${i + 1}`);

        produtoList.push(...p.data.docs);
      } catch (err) {
        Swal.fire({
          title: 'Descrição ou Categoria não existem!',
          text: 'Preencha o campo com produtos ou categorias válidas',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }

    const produtoExiste = produtoList.filter(
      (produto) =>
        produto.descricao === produtoInput ||
        produto.Categorium.categoria === produtoInput
    );

    try {
      if (!produtoExiste.length) {
        throw Error();
      }

      this.setState({
        produtoInput: '',
        produtos: produtoExiste,
      });
    } catch (err) {
      Swal.fire({
        title: 'Descrição ou Categoria não existem!',
        text: 'Preencha o campo com produtos ou categorias válidas',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  handleDeleteProduto = async (produto) => {
    Swal.fire({
      title: 'Você está certo disso?',
      text: `Tem certeza de que deseja excluir: ${produto.descricao}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7159c1',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar',
    }).then(async (resultado) => {
      if (resultado.value) {
        await api.delete(`/api/produtos/${produto.id}`);

        this.loadProdutos();

        Swal.fire({
          title: '',
          text: 'Produto deletado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }
    });
  };

  render() {
    const { produtos, produtoInput, page, totalPage } = this.state;

    return (
      <Container>
        <Pesquisa>
          <input
            type="text"
            placeholder="Informe a descrição do produto ou sua categoria para pesquisar"
            value={produtoInput}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={() => this.handleButtonClick()}>
            <span>Pesquisar</span>
            <MdSearch size={25} color="#fff" />
          </button>
        </Pesquisa>

        <ProdutoTable>
          <thead>
            <tr>
              <th />
              <th>Descrição</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td />
                <td>
                  <span>{produto.descricao}</span>
                </td>
                <td>
                  <span>{produto.Categorium.categoria}</span>
                </td>
                <td>
                  <Link to={`/detalhes/${encodeURIComponent(produto.id)}`}>
                    <button type="button">
                      <span>Detalhes</span>
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/cadastros/${encodeURIComponent(produto.id)}`}>
                    <button type="button">
                      <MdEdit size={22} color="#fff" />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => this.handleDeleteProduto(produto)}
                  >
                    <MdDeleteForever size={22} color="#fff" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProdutoTable>

        <ButtonProxAnt>
          <button
            disabled={page === 1}
            type="button"
            onClick={this.paginaAnterior}
          >
            <MdNavigateBefore size={20} color="#fff" />
            <span>Anterior</span>
          </button>
          <button
            disabled={page === totalPage}
            type="button"
            onClick={this.proximaPagina}
          >
            <span>Próximo</span>
            <MdNavigateNext size={20} color="#fff" />
          </button>
        </ButtonProxAnt>
      </Container>
    );
  }
}

export default Home;
