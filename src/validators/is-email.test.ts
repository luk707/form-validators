import test from "ava";
import { isEmail } from "./is-email";
import { runValidator, valid } from "../test-helpers";

test("Correctly validates valid email addresses", t => {
  t.is(runValidator(isEmail(), "email@domain.com"), valid, "Valid email");
  t.is(
    runValidator(isEmail(), "firstname.lastname@domain.com"),
    valid,
    "Email contains dot in the address field"
  );
  t.is(
    runValidator(isEmail(), "email@subdomain.domain.com"),
    valid,
    "Email contains dot with subdomain"
  );
  t.is(
    runValidator(isEmail(), "firstname+lastname@domain.com"),
    valid,
    "Plus sign is considered valid character"
  );
  t.skip.is(
    runValidator(isEmail(), "email@123.123.123.123"),
    valid,
    "Domain is valid IP address"
  );
  t.is(
    runValidator(isEmail(), "email@[123.123.123.123]"),
    valid,
    "Square bracket around IP address is considered valid"
  );
  t.is(
    runValidator(isEmail(), '"email"@domain.com'),
    valid,
    "Quotes around email is considered valid"
  );
  t.is(
    runValidator(isEmail(), "1234567890@domain.com"),
    valid,
    "Digits in address are valid"
  );
  t.is(
    runValidator(isEmail(), "email@domain-one.com"),
    valid,
    "Dash in domain name is valid"
  );
  t.is(
    runValidator(isEmail(), "_______@domain.com"),
    valid,
    "Underscore in the address field is valid"
  );
  t.is(
    runValidator(isEmail(), "email@domain.name"),
    valid,
    ".name is valid Top Level Domain name"
  );
  t.is(
    runValidator(isEmail(), "email@domain.co.jp"),
    valid,
    "Dot in Top Level Domain name also considered valid (use co.jp as example here)"
  );
  t.is(
    runValidator(isEmail(), "firstname-lastname@domain.com"),
    valid,
    "Dash in address field is valid"
  );
});

test("Correctly invalidates invalid email addresses", t => {
  t.not(
    runValidator(isEmail(), "plainaddress"),
    valid,
    "Missing @ sign and domain"
  );
  t.not(runValidator(isEmail(), "#@%^%#$@#$@#.com"), valid, "Garbage");
  t.not(runValidator(isEmail(), "@domain.com"), valid, "Missing username");
  t.not(
    runValidator(isEmail(), "Joe Smith <email@domain.com>"),
    valid,
    "Invalid email address"
  );
  t.not(runValidator(isEmail(), "email.domain.com"), valid, "Missing @");
  t.not(
    runValidator(isEmail(), "email@domain@domain.com"),
    valid,
    "Two @ sign"
  );
  t.not(
    runValidator(isEmail(), ".email@domain.com"),
    valid,
    "Leading dot in address is not allowed"
  );
  t.not(
    runValidator(isEmail(), "email.@domain.com"),
    valid,
    "Trailing dot in address is not allowed"
  );
  t.not(
    runValidator(isEmail(), "email..email@domain.com"),
    valid,
    "Multiple dots"
  );
  t.skip.not(
    runValidator(isEmail(), "あいうえお@domain.com"),
    valid,
    "Unicode char as address"
  );
  t.not(
    runValidator(isEmail(), "email@domain.com (Joe Smith)"),
    valid,
    "Text followed email is not allowed"
  );
  t.not(
    runValidator(isEmail(), "email@domain"),
    valid,
    "Missing top level domain (.com/.net/.org/etc)"
  );
  t.skip.not(
    runValidator(isEmail(), "email@-domain.com"),
    valid,
    "Leading dash in front of domain is invalid"
  );
  t.skip.not(
    runValidator(isEmail(), "email@domain.web"),
    valid,
    ".web is not a valid top level domain"
  );
  t.not(
    runValidator(isEmail(), "email@111.222.333.44444"),
    valid,
    "Invalid IP format"
  );
  t.not(
    runValidator(isEmail(), "email@domain..com"),
    valid,
    "Multiple dot in the domain portion is invalid"
  );
});

test("Supports custom error message", t => {
  const invalidEmail = ".email@domain.com";
  t.is(
    runValidator(isEmail("TEST"), invalidEmail),
    "TEST",
    "Supports custom string error message"
  );
  t.is(
    runValidator(
      isEmail(({ email }) => `abcdefg ${email} hijklmnop`),
      invalidEmail
    ),
    `abcdefg ${invalidEmail} hijklmnop`,
    "Passes the email to an error message generator"
  );
});
