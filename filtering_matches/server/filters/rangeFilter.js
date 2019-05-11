const BaseFilter = require('./baseFilter');
const constants = require('./constants');

class RangeFilter extends BaseFilter {
  extractValues(values) {
    const reg = new RegExp(/>(\d*)<(\d*)/g);
    const [, from, to] = reg.exec(values);
    this.from = from;
    this.to = to;
  }

  validate(value, query) {
    const { minValue, maxValue } = constants[query];
    return this.from >= minValue && this.to <= maxValue;
  }

  filter(propName) {
    return this.data.filter(entry => entry[propName] >= this.from && entry[propName] <= this.to);
  }
}

module.exports = RangeFilter;
