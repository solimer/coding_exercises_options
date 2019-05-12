// eslint-disable-next-line import/no-extraneous-dependencies
const should = require('should');

const PercentageRangeFilter = require('../../../lib/filters/percentageRangeFilter');
const data = require('../../mockData/data');
const stubConstants = require('../../helpers/constants_stub');

describe('Percentage Range Filter', () => {
  before(() => { this.constantsStub = stubConstants(); });
  after(() => { this.constantsStub.restore(); });

  beforeEach(() => {
    this.percentageRangeFilter = new PercentageRangeFilter(data.matches);
  });

  it('should convert values to number between 0.1 and 0.99', () => {
    const result = this.percentageRangeFilter.getFilteredData('compatibility', '>70<98');
    result.should.be.an.Array();
    result.forEach((entry) => {
      entry.compatibility_score.should.be.within(0.7, 0.98);
    });
  });

  it('should return null if range is below min value', () => {
    should.not.exist(this.percentageRangeFilter.getFilteredData('compatibility', '>0<90'));
  });

  it('should return null if range is above max value', () => {
    should.not.exist(this.percentageRangeFilter.getFilteredData('compatibility', '>18<100'));
  });

  it('should return null if no value', () => {
    should.not.exist(this.percentageRangeFilter.getFilteredData());
  });

  it('should return null if incorrect range in query', () => {
    should.not.exist(this.percentageRangeFilter.getFilteredData('compatibility', '>18'));
  });
});
