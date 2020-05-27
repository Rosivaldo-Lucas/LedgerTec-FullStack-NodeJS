import Categoria from '../models/Categoria';

class CategoriaController {
  async index(request, response) {
    const categorias = await Categoria.findAll();

    return response.status(200).json(categorias);
  }
}

export default new CategoriaController();
