import {createStackNavigator} from 'react-navigation';

import HomeScreen from '../containers/HomeScreen';
import SingleScreen from '../containers/SingleScreen';
import ResultScreen from '../containers/ResultScreen';

const RootNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Results: {
        screen: ResultScreen,
        navigationOptions: {
            headerTitle: 'Results',
        },
    },
    Show: {
        screen: SingleScreen,
        navigationOptions: {
            headerTitle: 'Show',
        },
    },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerTitle: 'TV Show Search',
        headerBackTitle: 'Back',
    },
});

export default RootNavigator;