import {
  Options as pascalCaseOptions,
  Options as dotCaseOptions,
  Options as paramCaseOptions,
  Options as snakeCaseOptions,
  Options as camelCaseOptions,
} from "no-case";

export enum CasesEnum {
  camelCase = "camelCase",
  snakeCase = "snake_case",
  kebabCase = "kebab-case",
  lowerCase = "lowercase",
  upperCase = "UPPERCASE",
  dotCase = "dot.case",
  pascalCase = "PascalCase",
}
export interface matchConverterInterface {
  [CasesEnum.camelCase]: (value: string, options: camelCaseOptions) => string;
  [CasesEnum.snakeCase]: (value: string, options: snakeCaseOptions) => string;
  [CasesEnum.kebabCase]: (value: string, options: paramCaseOptions) => string;
  [CasesEnum.lowerCase]: (value: string) => string;
  [CasesEnum.upperCase]: (value: string) => string;
  [CasesEnum.dotCase]: (value: string, options: dotCaseOptions) => string;
  [CasesEnum.pascalCase]: (value: string, options: pascalCaseOptions) => string;
}

export interface Options {
  [CasesEnum.camelCase]: camelCaseOptions;
  [CasesEnum.snakeCase]: snakeCaseOptions;
  [CasesEnum.kebabCase]: paramCaseOptions;
  [CasesEnum.lowerCase]: Partial<{}>;
  [CasesEnum.upperCase]: Partial<{}>;
  [CasesEnum.dotCase]: dotCaseOptions;
  [CasesEnum.pascalCase]: pascalCaseOptions;
}
