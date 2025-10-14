// @ts-check

// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
	react: true,
	ignores: ['**/routeTree.gen.ts'],
	formatters: false,
	stylistic: false,
}).removeRules('style/no-tabs')
