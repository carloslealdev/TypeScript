(() => {
  interface AddTwoNumbers {
    (a: number, b: number): number;
  }

  let addTwoNumbersFuncion: AddTwoNumbers;

  addTwoNumbersFuncion = (a: number, b: number) => {
    return 10;
  };
})();
