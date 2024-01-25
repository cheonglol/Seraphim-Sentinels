module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "extends": [
        // prettier last to overwrite last
        "prettier"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "off",
        "react/no-children-prop": "off",

    }
}
