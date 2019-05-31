# @mdenic/uniqid

[![npm (scoped)](https://img.shields.io/npm/v/@mdenic/uniqid.svg)](https://www.npmjs.com/package/@mdenic/uniqid)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@mdenic/uniqid.svg)](https://www.npmjs.com/package/@mdenic/uniqid)

A super simple, lightning fast unique id based on the current timestamp in milliseconds, with optional prefix and suffix.

## Install

```
$ npm install @mdenic/uniqid
```

## Usage

```js
var uniqid = require("@mdenic/uniqid");

uniqid();
//=> "1558604880081" //string

uniqid('hello-');
//=> "hello-1558604880081" //string

uniqid('', '-world');
//=> "1558604880081-world" //string

uniqid('hello-', '-world');
//=> "hello-1558604880081-world" //string

```