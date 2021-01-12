import { ResponseBack } from './ResponseBack';

describe('Response Back Interface', () => {
  it('should instantiate a Response Back Object', () => {
    const responseBack: ResponseBack = {
      message: 'message',
      code: 1234
    };

    expect(responseBack).toBeTruthy();
  });
});
