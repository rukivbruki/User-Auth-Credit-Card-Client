export const formValues = (e, numberElements = 3, isCleared = false) => {
  const values = {};

  for (let i = 0; i <= numberElements; i++) {
    const element = e.target.elements[i];

    if (!isCleared) {
      values[element.name] = element.value;
    } else {
      element.value = '';
    }
  }

  return values;
};
