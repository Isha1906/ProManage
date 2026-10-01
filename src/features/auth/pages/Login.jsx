
import { Diamond } from "lucide-react";
import LoginForm from "../components/LoginForm";

function Login() {
    return (
        <main className="min-h-screen bg-[#0B132B] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-6">
                    <div className="mx-auto w-14 h-14 rounded-xl 
                    bg-linear-to-r *:from-black to-indigo-900 
                    flex items-center shadow-md 
                    shadow-blue-400 justify-center">
                        <Diamond className="w-7 h-7 text-white" />
                    </div>

                    <h1 className="mt-4 text-2xl font-bold text-white">
                        Welcome to ProManage
                    </h1>
                    <p className="mt-1 text-sm text-white">
                        Sign in to access your workspace
                    </p>
                </div>

                <LoginForm />

                <p className="mt-6 text-center text-xs text-slate-400">
                    © 2026 My Future Code. All rights reserved.
                </p>
            </div>
        </main>
    );
}

export default Login;