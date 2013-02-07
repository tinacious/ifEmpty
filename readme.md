# Tinacious "If Empty" jQuery Plugins

These plugins were developed to pass conditions on elements that are empty.

You specify parameters: (e.g. items to count, class to add, element to change).
- Items to count within the target element
- Class to add (if applicable)
- Element to add the class to *or* element to hide

1. **Tinacious Hide If Empty** plugin: `tinaciousHIE.js`
2. **Tinacious Add Class If Empty** plugin: `tinaciousACIE.js`

## Tinacious Hide If Empty - `TinaciousHIE.js`

This function counts the items in the target element. If there are no items, it will hide the desired element.

If you do not specify a parameter for `elementToHide` it will default to the target.

### Options
```js
$('#target').hideIfEmpty({
	// Items to count inside target
	item: 'li', // item to count
	// Selector of element to hide - defaults to $(this)
	elementToHide: '.hide_me'
});
```

## Tinacious Add Class If Empty - `TinaciousACIE.js`

This function counts the items in the target element. If there are no items, it will add the specified class to the desired element to change.

If you do not specify a parameter for `elementToChange` it will default to the target.

### Options
```js
$('#target').addClassIfEmpty({
	// Items to count inside target
	item: 'li',
	// Class to add to the specified element
	classToAdd: 'empty',
	// Selector of element to add the class to - defaults to $(this)
	elementToChange: '.change_me'
});
```

## Tinacious Replace If Empty - `TinaciousRIE.js`

This function counts the items in the target element. If there are no items, it will replace the desired element with the specified HTML.

If you do not specify a parameter for `replaceWithThis` it will be removed.

### Options
```js
$('#target').replaceIfEmpty({
	// Items to count inside target
	item: 'li',
	// Element to replace if the target is empty
	elementToReplace: '', // $(this)
	// Replace with the following HTML
	replaceWithThis: ''
});
```

## Examples
### Hiding if Empty
#### Hide Empty Element (no parameters)
The following code will hide the `ul#my_list` element if there are no children.

```js
$('ul#my_list').hideIfEmpty();
```
The default item to count is `li` so no parameters need to be set.

#### Hide Another Element
The following code will hide a different element if `#pictures` is empty.

```js
$('div#pictures').hideIfEmpty({
	item: 'img',
	elementToHide: '.sidebar'
});
```

If there are no images in `#pictures` then the `.sidebar` element will be hidden.

### Adding a Class if empty
#### Add a class to an empty element
The following code will add the class `empty` to the `ul#my_list` element if there are no children.

```js
$('ul#my_list').addClassIfEmpty();
```

#### Add a class to another element if the target is empty.
The following code will add a class to a different element if `#pictures` is empty.

```js
$('div#pictures').addClassIfEmpty({
	item: 'img',
	classToAdd: '.no_images',
	elementToChange: '.sidebar'
});
```

If there are no images in `#pictures` then the class `.no_images` will be added to `.sidebar`.

### Replacing if Empty
#### Replace an element with another if the target is empty (parameters required)
The following code will replace the chosen element with specified HTML.

The `replaceWithThis` parameter is required otherwise it will replace the element with an empty string.

```js
$('#pictures').replaceIfEmpty({
	item: 'img',
	replaceWithThis: '<h2>There are currently no pictures</h2>'
});
```