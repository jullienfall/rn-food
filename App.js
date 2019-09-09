import { createAppContainer, createStackNavigator } from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultsShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    }
  }
);

export default createAppContainer(navigator);



// Client ID

// EkD6RAiOvgpBaf5PXBh-3Q
// API Key

// 2C6JvLnrDrl96dRkeC9tQNN5nyhe_509QWL1EqmI7XaXxrNg1Qab5B1DHiAMELx5XQXkBGMPJCVZr8rniqnWEgKCWm4TwrJleBY0U-qiotOoR6aS8xcgsLqUvtZvXXYx
