const BaseFilter = require('./baseFilter');

class ExistFilter extends BaseFilter {
  extractValues() {
    return true;
  }

  filter(propName) {
    return this.data.filter(entry => !!entry[propName]);
  }
}

module.exports = ExistFilter;
