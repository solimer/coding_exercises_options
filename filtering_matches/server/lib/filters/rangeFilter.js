const BaseFilter = require('./baseFilter');

class RangeFilter extends BaseFilter {
  extractValues(values) {
    if (!super.extractValues(values)) return null;

    const reg = new RegExp(/>(\d*)<(\d*)/g);
    const regRes = reg.exec(values);
    if (!regRes || regRes.length < 3) return null;

    const [, from, to] = regRes;
    this.from = from;
    this.to = to;
    return true;
  }

  validate(query) {
    const { minValue, maxValue } = this.getConstants()[query];
    return super.validate(query) && this.from >= minValue && this.to <= maxValue;
  }

  filter(propName) {
    return this.data.filter(entry => entry[propName] >= this.from && entry[propName] <= this.to);
  }
}

module.exports = RangeFilter;
