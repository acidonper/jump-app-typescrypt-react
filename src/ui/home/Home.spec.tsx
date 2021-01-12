import React from 'react';
import { Home } from './Home';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';

describe('Test React Multi Component Home', () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should have a Home component', async () => {
    const { getByRole } = render(<Home />);

    const titles = screen.getAllByRole('heading');
    const images = screen.getAllByRole('img');
    const roleJump = getByRole('jump');
    const roleJumpSel = getByRole('jumpselections');
    const roleJumpBox = getByRole('jumpbox');
    const roleJumpActs = getByRole('jumpaction');
    const roleJumpLogs = getByRole('jumplog');
    const buttons = screen.getAllByRole('button');

    const imgNameSp = images[0].getAttribute('alt');
    const imgNameGo = images[1].getAttribute('alt');
    const imgNamePy = images[2].getAttribute('alt');
    const imgNameJump = images[images.length - 1].getAttribute('alt');

    expect(titles[0]).toHaveTextContent('Add Jump:');
    expect(titles[1]).toHaveTextContent('Calls Retries:');
    expect(titles[2]).toHaveTextContent('Calls Interval:');
    expect(titles[3]).toHaveTextContent('Jumps');
    expect(imgNameSp).toBe('Springboot');
    expect(imgNameGo).toBe('Golang');
    expect(imgNamePy).toBe('Python');
    expect(imgNameJump).toBe('Jump!');
    expect(roleJump).toBeTruthy();
    expect(roleJumpSel).toBeTruthy();
    expect(roleJumpBox).toBeTruthy();
    expect(roleJumpActs).toBeTruthy();
    expect(roleJumpLogs).toBeTruthy();
    expect(buttons.length).toBe(4);
  });
});
