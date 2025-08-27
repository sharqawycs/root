/**
 * @import {MDXComponents} from 'mdx/types.js'
 */

import { MDXProvider } from '@mdx-js/preact';
import Post from './post.mdx';
// ^-- Assumes an integration is used to compile MDX to JS, such as
// `@mdx-js/esbuild`, `@mdx-js/loader`, `@mdx-js/node-loader`, or
// `@mdx-js/rollup`, and that it is configured with
// `options.providerImportSource: '@mdx-js/preact'`.

/** @type {MDXComponents} */
const components = {
  em(properties) {
    return <i {...properties} />;
  },
};

console.log(
  <MDXProvider components={components}>
    <Post />
  </MDXProvider>
);
