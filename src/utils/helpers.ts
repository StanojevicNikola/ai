export const removeFromStringArray = (array: string[], value: string) => {
  const index = array!.indexOf(value);
  if (index > -1) {
    array!.splice(index, 1);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkIfObjectNotEmpty = (obj: any) => {
  if (obj.constructor === Object && Object.keys(obj).length > 0) {
    return true;
  }
  return false;
};

export const setFilter = (
  filter: { limit?: number; offset?: number },
  limit = 100,
) => {
  if (!filter.limit || filter.limit > limit) {
    Object.assign(filter, { limit });
  }
  if (!filter.offset || filter.offset < 0) {
    Object.assign(filter, { offset: 0 });
  }
  return filter;
};

export const escapeUnderscore = (string: string) => {
  return string.replace(/_/g, `\\_`);
};

export const escapePercentage = (string: string) => {
  return string.replace(/%/g, `\\%`);
};

export const escapeString = (string: string) => {
  return escapeUnderscore(escapePercentage(string));
};
