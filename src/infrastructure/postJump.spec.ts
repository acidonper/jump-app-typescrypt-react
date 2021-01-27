import axios from 'axios';
import { Jump } from '../domain/Jump';
import { sentJump } from './postJump';

jest.mock('axios');

describe('Infrastructure -> Test Sent Jump to Back', () => {
  it('should send a jump object to the backend', async () => {
    const url: string = 'https://acidonpe.com/jump';
    const data: Jump = {
      message: 'message',
      jump_path: '/jump_path',
      last_path: '/last_path',
      jumps: ['jump1']
    };

    const response: any = {
      data: {
        message: 'messages',
        code: 1234
      }
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    const jumpResponse = await sentJump(url, data);

    expect(jumpResponse).toBe(response.data);
  });
});
