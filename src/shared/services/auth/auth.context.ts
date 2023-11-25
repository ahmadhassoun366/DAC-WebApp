// context/auth.context.ts

import React from "react";
import { authService } from "./auth.service";

const AuthContext = React.createContext(authService);

export default AuthContext;
