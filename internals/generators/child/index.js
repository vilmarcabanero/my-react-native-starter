/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a child component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'LoginForm',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'parent',
      message: 'What is the parent container of this component?',
      default: 'AuthPage',
    },
  ],
  actions: () => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../app/containers/{{ properCase parent}}/{{properCase name}}/index.js',
        templateFile: './child/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/containers/{{ properCase parent}}/{{properCase name}}/tests/index.test.js',
        templateFile: './child/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/containers/{{ properCase parent}}/{{properCase name}}/styles.js',
        templateFile: './child/styles.js.hbs',
        abortOnFail: true,
      },
    ];


    actions.push({
      type: 'pretty',
      path: '/containers/',
    });

    return actions;
  },
};
