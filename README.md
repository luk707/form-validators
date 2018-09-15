[![CircleCI](https://circleci.com/gh/luk707/form-validators.svg?style=shield)](https://circleci.com/gh/luk707/form-validators)

# form-validators

A collection of javascript form validators

## Getting started

Install `form-validators` from your chosen package manager into your project:

npm:

```
$ npm install --save form-validators
```

yarn:

```
$ yarn add form-validators
```

Import any of the validators into your application:

```js
import { isEmail } from "form-validators";

// Create the email validator
const emailValidator = isEmail();
emailValidator("email@domain.com"); // undefined
emailValidator("not an email address"); // 'not an email address' is not a valid email address.

// Define a custom error message
const customEmailValidator = isEmail("You dun goofed!");
customEmailValidator("email@domain.com"); // undefined
customEmailValidator("not an email address"); // You dun goofed!

// Optionaly pass a function that recieves the email adress to build a custom error message
const dynamicCustomEmailValidator = isEmail(
  ({ value }) => `Hmm... I don't think '${value}' is a valid email address.`
);
dynamicCustomEmailValidator("email@domain.com"); // undefined
dynamicCustomEmailValidator("not an email address"); // Hmm... I don't think 'not an email address' is a valid email address.
```

_For a full list of validators see [the full list of validators](#/validators)_
