export default (
  globalThis ? globalThis
  : self !== undefined ? self
  : this
); // prettier-ignore
