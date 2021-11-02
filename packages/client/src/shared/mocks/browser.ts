/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import { setupWorker } from 'msw';
import { db } from './db';
import { handlers } from './handlers';

declare global {
  interface Window {
    mock: any;
  }
}

export const worker = setupWorker(...handlers);

const createDataBase = () => {
  const users = [db.user.create(), db.user.create()];

  let issues: any = [];
  let project;
  let status: any = [];

  for (let i = 0; i < 3; i++) {
    db.comments.create({
      userId: users[0].id,
      // issueId: issues[0].id,
    });
    issues.push(
      db.issue.create({
        users,
        project,
        reporterId: users[1].id,
      })
    );

    status.push(
      db.status.create({
        issuesIds: issues,
      })
    );
  }

  project = db.project.create({
    users,
    status,
  });
};
createDataBase();

window.mock = {
  createDataBase,
  getDb: () => db.project.getAll(),
  getUser: () => db.user.getAll(),
  getComments: () => db.comments.getAll(),
  getIssues: () => db.issue.getAll(),
  getStatus: () => db.status.getAll(),
};
