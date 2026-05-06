// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber returns true for a 7-digit phone number with a dash', () => {
  expect(isPhoneNumber('555-1234')).toBe(true);
});

test('isPhoneNumber returns true for a phone number with area code in parentheses', () => {
  expect(isPhoneNumber('(555) 555-1234')).toBe(true);
});

test('isPhoneNumber returns false for a phone number without a dash', () => {
  expect(isPhoneNumber('5551234')).toBe(false);
});

test('isPhoneNumber returns false for a phone number with too few digits after the dash', () => {
  expect(isPhoneNumber('555-123')).toBe(false);
});

test('isEmail returns true for a normal email address', () => {
  expect(isEmail('student@example.com')).toBe(true);
});

test('isEmail returns true for an email address with numbers and underscores before the @ symbol', () => {
  expect(isEmail('student_123@school.edu')).toBe(true);
});

test('isEmail returns false for text without an @ symbol', () => {
  expect(isEmail('studentexample.com')).toBe(false);
});

test('isEmail returns false for an email address with a one-letter domain ending', () => {
  expect(isEmail('student@example.c')).toBe(false);
});

test('isStrongPassword returns true for a valid password with letters and numbers', () => {
  expect(isStrongPassword('Abcd1')).toBe(true);
});

test('isStrongPassword returns true for a valid password with an underscore', () => {
  expect(isStrongPassword('z_12345')).toBe(true);
});

test('isStrongPassword returns false when the password starts with a number', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('isStrongPassword returns false when the password has an invalid character', () => {
  expect(isStrongPassword('A-bc')).toBe(false);
});

test('isDate returns true for a date with one-digit month and day', () => {
  expect(isDate('1/1/2024')).toBe(true);
});

test('isDate returns true for a date with two-digit month and day', () => {
  expect(isDate('12/31/2025')).toBe(true);
});

test('isDate returns false for a date using dashes instead of slashes', () => {
  expect(isDate('01-01-2024')).toBe(false);
});

test('isDate returns false for a date with a two-digit year', () => {
  expect(isDate('1/1/24')).toBe(false);
});

test('isHexColor returns true for a 3-character hex color with #', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor returns true for a 6-character hex color without #', () => {
  expect(isHexColor('1A2b3C')).toBe(true);
});

test('isHexColor returns false for a color with non-hex characters', () => {
  expect(isHexColor('#ggg')).toBe(false);
});

test('isHexColor returns false for a color with the wrong number of characters', () => {
  expect(isHexColor('#ffff')).toBe(false);
});