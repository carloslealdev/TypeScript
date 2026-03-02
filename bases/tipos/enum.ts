(() => {
  //DEFINICION DE ENUMS
  //Palabra reservada enum y UpperCammelCase
  enum AudioLevel {
    min,
    medium,
    max = 10,
  }

  let currentAudio = AudioLevel.max;
  console.log(currentAudio);
  console.log(AudioLevel);

  enum Roles {
    admin = 'Administrador',
    worker = 'Trabajador',
  }

  const myRole = Roles.admin;
  console.log(myRole);
})();
