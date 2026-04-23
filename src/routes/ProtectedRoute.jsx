import { Navigate, useLocation } from 'react-router-dom';
import { getAuthState } from '../utility/authUtility';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = getAuthState();

  const location = useLocation();
  console.log(location);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRoute;
