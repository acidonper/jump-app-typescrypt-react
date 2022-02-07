import { AppService } from './AppService';

describe('AppService Interface', () => {
  it('should instantiate a AppService Object', () => {
    const appService: AppService = {
      id: '1',
      jump: '/jump_path',
      name: '/last_path',
      img: 'jump1'
    };

    expect(appService).toBeTruthy();
  });
});
