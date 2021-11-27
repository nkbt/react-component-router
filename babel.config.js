module.exports = {
  presets: [
    require.resolve('@babel/preset-react'),
    [require.resolve('@babel/preset-env'), {targets: {browsers: ['last 1 Chrome version']}}]
  ],
  env: {
    production: {
      plugins: [
        require.resolve('babel-plugin-transform-react-remove-prop-types'),
        {removeImport: true}
      ]
    }
  }
};
