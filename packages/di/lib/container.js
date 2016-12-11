/**
 * Container is a class, responsible for registration and lookup of services.
 *
 * @memberof nappi.DI
 */
class Container {
  constructor() {
    this.factories = new Map();
  }

  /**
   * Registers a new factory in Container
   *
   * @param {string} name - lookup name for future instance
   * @param {Class} factory - a constructor to be registered
   */
  register(name, factory) {
    this.factories.set(name, factory);
  }

  /**
   * Looks up an instance of previously registered factory
   */
}

module.exports = Container;
