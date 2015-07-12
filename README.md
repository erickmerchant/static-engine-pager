# static-engine-pager

[![Dependency Status](https://david-dm.org/erickmerchant/static-engine-pager.svg?style=flat-square)](https://david-dm.org/erickmerchant/static-engine-pager) [![devDependency Status](https://david-dm.org/erickmerchant/static-engine-pager/dev-status.svg?style=flat-square)](https://david-dm.org/erickmerchant/static-engine-pager#info=devDependencies) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

This is a plugin for [static-engine](https://github.com/erickmerchant/static-engine). It adds next and previous properties to each object of the collection that.

```javascript
var engine = require('static-engine')
var pager = require('static-engine-pager')
var pluginA = require('plugin-a')

engine([
  pluginA,
  pager
])
```
