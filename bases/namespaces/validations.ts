namespace Validation {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

console.log(Validation.validateText('Car'));

//Los namespaces funcionan como agrupadores para organizar el código
//Revisar la documentación de Modules vs Namespaces
