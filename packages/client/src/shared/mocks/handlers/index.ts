import { rest } from 'msw';
import { Issues } from '../data/Issues';

export const handlers = [
  rest.get('/issues', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Issues));
  }),
];
