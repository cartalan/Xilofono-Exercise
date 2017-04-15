var notes = $('.sound');
var note = [0,0,0,3,5,0,0,0,3,5,3,3,2,2,1,1,0,0,0,0,2,4,0,0,0,2,4,7,2,7,6,5,3];
var tempo = [1,1,1,2,2,1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1];

$('.note').click(function() {
  var num = parseInt(this.id);
  play(num);
});

$('.btn').click(function() {
  var count = 0;
  for(var i= 0; i < note.length; i++) {
    setTimeout(function(sound) {
      play(note[sound]);
    }, rhythm(i) * 350, i);
  }
});

function play(num) {
  notes[num].pause();
  notes[num].currentTime = 0;
  notes[num].play();  
}

function rhythm(num) {
  var count = 0;
  for (var i = 0; i < num ; i++) {
    count = count + tempo[i];
  }
  return count;
}