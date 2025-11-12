import { Navigate, useLocation } from "react-router";
import Loading from "../component/Loading";
import useAuth from "../hook/useAuth";

const PrivateRoutes = ({ children }) => {
  const { users, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loading />;

  if (!users) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }


  return children;
};

export default PrivateRoutes;
