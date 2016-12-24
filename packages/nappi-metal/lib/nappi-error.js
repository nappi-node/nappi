/**
 * This is framework's representation of Error class, and it is guaranteed that
 * any framework method will only raise errors that are instances of this class.
 *
 * You are also encouraged to inherit your custom errors from this class. It
 * provides some useful enchancements compared to standard Error.
 *
 * @memberOf nappi-metal
 */
class NappiError extends Error {
  get cause() { return this._cause; }

  /**
   * @param {string} message Error message
   */
  constructor(message) {
    super(message);
  }

  /**
   * Allows to specify cause of error. Useful to wrap 3rd-party errors.
   *
   * @param { Error } error any error object, not necessarily NappiError
   * @return { NappiError } current error instance, to allow chaining
   */
  withCause(error) {
    if (error instanceof Error) {
      this._cause = error;
    }

    return this;
  }
}

module.exports = NappiError;
