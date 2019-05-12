const RangeFilter = require('./rangeFilter');

class PersentageRangeFilter extends RangeFilter {
  extractValues(values) {
    if (!super.extractValues(values)) return false;
    this.from = this.from / 100;
    this.to = this.to / 100;
    return true;
  }
}

module.exports = PersentageRangeFilter;
