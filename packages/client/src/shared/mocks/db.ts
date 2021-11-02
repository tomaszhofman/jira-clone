import { factory, manyOf, oneOf, primaryKey } from '@mswjs/data';
import faker from 'faker';
import { Issues } from './data/Issues';
import { Users } from './data/Users';

const users = ['John', 'Peter', 'Bernadette'];

enum ProjectCategory {
  SOFTWARE = 'software',
  MARKETING = 'marketing',
  BUSINESS = 'business',
}

export enum IssueType {
  TASK = 'task',
  BUG = 'bug',
  STORY = 'story',
}

export enum IssueStatus {
  BACKLOG = 'backlog',
  SELECTED = 'selected',
  INPROGRESS = 'inprogress',
  DONE = 'done',
}

export enum IssuePriority {
  HIGHEST = '5',
  HIGH = '4',
  MEDIUM = '3',
  LOW = '2',
  LOWEST = '1',
}

export const db = factory({
  project: {
    id: primaryKey(() => faker.datatype.uuid()),
    name: () => 'Jira clone MVP',
    url: () => faker.internet.url(),
    projectAvatarURL: () =>
      'https://tomaszhofman.atlassian.net/secure/projectavatar?pid=10000&avatarId=10408&size=xxlarge',
    description: () => faker.finance.transactionDescription(),
    category: () => ProjectCategory.SOFTWARE,
    users: manyOf('user'),
    status: manyOf('status'),
  },

  user: {
    id: primaryKey(faker.datatype.uuid),
    email: () => faker.internet.email(),
    name: () => faker.name.firstName(),
    avatarUrl: () => faker.internet.avatar(),
  },
  comments: {
    id: primaryKey(faker.datatype.uuid),
    body: () => faker.commerce.productDescription(),
    issueId: String,
    userId: String,
  },
  status: {
    id: primaryKey(faker.datatype.uuid),
    title: () => 'Done',
    issuesIds: manyOf('issue'),
  },
  issue: {
    id: primaryKey(faker.datatype.uuid),
    title: () => 'Issue title 2',
    type: () => IssueType.TASK,
    status: oneOf('status'),
    priority: () => IssuePriority.MEDIUM,
    listPosition: () => 2,
    estimate: () => 5,
    description: () => 'Issue description 2',
    reporterId: String,
    users: manyOf('user'),
    project: oneOf('project'),
    comments: manyOf('comments'),
  },
});
