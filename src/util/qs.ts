// @ts-nocheck

export const qs = {
  stringURL: (url) => {
    if (!url) return "";
    return "?" + qs.convertQueryString(url);
  },

  convertQueryString: (data: any) => {
    if (!Object.keys(data).length) return "";
    const pairs = [];
    for (const prop in data) {
      if (Object.prototype.hasOwnProperty.call(data, prop)) {
        const k = prop;
        const v = data[prop];
        pairs.push(`${k}=${v}`);
      }
    }
    return pairs.join("&");
  },

  convertStringObject: (searchString) => {
    if (!searchString) return false;
    return searchString
      .substring(1)
      .split("&")
      .reduce((result, next) => {
        const pair = next.split("=");
        result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        return result;
      }, {});
  },
};
