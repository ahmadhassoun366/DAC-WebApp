// services/auth.service.ts

import axios from "axios";
import { BehaviorSubject } from "rxjs";
import { User, LoginResponse } from "./auth.types";

class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  async login(email: string, password: string): Promise<User> {
    const response = await axios.post<LoginResponse>(
      "http://localhost:8000/auth/login",
      { email, password }
    );
    const { user, token } = response.data;

    localStorage.setItem("token", token); // Save token to localStorage
    this.currentUserSubject.next(user);

    return user;
  }

  logout(): void {
    localStorage.removeItem("token"); // Remove token from localStorage
    this.currentUserSubject.next(null);
  }
}

export const authService = new AuthService();
