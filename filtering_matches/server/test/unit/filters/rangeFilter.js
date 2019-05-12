// eslint-disable-next-line import/no-extraneous-dependencies
const should = require('should');

const RangeFilter = require('../../../lib/filters/rangeFilter');
const data = require('../../mockData/data');
const stubConstants = require('../../helpers/constants_stub');

describe('Range Filter', () => {
  before(() => { this.constantsStub = stubConstants(); });
  after(() => { this.constantsStub.restore(); });

  beforeEach(() => {
    this.rangeFilter = new RangeFilter(data.matches);
  });

  it('should filter only entries with values inside the given range', () => {
    const result = this.rangeFilter.getFilteredData('age', '>40<50');
    result.should.be.an.Array();
    result.forEach((entry) => {
      entry.age.should.be.within(40, 50);
    });
  });

  it('should return null if range is below min value', () => {
    should.not.exist(this.rangeFilter.getFilteredData('age', '>15<50'));
  });

  it('should return null if range is above max value', () => {
    should.not.exist(this.rangeFilter.getFilteredData('age', '>18<100'));
  });

  it('should return null if no value', () => {
    should.not.exist(this.rangeFilter.getFilteredData());
  });

  it('should return null if incorrect range in query', () => {
    should.not.exist(this.rangeFilter.getFilteredData('age', '>18'));
  });
});
