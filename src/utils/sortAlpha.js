/**
 * Alphabetical sort
 * @param {Array} array to be sorted
 * @param {string} property property of each item to use for alphabetic sorting
 * @returns sorted array
 */
export const sortAlpha = (array, property) => {
  return array.sort((a, b) => {
    if (a[property].toLowerCase() < b[property].toLowerCase()) return -1;
    if (a[property].toLowerCase() > b[property].toLowerCase()) return 1;
    return 0;
  });
};
