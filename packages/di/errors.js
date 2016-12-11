const NappiError = require("../../shared").NappiError;

/**
 * Generic Dependency Injection error
 *
 * @extends nappi.shared.NappiError
 * @memberof nappi.DI.Errors
 */
class GenericDIError extends NappiError {
  /**
   * Allows to specify container where DI problem happened.
   *
   * @param {nappi.DI.Container} container
   * @return {GenericDIError} Returns self to allow chaining
   */
  withContainer(container) {
    this.container = container;
    return this;
  }
}

/**
 * Thrown if factory was not found in container during lookup process
 *
 * @extends nappi.DI.Errors.GenericDIError
 * @memberof nappi.DI.Errors
 */
class FactoryNotFoundError extends GenericDIError {
  /**
   * Error constructor is modified to build error message automatically
   * out of factory name that caused an error
   *
   * @param {string} factoryName - name of the factory that was looked up
   */
  constructor(factoryName) {
    super(`Factory named "${ factoryName }" was not found in container`);
  }
}

/**
 * @namespace nappi.DI.Errors
 */
module.exports = {
  FactoryNotFoundError,
  GenericDIError
};
