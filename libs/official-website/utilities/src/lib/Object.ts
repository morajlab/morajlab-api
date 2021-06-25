export const extendProperty = (object: Object, key: string, value: string) =>
  `${object[key] ?? ''} ${value}`.trim();

export const extendProperties = <T>(object: T, values: Object): T => {
  const result = Object.assign({}, object);

  Object.keys(values).forEach((key) => {
    Object.assign(result, {
      [key]: extendProperty(object, key, values[key]),
    });
  });

  return result;
};
