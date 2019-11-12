import { TestBed, async } from '@angular/core/testing';
import { AudioComponentsModule } from '../audio-components/audio-components.module';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { ModuleModule } from '../module/module.module';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';
import * as Tone from 'tone';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        SharedModule,
        AudioComponentsModule,
        AudioControlsModule,
        ModuleModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
