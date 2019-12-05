(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{435:function(n,e,a){"use strict";a.r(e),e.default='<p><a href="https://npmjs.com/package/stylelint-webpack-plugin"><img src="https://img.shields.io/npm/v/stylelint-webpack-plugin.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/stylelint-webpack-plugin.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/stylelint-webpack-plugin"><img src="https://david-dm.org/webpack-contrib/stylelint-webpack-plugin.svg" alt="deps"></a>\n<a href="https://dev.azure.com/webpack-contrib/stylelint-webpack-plugin/_build/latest?definitionId=4&#x26;branchName=master"><img src="https://dev.azure.com/webpack-contrib/stylelint-webpack-plugin/_apis/build/status/webpack-contrib.stylelint-webpack-plugin?branchName=master" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/stylelint-webpack-plugin"><img src="https://codecov.io/gh/webpack-contrib/stylelint-webpack-plugin/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://badges.gitter.im/webpack/webpack.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=stylelint-webpack-plugin"><img src="https://packagephobia.now.sh/badge?p=stylelint-webpack-plugin" alt="size"></a></p>\n<blockquote>\n<p>A Stylelint plugin for webpack</p>\n</blockquote>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> stylelint-webpack-plugin --save-dev</code></pre>\n<p><strong>Note</strong>: You also need to install <code>stylelint</code> from npm, if you haven\'t already:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> stylelint --save-dev</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>In your webpack configuration:</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> StylelintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'stylelint-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">StylelintPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>See <a href="http://stylelint.io/user-guide/node-api/#options">stylelint\'s options</a> for the complete list of options available. These options are passed through to the <code>stylelint</code> directly.</p>\n<h3 id="configfile"><code>configFile</code><a href="#configfile" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>String</code></li>\n<li>Default: <code>undefined</code></li>\n</ul>\n<p>Specify the config file location to be used by <code>stylelint</code>.</p>\n<p><strong>Note:</strong> By default this is <a href="http://stylelint.io/user-guide/configuration/">handled by <code>stylelint</code></a>.</p>\n<h3 id="context"><code>context</code><a href="#context" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>String</code></li>\n<li>Default: <code>compiler.context</code></li>\n</ul>\n<p>A string indicating the root of your files.</p>\n<h3 id="files"><code>files</code><a href="#files" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>String|Array[String]</code></li>\n<li>Default: <code>\'**/*.s?(a|c)ss\'</code></li>\n</ul>\n<p>Specify the glob pattern for finding files. Must be relative to <code>options.context</code>.</p>\n<h3 id="fix"><code>fix</code><a href="#fix" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>If <code>true</code>, <code>stylelint</code> will fix as many errors as possible. The fixes are made to the actual source files. All unfixed errors will be reported. See <a href="https://stylelint.io/user-guide/cli#autofixing-errors">Autofixing errors</a> docs.</p>\n<h3 id="formatter"><code>formatter</code><a href="#formatter" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>Function</code></li>\n<li>Default: <code>require(\'stylelint\').formatters.string</code></li>\n</ul>\n<p>Specify the formatter that you would like to use to format your results.</p>\n<h3 id="lintdirtymodulesonly"><code>lintDirtyModulesOnly</code><a href="#lintdirtymodulesonly" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Lint only changed files, skip lint on start.</p>\n<h3 id="stylelintpath"><code>stylelintPath</code><a href="#stylelintpath" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>String</code></li>\n<li>Default: <code>stylelint</code></li>\n</ul>\n<p>Path to <code>stylelint</code> instance that will be used for linting.</p>\n<h3 id="errors-and-warning">Errors and Warning<a href="#errors-and-warning" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>By default the plugin will auto adjust error reporting depending on stylelint errors/warnings counts.</strong>\nYou can still force this behavior by using <code>emitError</code> <strong>or</strong> <code>emitWarning</code> options:</p>\n<h4 id="emiterror"><code>emitError</code><a href="#emiterror" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Will always return errors, if set to <code>true</code>.</p>\n<h4 id="emitwarning"><code>emitWarning</code><a href="#emitwarning" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Will always return warnings, if set to <code>true</code>.</p>\n<h4 id="failonerror"><code>failOnError</code><a href="#failonerror" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Will cause the module build to fail if there are any errors, if set to <code>true</code>.</p>\n<h4 id="failonwarning"><code>failOnWarning</code><a href="#failonwarning" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Will cause the module build to fail if there are any warnings, if set to <code>true</code>.</p>\n<h4 id="quiet"><code>quiet</code><a href="#quiet" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Will process and report errors only and ignore warnings, if set to <code>true</code>.</p>\n<h2 id="changelog">Changelog<a href="#changelog" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/stylelint-webpack-plugin/blob/master/CHANGELOG.md">Changelog</a></p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/stylelint-webpack-plugin/blob/master/LICENSE">MIT</a></p>\n'}}]);