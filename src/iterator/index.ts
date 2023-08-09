interface Props {
	props: object;
	callback: (current: string) => string;
}
const iterateOverDeepKeys = ({ props, callback }: Props) =>
	Array.isArray(props)
		? props.map((arrayValue) =>
				iterateOverDeepKeys({ props: arrayValue, callback }),
		  )
		: typeof props === 'object'
		? Object.keys(props).reduce((accumulator, current) => {
				const key = callback(current);
				const value = props[current];
				accumulator[key] =
					value !== null && typeof value === 'object'
						? iterateOverDeepKeys({ props: value, callback })
						: value;
				return accumulator;
		  }, {})
		: props;
export default iterateOverDeepKeys;
