import { rest } from 'msw';
import { db } from '../db';

const projects = [
  rest.get('/project', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.project.getAll()));
  }),
];

export { projects };
