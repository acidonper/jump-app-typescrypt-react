import { Task } from './Task';

describe('Task Interface', () => {
  it('should instantiate a Task Object', () => {
    const task: Task = {
      message: 'message',
      code: 1234
    };

    expect(task).toBeTruthy();
  });
});
