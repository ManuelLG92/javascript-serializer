import { matchConverterInterface, Options } from "./resolver/constants";
import getCaseConverter from "./resolver";
import iterateOverDeepKeys from "./iterator";

interface Props<T extends keyof matchConverterInterface> {
  type: keyof Options;
  options?: Options[T];
  value: Record<string, unknown>;
  skip?: string[];
}

export const serialize = <T extends keyof matchConverterInterface>(
  props: Props<T>
): Record<string, unknown> => {
  const caseConverter = getCaseConverter(props.type);
  const keysToSkip = props.skip ?? [];
  const keysToSkipLength = keysToSkip.length;

  return iterateOverDeepKeys(props.value, (key) => {
    if (keysToSkipLength > 0 && keysToSkip.includes(key)) {
      return key;
    }
    return caseConverter(key, props.options);
  });
};
