import { AudioComponentsModule } from './audio-components.module';

describe('AudioComponentsModule', () => {
  let audioComponentsModule: AudioComponentsModule;

  beforeEach(() => {
    audioComponentsModule = new AudioComponentsModule();
  });

  it('should create an instance', () => {
    expect(audioComponentsModule).toBeTruthy();
  });
});
