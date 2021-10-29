import { rest } from 'msw';
import { Issues } from '../data/Issues';
import { db } from '../db';
import { issues } from './issues';
import { projects } from './project';
import { status } from './status';

export const handlers = [...status, ...projects, ...issues];
