import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroProduto from './pages/CadastroProduto';
import DetalheProduto from './pages/DetalheProduto';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastros/:produto" component={CadastroProduto} />
      <Route path="/cadastros" component={CadastroProduto} />
      <Route path="/detalhes/:idProduto" component={DetalheProduto} />
    </Switch>
  );
}

export default Routes;
