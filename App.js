import { NavigationContainer } from '@react-navigation/native'
import { GlobalContext } from './src/context/GlobalAppContext';
import MainActivity from './src/stacks/MainActivity';

export default function App() {
  return (
    <GlobalContext>
      <NavigationContainer>
        <MainActivity/>
      </NavigationContainer>
    </GlobalContext>
  );
}