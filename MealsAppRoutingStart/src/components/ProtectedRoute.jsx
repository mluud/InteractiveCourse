import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
    return localStorage.getItem('auth') === 'true';
};

export default function ProtectedRoute({ children }) {
    if (!isAuthenticated()){
        return <div></div>;
    }
  return children;
}