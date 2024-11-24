import { createContext} from "react";
import { LoginRequest } from "../services/auth/LoginRequest";
import { RegisterRequest } from "../services/auth/RegisterRequest";

interface AuthContextType {
	register: (
		signupRequest: RegisterRequest,
		setSession: (value: string) => void,
	) => Promise<void>;
	login: (
		loginRequest: LoginRequest,
		setSession: (value: string) => void,
	) => Promise<void>;
	logout: () => void;
	session?: string | null;
	isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

/*
async function loginHandler(
	loginRequest: LoginRequest,
	setSession: (value: string) => void,
) {
	try {
		const navigate = useNavigate();
		const response = await login(loginRequest);
		setSession(response.data.token);
		navigate("/dashboard");
	} catch (error) {
		console.error("Login failed:", error);
	}
}
*/

/*
async function signupHandler(
	signupRequest: RegisterRequest,
	setSession: (value: string) => void,
) {
	const response = await register(signupRequest);
	setSession(response.data.token);
}


export function AuthProvider(props: { children: ReactNode }) {
	const [[isLoading, session], setSession] = useStorageState("token");

    return(
        parseInt
    );
}
function login(loginRequest: LoginRequest) {
    throw new Error("Function not implemented.");
}

*/