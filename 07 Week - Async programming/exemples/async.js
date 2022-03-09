// quiz js
// f va fi function () { return 1; }
(function f(f) {
  return typeof f(); // typeof 1 => number
})(function () { return 1; });