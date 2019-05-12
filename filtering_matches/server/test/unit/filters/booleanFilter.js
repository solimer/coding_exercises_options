// eslint-disable-next-line import/no-extraneous-dependencies
const should = require('should');

const BooleanFilter = require('../../../lib/filters/booleanFilter');
const data = require('../../mockData/data');
const stubConstants = require('../../helpers/constants_stub');

describe('Boolean Filter', () => {
  before(() => { this.constantsStub = stubConstants(); });
  after(() => { this.constantsStub.restore(); });
  beforeEach(() => {
    this.booleanFilter = new BooleanFilter(data.matches);
  });

  it('should filter only entries with true value', () => {
    const result = this.booleanFilter.getFilteredData('isFavourite', 'true');
    result.should.be.an.Array();
    result.every(entry => entry.favourite).should.be.true();
  });

  it('should filter only entries with false value', () => {
    const result = this.booleanFilter.getFilteredData('isFavourite', 'false');
    result.should.be.an.Array();
    result.every(entry => !entry.favourite).should.be.true();
  });

  it('should return null for property not in config', () => {
    const result = this.booleanFilter.getFilteredData('bla', 'false');
    should.not.exist(result);
  });
});
