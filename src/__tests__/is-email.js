import isEmail from "~/is-email";
import isValid from "~/util/is-valid";
import isInvalid from "~/util/is-invalid";

describe("isEmail", () => {
  it("accepts a valid email address", () => {
    expect(isValid(isEmail()("email@domain.com"))).toBe(true);
  });
  it("accepts a dot in the address", () => {
    expect(isValid(isEmail()("firstname.lastname@domain.com"))).toBe(true);
  });
  it("accepts a subdomain", () => {
    expect(isValid(isEmail()("email@subdomain.domain.com"))).toBe(true);
  });
  it("accepts a plus character in the address", () => {
    expect(isValid(isEmail()("firstname+lastname@domain.com"))).toBe(true);
  });
  it("accepts an ip address as a domain", () => {
    expect(isValid(isEmail()("email@123.123.123.123"))).toBe(true);
  });
  it("accepts an ip address in square brackets as a domain", () => {
    expect(isValid(isEmail()("email@[123.123.123.123]"))).toBe(true);
  });
  it("accepts quotes around an address", () => {
    expect(isValid(isEmail()('"email"@domain.com'))).toBe(true);
  });
  it("accepts numbers as an address", () => {
    expect(isValid(isEmail()("1234567890@domain.com"))).toBe(true);
  });
  it("accepts a dash in the domain", () => {
    expect(isValid(isEmail()("email@do-main.com"))).toBe(true);
  });
  it("accepts underscores as an address", () => {
    expect(isValid(isEmail()("_____@domain.com"))).toBe(true);
  });
  it("accepts a dot in the top level domain", () => {
    expect(isValid(isEmail()("email@domain.co.uk"))).toBe(true);
  });
  it("accepts a dash in the address", () => {
    expect(isValid(isEmail()("firstname-lastname@domain.co.uk"))).toBe(true);
  });
  it("rejects a missing domain and @ sign", () => {
    expect(isInvalid(isEmail()("email"))).toBe(true);
  });
  it("rejects a missing address", () => {
    expect(isInvalid(isEmail()("@domain.com"))).toBe(true);
  });
  it("rejects multiple @ signs", () => {
    expect(isInvalid(isEmail()("@domain.com"))).toBe(true);
  });
  it("rejects a missing top level domain", () => {
    expect(isInvalid(isEmail()("email@domain"))).toBe(true);
  });
  it("rejects whitespace before email", () => {
    expect(isInvalid(isEmail()(" email@domain.com"))).toBe(true);
  });
  it("rejects whitespace after email address", () => {
    expect(isInvalid(isEmail()("email@domain.com "))).toBe(true);
  });
  it("rejects whitespace around email address", () => {
    expect(isInvalid(isEmail()(" email@domain.com "))).toBe(true);
  });
});
