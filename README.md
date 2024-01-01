<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# lowercaseKeys

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert each object key to lowercase.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import lowercaseKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-lowercase-keys@deno/mod.js';
```

#### lowercaseKeys( obj )

Converts each `object` key to lowercase, mapping the transformed keys to a new `object` having the same values.

```javascript
var obj1 = {
    'A': 1,
    'B': 2
};

var obj2 = lowercaseKeys( obj1 );
// returns { 'a': 1, 'b': 2 }
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function only transforms **own** properties. Hence, the function does **not** transform inherited properties.
-   The function **shallow** copies key values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import lowercaseKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-lowercase-keys@deno/mod.js';

var obj1 = {
    'A': 'beep',
    'B': 'boop',
    'C': 'foo',
    'D': 'bar'
};

var obj2 = lowercaseKeys( obj1 );

console.dir( obj2 );
// => { 'a': 'beep', 'b': 'boop', 'c': 'foo', 'd': 'bar' }
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-uncapitalize-keys`][@stdlib/utils/uncapitalize-keys]</span><span class="delimiter">: </span><span class="description">convert the first letter of each object key to lowercase.</span>
-   <span class="package-name">[`@stdlib/utils-uppercase-keys`][@stdlib/utils/uppercase-keys]</span><span class="delimiter">: </span><span class="description">convert each object key to uppercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-lowercase-keys.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-lowercase-keys

[test-image]: https://github.com/stdlib-js/utils-lowercase-keys/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-lowercase-keys/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-lowercase-keys/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-lowercase-keys?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-lowercase-keys.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-lowercase-keys/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-lowercase-keys/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-lowercase-keys/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-lowercase-keys/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-lowercase-keys/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-lowercase-keys/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/uncapitalize-keys]: https://github.com/stdlib-js/utils-uncapitalize-keys/tree/deno

[@stdlib/utils/uppercase-keys]: https://github.com/stdlib-js/utils-uppercase-keys/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
