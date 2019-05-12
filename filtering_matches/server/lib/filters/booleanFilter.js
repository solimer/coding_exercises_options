const BaseFilter = require('./baseFilter');

class BooleanFilter extends BaseFilter {
  validate(query) {
    return super.validate(query) && (this.value === 'true' || this.value === 'false');
  }

  filter(propName) {
    return this.data.filter(entry => (this.value === 'true' ? entry[propName] : !entry[propName]));
  }
}

module.exports = BooleanFilter;
