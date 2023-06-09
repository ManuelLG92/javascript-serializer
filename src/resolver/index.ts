import { snakeCase } from "snake-case";
import { camelCase } from "camel-case";
import { paramCase } from "param-case";
import { dotCase } from "dot-case";
import { pascalCase } from "pascal-case";
import { CasesEnum, matchConverterInterface, Options } from "./constants";

const toLowerCase = (value: string) => trim(value) && value.toLowerCase();
const toUpperCase = (value: string) => trim(value) && value.toUpperCase();
const trim = (value: string) => value.trim();

const matchConverter = {
  [CasesEnum.camelCase]: camelCase,
  [CasesEnum.snakeCase]: snakeCase,
  [CasesEnum.kebabCase]: paramCase,
  [CasesEnum.lowerCase]: toLowerCase,
  [CasesEnum.upperCase]: toUpperCase,
  [CasesEnum.dotCase]: dotCase,
  [CasesEnum.pascalCase]: pascalCase,
};

const getCaseConverter = <T extends keyof Options>(
  type: T
): matchConverterInterface[T] => {
  const matched = matchConverter[type];
  if (!matched) {
    throw Error(
      `Case type: ${type} not found. Available types are: ${Object.keys(
        CasesEnum
      ).join(", ")}`
    );
  }
  return matched;
};

export default getCaseConverter;
