const constants = require('./constants');

class BaseFilter {
  constructor(data) {
    this.data = data;
    this.value = null;
    this.from = null;
    this.to = null;
  }

  // eslint-disable-next-line class-methods-use-this
  validate() {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line class-methods-use-this
  filter() {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line class-methods-use-this
  extractValues(values) {
    this.value = values;
  }

  getFilteredData(query, value) {
    this.extractValues(value);
    if (!this.validate(value, query)) return null;
    const { propName } = constants[query];
    return this.filter(propName);
  }
}

module.exports = BaseFilter;
