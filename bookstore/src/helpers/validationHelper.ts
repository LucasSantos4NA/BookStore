export const isValidPrice = (price: number): boolean => {
  return price > 0;
};

export const isValidBookTitle = (title: string): boolean => {
  return title.length >= 3;
};
