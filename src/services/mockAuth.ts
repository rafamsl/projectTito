import type { AuthResponse, LoginCredentials } from '../types/auth';

const MOCK_USER = {
  email: 'rafael.msl81@gmail.com',
  password: '123456',
  userData: {
    id: 1,
    email: 'rafael.msl81@gmail.com',
    name: 'Rafael',
  },
  token: 'mock-jwt-token',
};

export function validateMockCredentials(credentials: LoginCredentials): AuthResponse | null {
  if (
    credentials.email === MOCK_USER.email &&
    credentials.password === MOCK_USER.password
  ) {
    return {
      user: MOCK_USER.userData,
      token: MOCK_USER.token,
    };
  }
  return null;
}