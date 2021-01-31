
import * as Font from 'expo-font';

const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./OpenSans-Regular.ttf'),
      'open-sans-bold': require('./OpenSans-Bold.ttf')
    });
  };

export default fetchFonts;