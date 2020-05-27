import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';

import api from '../../service/api';

import { Container, ProdutoTable } from './styled';

class DetalheProduto extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    produto: {},
    categoria: '',
    idProduto: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const idProduto = decodeURIComponent(match.params.idProduto);

    const response = await api.get(`/api/produtos/${idProduto}`);

    this.setState({
      produto: response.data,
      categoria: response.data.Categorium.categoria,
    });
  }

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

        this.setState({ idProduto: false });

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
    const { produto, categoria, idProduto } = this.state;

    return (
      <Container>
        {idProduto ? (
          <ProdutoTable>
            <thead>
              <tr>
                <th />
                <th>Descrição</th>
                <th>Categoria</th>
              </tr>
            </thead>
            <tbody>
              <tr key={produto.id}>
                <td />
                <td>
                  <span>{produto.descricao}</span>
                </td>
                <td>
                  <span>{categoria}</span>
                </td>
                <td>
                  <button type="button">
                    <Link to={`/cadastros/${encodeURIComponent(produto.id)}`}>
                      <MdEdit size={22} color="#fff" />
                    </Link>
                  </button>
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
            </tbody>
          </ProdutoTable>
        ) : (
          <div>
            <h1>Produto deletado com sucesso!</h1>
            <Link to="/">
              <button type="button">Voltar</button>
            </Link>
          </div>
        )}
      </Container>
    );
  }
}

DetalheProduto.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      idProduto: PropTypes.number,
    }),
  }).isRequired,
};

export default DetalheProduto;
