class BaseFilter {
  constructor(data) {
    this.data = data;
  }

  validate() {
    throw new Error('Not implemented');
  }

  filter() {
    throw new Error('Not implemented');
  }

  getFilteredData(propName, value) {
    if (!this.validate(value)) return null;
    return this.filter(propName, value);
  }
}

module.exports = BaseFilter;
