// types/auth.types.ts

export interface User {
  id: string;
  email: string;
  name: string;
  // Add more user properties as needed
}

export interface LoginResponse {
  user: User;
  token: string; // If you use token-based authentication
}
