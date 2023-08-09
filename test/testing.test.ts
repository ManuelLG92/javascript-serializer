import { test } from 'node:test';
import assert from 'node:assert';
import { serialize } from 'src';
import { CasesEnum } from 'src/resolver/constants';
const stubCamelCase = {
	aBc: 1,
	helloWorld: 'a',
	objOne: {
		objKid: 1,
	},
	nestedArr: [
		{
			nestedObj: 1,
		},
		{
			nestedObj: 2,
		},
	],
};

test('test convert to snake case', () => {
	const expectedSnakeCase = {
		a_bc: 1,
		hello_world: 'a',
		obj_one: {
			obj_kid: 1,
		},
		nested_arr: [
			{
				nested_obj: 1,
			},
			{
				nested_obj: 2,
			},
		],
	};
	const testConv = serialize({
		type: CasesEnum.snakeCase,
		value: stubCamelCase,
	});
	assert.deepStrictEqual(testConv, expectedSnakeCase);
});

test('test convert to snake case skip nested_arr', () => {
	const expectedSnakeCaseWithoutNestedArr = {
		a_bc: 1,
		hello_world: 'a',
		obj_one: {
			obj_kid: 1,
		},
		nestedArr: [
			{
				nested_obj: 1,
			},
			{
				nested_obj: 2,
			},
		],
	};
	const testConv = serialize({
		type: CasesEnum.snakeCase,
		value: stubCamelCase,
		skip: ['nestedArr'],
	});
	assert.deepStrictEqual(testConv, expectedSnakeCaseWithoutNestedArr);
});
