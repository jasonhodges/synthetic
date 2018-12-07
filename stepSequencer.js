var sequencer, piano, pianoSequencer;
var keys, loop;
var btnStart, btnStop;

function initNexus() {
  Nexus.context = Tone.context;

  sequencer = new Nexus.Sequencer('#sequencer', {
    'size': [600, 400],
    'mode': 'aftertouch',
    'rows': 6,
    'columns': 16
  });

  sequencer.matrix.ui.cells.forEach((c) => {
    var slider = new Nexus.Multislider(c.element, {
      'size': [c.element.scrollWidth, c.element.scrollHeight],
      'numberOfSliders': 1,
      'min': 0,
      'max': 4,
      'steps': 4
    });
  });

  var testMatrix = new Nexus.Matrix(5,16);

  testMatrix;

  var lowNote = 24;
  var highNote = 60;
  var notesDiff = highNote - lowNote;

  var synthOne_volume_dial;
  var synthOne_dialSize = [60,60];
  piano = new Nexus.Piano('#synthOne-piano', {
    'size': [400,80],
    'mode': 'button',
    'lowNote': lowNote,
    'highNote': highNote
  });

  synthOne_volume_dial = new Nexus.Dial('#synthOne-dial_volume', {
    'size': synthOne_dialSize,
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0,
    'max': 1
  });

  var noteNames = ["C1", "D1", "E1", "F1", "G1", "A2"];

  keys = new Tone.MonoSynth({
    'oscillator': {
      'type': 'square'
    },
    "envelope": {
      "attack": 0.4,
      "release": 1
    }
  }).toMaster();
  keys.volume.value = -25;
  loop = new Tone.Sequence(function (time, col) {
    for (let i = 0; i < 6; i++) {
      if (sequencer.matrix.pattern[i][col] === true) {
        console.log(noteNames[i]);
        keys.triggerAttackRelease(noteNames[i], "16n")
      }
    }
  }, [0, 1, 2, 3, 4, 5, 6, 7], '16n');

  Tone.Transport.bpm.value = 95;
  Tone.Transport.start();
  Tone.context.latencyHint = "fastest";
  Tone.context.lookAhead = 0.01;

  btnStart = new Nexus.Button('#btn-start', {
    'size': [80, 80],
    'mode': 'toggle',
    'state': false
  });
  btnStop = new Nexus.Button('#btn-stop', {
    'size': [80, 80],
    'mode': 'toggle',
    'state': false
  });

  btnStart.on('change', function () {
    loop.start();
    // sequencer.start(0);

  })

  btnStop.on('change', function () {
    loop.stop();
    // sequencer.stop();
  })

}

// nx.onload = function() {
//   console.log('nx.onload');
// };

window.onload = function () {
  initNexus();
};
