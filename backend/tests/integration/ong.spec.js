const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });
  
  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });
  it('should be able to create a new ONG', async () => {
    const respose = await request(app)
      .post('/ongs')
      .send({
          name:"APAD2",
          email:"contato@teste.com",
          whatsapp:"47000000000",
          city:"Rio do Sul",
          uf:"SC"
      });
      expect(respose.body).toHaveProperty('id');
      expect(respose.body.id).toHaveLength(8);
  });
})