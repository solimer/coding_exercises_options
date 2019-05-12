// eslint-disable-next-line import/no-extraneous-dependencies
const should = require('should');

const ExistFilter = require('../../../lib/filters/existFilter');
const data = require('../../mockData/data');
const stubConstants = require('../../helpers/constants_stub');

describe('Exist Filter', () => {
  before(() => { this.constantsStub = stubConstants(); });
  after(() => { this.constantsStub.restore(); });
  beforeEach(() => {
    this.existFilter = new ExistFilter(data.matches);
  });

  it('should filter only entries with given property', () => {
    const result = this.existFilter.getFilteredData('hasPhoto');
    result.should.be.an.Array();
    result.every(entry => !!entry.main_photo).should.be.true();
  });

  it('should return null for query not in config', () => {
    const result = this.existFilter.getFilteredData('bla');
    should.not.exist(result);
  });
});
