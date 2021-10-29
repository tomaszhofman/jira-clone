import { rest } from 'msw';
import { db } from '../db';

const issues = [
  rest.get('/issues', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.issue.getAll()));
  }),
];

export { issues };
