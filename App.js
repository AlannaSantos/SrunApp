import { NavigationContainer } from '@react-navigation/native'

import UserContextProvider from './src/context/UserContext';
import MainActivity from './src/stacks/MainActivity';

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainActivity/>
      </NavigationContainer>
    </UserContextProvider>
  );
}