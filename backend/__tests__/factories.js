import faker from 'faker';
import { factory } from 'factory-girl';

import Produto from '../src/app/models/Produto';

factory.define('Produto', Produto, {
  descricao: faker.commerce.productName(),
  id_categoria: faker.random.number(),
});

export default factory;
