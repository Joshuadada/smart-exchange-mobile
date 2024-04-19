import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignIn></SignIn>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f1f1',
    marginTop: 40
  },
});
