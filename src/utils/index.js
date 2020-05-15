export function getUrlParams(search) {
  return search
    .replace(/\?/g, '')
    .split(/&/g)
    .reduce((obj, param) => {
      const [key, ...values] = param.split(/=/g);

      return Object.assign(obj, { [key]: decodeURI(values.join('=')) });
    }, {});
}
