import { HomeModuloModule } from './home-modulo.module';

describe('HomeModuloModule', () => {
  let homeModuloModule: HomeModuloModule;

  beforeEach(() => {
    homeModuloModule = new HomeModuloModule();
  });

  it('should create an instance', () => {
    expect(homeModuloModule).toBeTruthy();
  });
});
