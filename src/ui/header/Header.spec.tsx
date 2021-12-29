import React from 'react';
import { Header } from './Header';
import { render } from '@testing-library/react';

describe('Test React Multi Component Header', () => {
  it('should have a logo component', () => {
    const { getByRole, getAllByRole } = render(<Header />);
    const logoDiv = getByRole('logo');
    const img = getByRole('img');
    const h1 = getAllByRole('heading');

    const imgName = img.getAttribute('alt');

    expect(logoDiv).toBeTruthy();
    expect(imgName).toBe('Jump Logo');
    expect(h1[0]).toHaveTextContent('Jump App v2.');
  });
});
