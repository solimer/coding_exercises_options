const RangeFilter = require('./rangeFilter');

class PersentageRangeFilter extends RangeFilter {
  extractValues(values) {
    super.extractValues(values);
    this.from = this.from / 100;
    this.to = this.to / 100;
  }
}

module.exports = PersentageRangeFilter;
