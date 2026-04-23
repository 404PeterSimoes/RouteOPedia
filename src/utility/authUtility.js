let isAuthenticated = false;
let currentUser = null;

try {
  const storedAuth = sessionStorage.getItem('demoAuth');
  if (storedAuth) {
    const authData = JSON.parse(storedAuth);
    isAuthenticated = authData.isAuthenticated;
    currentUser = authData.currentUser;
  }
} catch (e) {
  console.log('No stored auth data');
}

function getAuthState() {
  return { isAuthenticated, currentUser };
}

function setAuthState(auth, user = null) {
  isAuthenticated = auth;
  currentUser = user;

  try {
    sessionStorage.setItem(
      'demoAuth',
      JSON.stringify({ isAuthenticated, currentUser }),
    );
  } catch (e) {
    console.log('Could not store auth data');
  }
}

export { setAuthState, getAuthState };
