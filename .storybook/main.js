module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    'storybook-addon-i18next/register'
  ]
}
