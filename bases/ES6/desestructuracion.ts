(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activos: true,
    poder: 1500.1234234,
  };

  const { ironman, poder } = avengers;
  console.log({ ironman });

  const printAvenger = ({ vision }: Avengers) => {
    console.log(vision);
  };

  printAvenger(avengers);

  const avengersArr: string[] = ['Hulk', 'Thor', 'Spiderman'];

  const [, thor] = avengersArr;
  console.log(thor?.toUpperCase());
})();
