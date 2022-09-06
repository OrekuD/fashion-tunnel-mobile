import {PortalProvider} from '@gorhom/portal';
import React from 'react';
import {ActivityIndicator, StatusBar, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import App from './App';
import SocketManager from './src/components/SocketManager';
import colors from './src/constants/colors';
import initializeStore from './src/store';

// const App = () => {
//   return <Text style={{marginTop: 100}}>Okay</Text>;
// };

const Bootstrap = () => {
  const [store, setStore] = React.useState<Store>();

  React.useEffect(() => {
    const start = async () => {
      const preparedStore = await initializeStore();
      setStore(preparedStore);
    };

    start();
  }, []);

  if (!store) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.white,
        }}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <GestureHandlerRootView style={{flex: 1}}>
        <SocketManager>
          <SafeAreaProvider>
            <PortalProvider>
              <App />
            </PortalProvider>
          </SafeAreaProvider>
        </SocketManager>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default Bootstrap;
