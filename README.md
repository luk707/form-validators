# form-validators

A collection of javascript form validators

## isEmail

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
  ({ email }) => `Hmm... I don't think '${email}' is valid.`
);
dynamicCustomEmailValidator("email@domain.com"); // undefined
dynamicCustomEmailValidator("not an email address"); // Hmm... I don't think 'not an email address' is valid.
```
