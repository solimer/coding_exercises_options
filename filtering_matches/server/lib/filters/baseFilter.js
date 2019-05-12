const constants = require('./constants');

class BaseFilter {
  constructor(data) {
    this.data = data;
    this.value = null;
    this.from = null;
    this.to = null;
  }

  validate(query) {
    return !!this.getConstants()[query];
  }

  getConstants() {
    return constants;
  }

  // eslint-disable-next-line class-methods-use-this
  filter() {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line class-methods-use-this
  extractValues(values) {
    if (!values) return false;
    this.value = values;
    return true;
  }

  getFilteredData(query, value) {
    if (!this.extractValues(value)) return null;
    if (!this.validate(query)) return null;
    const { propName } = this.getConstants()[query];
    return this.filter(propName);
  }
}

module.exports = BaseFilter;
