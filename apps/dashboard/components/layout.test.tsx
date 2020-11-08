import React from 'react';
import Layout from './layout';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

test('it should render children', () => {
  const { container, getByText } = render(
    <Layout>
      <div>test</div>
    </Layout>,
  );
  expect(getByText('test')).toBeInTheDocument();
  expect(container.firstChild).toHaveStyle('height: 100vh');
});

test('it should match snapshot', () => {
  const {container} = render(<Layout>test</Layout>);
  expect(container.firstChild).toMatchSnapshot();
});
