import supertest from 'supertest'
import app from '../_Section_1/expressApiIntro'

const request = supertest(app);

describe('Express Api Intro suite', () => {
    it('Expects to respond 200 OK', async () =>{
        const response = await request.get('/api/admin');
        expect(response.status).toEqual(200);
    })
})