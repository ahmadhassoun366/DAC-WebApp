// services/user.service.ts

import axios from "axios";
import { getAuthToken } from "@/shared/utils/authHelper";
import { User } from "@/shared/services/auth/auth.types";
export async function fetchUserData(): Promise<User> {
  const token = getAuthToken();
  if (!token) throw new Error("No token found");

  const response = await axios.get<User>("http://localhost:8000/user/data", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
