import { BrowserRouter as Router } from 'react-router-dom';
import { BaseStyle } from '../src/App/BaseStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Router>
      <BaseStyle />
      <Story />
    </Router>
  ),
];
