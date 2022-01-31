import * as SecureStore from 'expo-secure-store';

export async function getToken() {
  let result = await SecureStore.getItemAsync('token');
  return result
}
export async function setToken(value) {
  await SecureStore.setItemAsync('token', value);
}
