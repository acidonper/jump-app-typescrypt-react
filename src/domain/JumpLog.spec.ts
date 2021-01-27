import { JumpLog } from './JumpLog';

describe('Jump Log Interface', () => {
  it('should instantiate a Jump Log Object', () => {
    const jumpLog: JumpLog = {
      message: 'message',
      dateLog: '01/01/2021'
    };

    expect(jumpLog).toBeTruthy();
  });
});
