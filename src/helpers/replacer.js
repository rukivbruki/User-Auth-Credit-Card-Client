export const replacer = (key, val) => (key === 'cardData' ? (val = '') : val);
