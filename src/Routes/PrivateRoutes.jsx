
import Loading from "../component/Loading";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hook/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
 const location = useLocation()
  if (loading) {
    return <Loading></Loading> ;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
