// eslint-disable-next-line import/no-extraneous-dependencies
const supertest = require('supertest');
const config = require('../../../config');
const stubConstants = require('../helpers/constants_stub');
const stubDB = require('../helpers/db_stub');
const DB = require('../../lib/db');
require('../../index');

const baseUrl = `http://localhost:${config.server.port}/api`;
const request = supertest(baseUrl);

describe('API Integration Tests', () => {
  before(() => { this.constantsStub = stubConstants(); });
  before(() => { this.activeUserStub = stubDB(); });
  after(() => { this.constantsStub.restore(); });
  after(() => { this.activeUserStub.restore(); });

  it('should return all matches except active user', () => request.get('/matches')
    .expect(({ body, status }) => {
      body.should.an.Array();
      body.should.have.length(DB.getAll().length - 1);
      status.should.be.eql(200);
      const { id: activeUserId } = DB.getActiveUserData();
      body.forEach(entry => entry.id !== activeUserId);
    }));

  it('should apply multiple filters at the same time', () => request.get('/matches')
    .query({ hasPhoto: true, compatibility: '>40<50' })
    .expect(({ body }) => {
      body.should.be.an.Array();
      body.forEach((entry) => {
        entry.main_photo.should.not.be.null();
        entry.compatibility_score.should.be.within(0.4, 0.5);
      });
    }));

  it('show return error message when incorrect property', () => request.get('/matches')
    .query({ hasPhoto: true, compatibility: '>40<50' })
    .expect(({ body }) => {
      body.should.be.an.Array();
      body.forEach((entry) => {
        entry.main_photo.should.not.be.null();
        entry.compatibility_score.should.be.within(0.4, 0.5);
      });
    }));
});
