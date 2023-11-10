let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,

});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudio Ingeniería Ambiental en la Facultad de Ingeniería y programo a veces')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  
