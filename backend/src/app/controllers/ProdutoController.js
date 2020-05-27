import * as Yup from 'yup';

import Categoria from '../models/Categoria';
import Produto from '../models/Produto';

class ProdutoController {
  async index(request, response) {
    const { page = 1 } = request.query;

    const produtos = await Produto.paginate({
      page,
      paginate: 10,
      include: [
        {
          model: Categoria,
          attributes: ['id', 'categoria'],
        },
      ],
    });

    return response.status(200).json(produtos);
  }

  async getProduto(request, response) {
    const { id } = request.params;

    const produtoExiste = await Produto.findOne({
      where: { id },
      include: [
        {
          model: Categoria,
          attributes: ['id', 'categoria'],
        },
      ],
    });

    if (!produtoExiste) {
      return response.status(404).json({ erro: 'Produto não encontrado.' });
    }

    return response.status(200).json(produtoExiste);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      descricao: Yup.string().required(),
      id_categoria: Yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ erro: 'Validaçao dos campos falhou.' });
    }

    const { descricao, id_categoria } = request.body;

    const produtoExiste = await Produto.findOne({ where: { descricao } });

    if (produtoExiste) {
      return response.status(400).json({ erro: 'Produto já foi cadastrado.' });
    }

    const categoriaExiste = await Categoria.findByPk(id_categoria);

    if (!categoriaExiste) {
      return response.status(400).json({ erro: 'Categoria não existe.' });
    }

    const produtoSalvo = await Produto.create({ descricao, id_categoria });

    return response.status(201).json(produtoSalvo);
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      descricao: Yup.string(),
      id_categoria: Yup.number(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ erro: 'Validação dos campos falhou.' });
    }

    const { descricao, id_categoria } = request.body;
    const { id } = request.params;

    console.log(id);

    const produto = await Produto.findByPk(id);

    if (!produto) {
      return response.status(404).json({ erro: 'Produto não encontrado.' });
    }

    if (descricao !== produto.descricao) {
      const produtoExiste = await Produto.findOne({ where: { descricao } });

      if (produtoExiste) {
        return response.status(400).json({ erro: 'Produto já existe.' });
      }
    }

    const categoriaExiste = await Categoria.findByPk(id_categoria);

    if (!categoriaExiste) {
      return response.status(404).json({ erro: 'Categoria não encontrada.' });
    }

    const produtoAtualizado = await produto.update({ descricao, id_categoria });

    return response.status(200).json(produtoAtualizado);
  }

  async delete(request, response) {
    const { id } = request.params;

    const produto = await Produto.findByPk(id);

    if (!produto) {
      return response.status(404).json({ erro: 'Produto não encontrado.' });
    }

    await Produto.destroy({ where: { id } });

    return response.status(200).json();
  }
}

export default new ProdutoController();
