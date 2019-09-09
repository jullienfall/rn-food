import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchApi = (searchTerm) => {
    yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'san jose',
      }
    })
      .then(res => setResults(res.data.businesses))
      .catch(error => {
        console.warn(error);
        setErrorMsg("Something went wrong");
      })
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, errorMsg, results];
};
