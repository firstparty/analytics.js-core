'use strict';
/*
 * Module dependencies.
 */
var bindAll = require('bind-all');
var defaults = require('@ndhoule/defaults');
var store = require('@segment/store');
/**
 * Initialize a new `Store` with `options`.
 *
 * @param {Object} options
 */
function Store(options) {
    this.options(options);
}
/**
 * Set the `options` for the store.
 */
Store.prototype.options = function (options) {
    if (arguments.length === 0)
        return this._options;
    options = options || {};
    defaults(options, { enabled: true });
    this.enabled = options.enabled && store.enabled;
    this._options = options;
};
/**
 * Set a `key` and `value` in local storage.
 */
Store.prototype.set = function (key, value) {
    if (!this.enabled)
        return false;
    return store.set(key, value);
};
/**
 * Get a value from local storage by `key`.
 */
Store.prototype.get = function (key) {
    if (!this.enabled)
        return null;
    return store.get(key);
};
/**
 * Remove a value from local storage by `key`.
 */
Store.prototype.remove = function (key) {
    if (!this.enabled)
        return false;
    return store.remove(key);
};
/**
 * Expose the store singleton.
 */
module.exports = bindAll(new Store());
/**
 * Expose the `Store` constructor.
 */
module.exports.Store = Store;
