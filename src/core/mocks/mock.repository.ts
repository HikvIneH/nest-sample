export class MockRepository<T> {
  public metadata = {
    connection: { options: { type: null } },
    columns: [],
    relations: [],
  };

  public callHandler = {
    handle: jest.fn(),
  };

  public reflector = {
    constructor: jest.fn(),
    get: jest.fn().mockReturnValue('ID'),
  };

  public cache = {
    trackBy: jest.fn().mockReturnThis(),
    exCtx: jest.fn().mockReturnThis(),
    cacheKey: jest.fn(),
  };

  public checkCacheStatus = jest.fn();
  public httpAdapter = jest.fn();

  public context = {
    getHandler: jest.fn().mockReturnThis(),
    switchToHttp: jest.fn().mockReturnThis(),
    getRequest: jest.fn().mockReturnThis(),
    replace: jest.fn().mockReturnThis(),
    getArgs: jest.fn().mockReturnThis(),
    getClass: jest.fn().mockReturnThis(),
    getArgByIndex: jest.fn().mockReturnThis(),
    switchToWs: jest.fn().mockReturnThis(),
    switchToRpc: jest.fn().mockReturnThis(),
    getType: jest.fn().mockReturnThis(),
    httpAdapter: jest.fn().mockReturnThis(),
  };
}
