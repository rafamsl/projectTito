import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthStore } from '../stores/authStore';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const location = useLocation();
  const user = getAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}