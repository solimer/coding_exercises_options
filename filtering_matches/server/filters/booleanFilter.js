const BaseFilter = require('./baseFilter');

class BooleanFilter extends BaseFilter {
  validate(value) {
    return value === 'true' || value === 'false';
  }

  filter(propName, value) {
    return this.data.filter(entry => (value === 'true' ? entry[propName] : !entry[propName]));
  }
}

module.exports = BooleanFilter;
