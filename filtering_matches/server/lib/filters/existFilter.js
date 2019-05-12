const BaseFilter = require('./baseFilter');

class BooleanFilter extends BaseFilter {
  validate() {
    return true;
  }

  filter(propName) {
    return this.data.filter(entry => !!entry[propName]);
  }
}

module.exports = BooleanFilter;
