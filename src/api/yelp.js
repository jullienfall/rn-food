import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 2C6JvLnrDrl96dRkeC9tQNN5nyhe_509QWL1EqmI7XaXxrNg1Qab5B1DHiAMELx5XQXkBGMPJCVZr8rniqnWEgKCWm4TwrJleBY0U-qiotOoR6aS8xcgsLqUvtZvXXYx'
  }
});
