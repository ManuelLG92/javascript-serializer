const iterateOverDeepKeys = (props, callback) =>
  Array.isArray(props)
    ? props.map((arrayValue) => iterateOverDeepKeys(arrayValue, callback))
    : typeof props === "object"
    ? Object.keys(props).reduce((accumulator, current) => {
        const key = callback(current);
        const value = props[current];
        accumulator[key] =
          value !== null && typeof value === "object"
            ? iterateOverDeepKeys(value, callback)
            : value;
        return accumulator;
      }, {})
    : props;

export default iterateOverDeepKeys;
