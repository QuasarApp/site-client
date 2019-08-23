module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true,
		"jest": true
	},
	"extends": [
		"airbnb",
		"plugin:jest/recommended",
		"plugin:flowtype/recommended"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"jest",
		"flowtype"
	],
	"settings": {
		"flowtype": {
			"onlyFilesWithFlowAnnotation": true
		}
	},
	"rules": {
    "comma-dangle": ["error", "never"],
		"react/jsx-filename-extension": [1, {
			"extensions": [".js", ".jsx"]
		}]
	}
};