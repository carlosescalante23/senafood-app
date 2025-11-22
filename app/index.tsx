import { Redirect } from 'expo-router';

// Ensure the app always starts at the auth flow.
export default function RootIndex() {
  return <Redirect href="/login" />;
}
