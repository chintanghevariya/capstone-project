import * as SecureStore from 'expo-secure-store';

export default async function getToken() {
  let result = await SecureStore.getItemAsync('token');
  alert(JSON.stringify(result))
}
export async function setToken(token, value) {
  await SecureStore.setItemAsync('token', value);
}