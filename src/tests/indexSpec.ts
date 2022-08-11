import myFunc from '../testingPractice'
import countries from '../countriesApi'
import supertest from 'supertest'
import app from '../basicExpressApi'

const request = supertest(app);

describe('Suite for myFunc function', () => {

  it('expect myFunc(5) to equal 25', () => {
    expect(myFunc(5)).toEqual(25);
  });
  
  it('expects(10) to equal 100', () => {
      expect(myFunc(10)).toEqual(10*10)
  })
})


describe ('Suite for countries api specs', () => {

  it("should get basic data on the country canada", async () => {
    const data = await countries.getCountry('canada');
    expect(data).toEqual({
      capital: 'Ottawa',
      region: 'Americas',
      numericCode: '124'
    });
  });
  
  it("should get capitals of NAFTA countries", async () => {
    const data = await countries.getRegionCapitals('nafta');
    expect(data).toEqual([
      'Ottawa', 'Mexico City', 'Washington, D.C.'
    ]);
  });
  
  it('should get region countries of new york', async() =>{
      const data = await countries.getRegionCountries('New-York');
      expect(data).toEqual(['first country', 'second country', 'and so on']);
  } )
})


describe('Suite for express basic api', () => {
  it ('expects to check api status code', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  })
})
