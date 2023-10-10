import { matchConverterInterface, Options } from 'src/resolver/constants';
import getCaseConverter from 'src/resolver';
import iterateOverDeepKeys from 'src/iterator';

interface Props<T extends keyof matchConverterInterface> {
	type: keyof Options;
	options?: Options[T];
	value: Record<string, unknown>;
	skip?: string[];
}

const serializer = <T extends keyof matchConverterInterface>(
	props: Props<T>,
): Record<string, unknown> => {
	const caseConverter = getCaseConverter(props.type);
	const keysToSkip = props.skip ?? [];
	const keysToSkipLength = keysToSkip.length;

	const callback = (key: string) => {
		if (keysToSkipLength > 0 && keysToSkip.includes(key)) {
			return key;
		}
		return caseConverter(key, props.options ?? {});
	};

	return iterateOverDeepKeys({
		props: props.value,
		callback: (key) => callback(key),
	});
};

export default serializer;
