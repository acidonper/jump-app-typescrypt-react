import { Jump } from './Jump';

describe('Jump Interface', () => {
  it('should instantiate a Jump Object', () => {
    const jump: Jump = {
      message: 'message',
      jump_path: '/jump_path',
      last_path: '/last_path',
      jumps: ['jump1']
    };

    expect(jump).toBeTruthy();
  });
});
