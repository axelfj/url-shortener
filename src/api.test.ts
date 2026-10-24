// @vitest-environment node
import { expect, test } from 'vitest';
import request from 'supertest';
import { app } from './api';
test('creates a normalized slug and rejects an invalid destination', async () => {
  const valid = await request(app).post('/create').send({ slug: 'Example', dest: 'https://example.com/' });
  expect(valid.status).toBe(200);
  expect(valid.body).toEqual({ slug: 'example', dest: 'https://example.com/' });
  const invalid = await request(app).post('/create').send({ dest: 'invalid' });
  expect(invalid.status).toBe(400);
});
