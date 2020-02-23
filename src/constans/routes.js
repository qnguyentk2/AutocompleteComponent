export default {
  becomeAHost: {
    path: '/become-a-host',
    slug: 'become-a-host'
  },
  landingPage: {
    path: '/',
    slug: 'home'
  }
}

const preserveEndingSlash = (pattern, reversed) => {
  const endingSlashRe = /\/$/;

  const shouldHave = endingSlashRe.test(pattern);
  const has = endingSlashRe.test(reversed);

  if (shouldHave && !has) {
    return `${reversed}/`;
  } if (!shouldHave && has) {
    return reversed.slice(0, reversed.length - 1);
  }

  return reversed;
};


export const reverse = (pattern, params = {}) => {
  const reversed = pattern
    .replace(/\w*(:[\w|]+\??)/g, (path, param) => {
      let url = '';
      const [key, defaultValue] = param.replace(/[:?]/g, '').split('|');
      if (params[key] === undefined) {
        if (defaultValue) {
          url = defaultValue;
        } else if (param.indexOf('?') < 0) {
          return path;
        } else {
          return '';
        }
      } else {
        url = params[key];
      }
      const pathComponent = encodeURIComponent(encodeURIComponent(url));
      return path.replace(param, pathComponent);
    })
    .replace(/\/\//, '/');
  return preserveEndingSlash(pattern, reversed);
};