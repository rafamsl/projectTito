import api from '../lib/api';
import { validateMockCredentials } from './mockAuth';
import type { AuthResponse, LoginCredentials, RegisterCredentials } from '../types/auth';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // Check mock credentials first
    const mockAuth = validateMockCredentials(credentials);
    if (mockAuth) {
      return mockAuth;
    }

    // If mock auth fails, proceed with actual API call
    const { data } = await api.post<AuthResponse>('/auth/login', credentials);
    return data;
  },

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('https://projecttitoapi.onrender.com/register', credentials);
    return data;
  },

  async loginWithGoogle(token: string): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('/auth/google', { token });
    return data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
  },
};