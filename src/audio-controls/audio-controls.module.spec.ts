import { AudioControlsModule } from './audio-controls.module';

describe('AudioControlsModule', () => {
  let audioControlsModule: AudioControlsModule;

  beforeEach(() => {
    audioControlsModule = new AudioControlsModule();
  });

  it('should create an instance', () => {
    expect(audioControlsModule).toBeTruthy();
  });
});
