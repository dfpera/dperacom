// module.exports = {
//   parser: "babel-eslint",
//   parserOptions: {
//     sourceType: "module",
//     ecmaVersion: 2020,
//     ecmaFeatures: {
//       jsx: true
//     }
//   },
//   env: {
//     node: true,
//     browser: true
//   },
//   rules: {
//     "react/prop-types": "off"
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:import/errors",
//     "plugin:react/recommended",
//     "plugin:prettier/recommended"
//   ],
//   settings: {
//     react: {
//       pragma: "React",
//       version: "detect"
//     }
//   }
// };

module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '17.0.2'
    }
  }
}