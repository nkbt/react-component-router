#!/usr/bin/env node

require('@babel/register')({
  presets: [
    require.resolve('@babel/preset-react'),
    [
      require.resolve('@babel/preset-env'),
      {
        modules: 'commonjs',
        loose: true,
        targets: {
          node: 14
        }
      }
    ]
  ],
  retainLines: true,
  comments: false,
  babelrc: false
});

require('tape/bin/tape');
