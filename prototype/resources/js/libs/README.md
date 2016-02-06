rawblock
========

Rawblock JS is a simple UI component library, that allows to create re-usable, accessible, responsive and self-contained components using either ES5 or ES6.

The rawblock core scripts consists of the rb_crucial.js and the rb_main.js. As a dependency for rawblock either rb_$.js or jQuery has to be included. In most cases rb_$.js, which provides a jQuery like API and adds itself to the `rb.$` namespace should be good enough.

For older browsers some polyfills (IE11-), namely DOM4 and some ES6 Promise/String/Array/Object polyfills has to be added.


Basic Component Markup
---------

In general the component markup consists of a `"js-rb-life"` class and `data-module` attribute with the name of the component as its value.

```html
<div class="js-rb-life" data-module="my-component"></div>
```

Getting started: Writing new components
---------

A good starting point is to read the API documentation for the [`rb.life.register` method]{@link rb.life.register} and the [`rb.Component` class]{@link rb.Component}.

A simple backbone to start playing around would look like this:

```html
<div class="js-rb-life" data-module="my-component"></div>
```

```js
(function(){
	'use strict';

	rb.life.register('my-component', class MyComponent extends rb.Component {
		constructor(element){
			super(element);

			this.log(this.element);
		}
	});
})();
```

Getting started: Customizing/Extending existing components.
---------

All components are classes and added to the `rb.components` namespace with their name. The button component for example can be found at [`rb.components.button`]{@link rb.components.button}.
