const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');

describe('User API Tests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/user-api-test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should create a new user', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
    };

    const response = await request(app)
      .post('/users')
      .send(userData)
      .expect(201);

    expect(response.body).toMatchObject(userData);
  });

  it('should get all users', async () => {
    const users = [
      { name: 'User 1', email: 'user1@example.com' },
      { name: 'User 2', email: 'user2@example.com' },
    ];

    await User.insertMany(users);

    const response = await request(app)
      .get('/users')
      .expect(200);

    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toMatchObject(users[0]);
    expect(response.body[1]).toMatchObject(users[1]);
  });
});
