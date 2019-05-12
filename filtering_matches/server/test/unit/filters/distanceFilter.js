// eslint-disable-next-line import/no-extraneous-dependencies
const should = require('should');

const DistanceFilter = require('../../../lib/filters/distanceFilter');
const data = require('../../mockData/data');
const stubConstants = require('../../helpers/constants_stub');
const stubActiveUser = require('../../helpers/activeUser_stub');
const DB = require('../../../lib/db');

describe('Distance Filter', () => {
  before(() => { this.constantsStub = stubConstants(); });
  before(() => { this.activeUserStub = stubActiveUser(); });
  after(() => { this.constantsStub.restore(); });
  after(() => { this.activeUserStub.restore(); });

  beforeEach(() => {
    const { id: activeUserId } = DB.getActiveUserData();
    this.distanceFilter = new DistanceFilter(data.matches.filter(entry => entry.id !== activeUserId));
  });

  it('should filter only users that are closer then the given distance', () => {
    const result = this.distanceFilter.getFilteredData('distance', '200');
    result.should.be.an.Array();
    result.should.have.length(1);
    result[0].city.name.should.eql('Solihull');
  });

  it('should return null if range is below min value', () => {
    should.not.exist(this.distanceFilter.getFilteredData('compatibility', '>0<90'));
  });

  it('should return null if range is above max value', () => {
    should.not.exist(this.distanceFilter.getFilteredData('compatibility', '>18<100'));
  });

  it('should return null if no value', () => {
    should.not.exist(this.distanceFilter.getFilteredData());
  });

  it('should return null if incorrect range in query', () => {
    should.not.exist(this.distanceFilter.getFilteredData('compatibility', '>18'));
  });
});
