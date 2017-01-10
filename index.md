---
title: This is the Title Right Here.
subtitle: This is the pithy sub title.
layout: default
---

## This is a Heading

And here is some code:


```js
/**
 * Does a thing
 */
function helloWorld(param1, param2) {
  var something = 0;

  // Do something
  // Make a really long comment like this to see what happens
  // with longer lines of code.
  if (2.0 % 2 == something) {
    console.log('Hello, world!');
  } else {
    return null;
  }

  // @TODO comment
}

```

{% if jekyll.environment == "production" %}
### Environment: Production

{% elsif jekyll.environment == "development" %}
### Environment: Development

{% else %}
### ERROR: No Environment Found
{% endif %}


Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.

Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

- Cconsectetur adipisicing
- Diusmod tempor incididunt ut labore
    - Dolore magna aliqua
    - Enim ad minim veniam quis nostrud
- Exercitation ullamco laboris nisi

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco _laboris nisi ut aliquip_ ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## This is a Heading
Lorem ipsum dolor sit amet, **consectetur** adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

see the [metadata]({{ site.baseurl }}/meta/)
