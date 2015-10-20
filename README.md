<p align="center">
<a href="https://haleks.ca" target="_blank"><img src="https://haleks.ca/images/logo/haleks[markdown-orange].png" alt="haleks logo"></a>
</p>

<h1 align="center">
Shrouder
<br>
<!-- <a href="https://travis-ci.org/haleks/shrouder" target="_blank"><img src="https://img.shields.io/travis/haleks/shrouder/master.svg?style=flat-square" alt="travic ci"></a> -->
<a href="https://github.com/haleks/shrouder/releases" target="_blank"><img src="https://img.shields.io/github/release/haleks/shrouder.svg?style=flat-square" alt="latest release"></a>
<a href="LISCENCE" target="_blank"><img src="https://img.shields.io/badge/license-MIT-ff4c00.svg?style=flat-square" alt="liscense"></a>
</h1>

A safeguard against spam bots by creating your email via javascript.


## Documentation

### Installation

Installing via [bower](http://bower.io/)

```
bower install shrouder
```


### How to Use

Simply add the appropriate data-attributes to your element.

```html
<a href="#" class="button small secondary" data-toggle="email" data-user="hello" data-domain="haleks.ca" data-text="email us"></a>
```

This element will be converted automatically to the following element.

```html
<a href="mailto:hello@haleks.ca" class="button small secondary" itemprop="email">Email</a>
```


## License

Shrouder is licensed under [The MIT License (MIT)](LICENSE).
