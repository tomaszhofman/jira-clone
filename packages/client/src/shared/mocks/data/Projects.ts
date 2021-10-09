import { Users } from './Users';

enum ProjectCategory {
  SOFTWARE = 'software',
  MARKETING = 'marketing',
  BUSINESS = 'business',
}

export const Projects = [
  {
    id: 1,
    name: 'singularity 1.0',
    url: '44444',
    description: 'my new project',
    category: ProjectCategory.SOFTWARE,
    users: Users,
  },
];
