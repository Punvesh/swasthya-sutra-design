
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  
  // Show loading state while checking authentication
  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  // If user is not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/auth" />;
  }
  
  // If user is authenticated, show the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
