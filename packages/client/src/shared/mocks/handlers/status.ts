import { rest } from 'msw';
import { db } from '../db';

const status = [
  rest.get('/status', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ status: db.status.getAll() }));
  }),
];

export { status };
