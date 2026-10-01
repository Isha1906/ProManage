import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check existing login when app starts
    useEffect(() => {
        const storedUser = localStorage.getItem("promanage_user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    // Login
    const login = (email, password) => {
        // Temporary mock authentication
        if (email === "amit@promanage.com" && password === "123456") {
            const userData = {
                id: 1,
                name: "Amit Singh",
                email: "amit@promanage.com",
                role: "Developer",
            };

            localStorage.setItem(
                "promanage_user",
                JSON.stringify(userData)
            );

            setUser(userData);

            return {
                success: true,
            };
        }

        return {
            success: false,
            message: "Invalid email or password",
        };
    };

    // Logout
    const logout = () => {
        localStorage.removeItem("promanage_user");
        setUser(null);
    };

    const value = {
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

export default AuthProvider;