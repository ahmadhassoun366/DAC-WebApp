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

    localStorage.setItem("token", token);
    this.currentUserSubject.next(user);

    return user;
  }

  async signup(
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    password: string,
    passwordConfirm: string
  ): Promise<User> {
    const response = await axios.post<User>(
      "http://localhost:8000/auth/signup",
      { firstName, lastName, phone, email, password, passwordConfirm }
    );
    const user = response.data;

    // Optionally, you can log in the user directly after signing up
    // localStorage.setItem("token", user.token);
    // this.currentUserSubject.next(user);

    return user;
  }

  logout(): void {
    localStorage.removeItem("token");
    this.currentUserSubject.next(null);
  }
}

export const authService = new AuthService();
