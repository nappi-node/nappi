/**
 * Base Nappi Framework error
 *
 * @memberof nappi.shared
 */
class NappiError extends Error {
  /**
   * @param {string} message - Error message
   */
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'NappiError';
  }

  /**
   * Stores a previous error that caused the current one.
   *
   * @param {Error} otherError - Cause of current error
   * @return {NappiError} current error object to allow chaining
   */
  causedBy(otherError) {
    if (otherError instanceof Error) {
      this.causedBy = error
    }

    return this;
  }

}

module.exports = NappiError
