import request from 'supertest';

import app from '../../src/app';
import truncate from '../util/truncate';
import factory from '../factories';

describe('Produto', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('deve ser possível listar produtos cadastrados', async () => {
    const response = await request(app).get(`/api/produtos?page=${1}`);

    expect(response.status).toBe(200);
  });

  it('deve ser possível listar produtos pelo seu id', async () => {
    const response = await request(app).get(`/api/produtos/${1}`);

    expect(response.status).toBe(200);
  });

  it('deve ser possível cadastrar um produto', async () => {
    const produto = await factory.attrs('Produto');

    const response = await request(app).post('/api/produtos').send(produto);

    expect(response.body).toHaveProperty('id');
  });

  it('não deve ser possível cadastrar produtos duplicados', async () => {
    const produto = await factory.attrs('Produto');

    await request(app).post('/api/produtos').send(produto);

    const response = await request(app).post('/api/produtos').send(produto);

    expect(response.status).toBe(400);
  });

  it('verifica se a categoria está sendo criado e se o produto está sendo salvo', async () => {
    const produto = await factory.attrs('Produto');

    const response = await request(app).post('/api/produtos').send(produto);

    expect(response.body).toHaveProperty('id');
  });

  it('verifica se a categoria já existe no banco e depois salva o produto', async () => {
    const produto = await factory.attrs('Produto');

    await request(app).post('/api/produtos').send(produto);

    const response = await request(app).post('/api/produtos').send({
      descricao: 'Microondas',
      categoria: produto.categoria,
    });

    expect(response.body).toHaveProperty('id');
  });

  it('deve listar todos os produtos cadastrados', async () => {
    const response = await request(app).get('/api/produtos');

    expect(response.status).toBe(200);
  });

  it('deve listar um produto pelo seu id', async () => {
    const produto = await factory.attrs('Produto');

    const produtoSalvo = await request(app)
      .post('/api/produtos/')
      .send(produto);

    const { id } = produtoSalvo.body;

    const response = await request(app).get(`/api/produtos/${id}`);

    expect(response.body).toHaveProperty('id');
  });

  it('não deve encontrar um produto no banco de dados', async () => {
    const response = await request(app).get(`/api/produtos/${1}`);

    expect(response.status).toBe(404);
  });

  it('deve ser possível deletar um produto', async () => {
    const produto = await request(app).post('/api/produtos').send({
      descricao: 'Ventilador',
      id_categoria: 10,
    });

    const response = await request(app).delete(`/api/produtos/${produto.id}`);

    expect(response.status).toBe(200);
  });
});
