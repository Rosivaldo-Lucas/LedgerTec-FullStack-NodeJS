import { Router } from 'express';

import ProdutoController from './app/controllers/ProdutoController';
import CategoriaController from './app/controllers/CategoriaController';

const routes = new Router();

routes.get('/api/categorias', CategoriaController.index);

routes.get('/api/produtos', ProdutoController.index);
routes.get('/api/produtos/:id', ProdutoController.getProduto);
routes.post('/api/produtos', ProdutoController.store);
routes.put('/api/produtos/:id', ProdutoController.update);
routes.delete('/api/produtos/:id', ProdutoController.delete);

export default routes;
