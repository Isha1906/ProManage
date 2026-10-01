
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, LogIn } from "lucide-react";
import { useAuth } from "../../../app/providers/AuthProvider";

function LoginForm() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const result = login(email.trim(), password);

        if (result.success) {
            navigate("/", { replace: true });
        } else {
            setError(result.message);
        }
    };

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-white w-full max-w-md 
            aspect-square rounded-full shadow-lg 
            shadow-blue-500 p-6 sm:p-8 
            flex flex-col justify-center gap-5 relative"
        >

            {error && (
                <p
                    role="alert"
                    className="
            absolute
            top-16
            left-1/2
            -translate-x-1/2
            text-sm
            text-red-600
            bg-red-50
            p-3
            rounded-lg
            text-center
            w-65
        ">
                    {error}
                </p>
            )}
            <div className="justify-items-center">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                </label>
                <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        id="email"
                        type="email"
                        required
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-65 h-11 pl-10 pr-3 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-green-500"
                    />
                </div>
            </div>

            <div className="justify-items-center">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                    Password
                </label>
                <div className="relative">
                    <LockKeyhole size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        required
                        id="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-65 h-11 pl-10 pr-10 border
                         border-slate-200 rounded-lg text-sm 
                         outline-none focus:ring-2
                          focus:ring-blue-500/20
                           focus:border-green-500"/>

                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
            </div>

            <button
                type="submit"
                className="w-75 p-2 flex justify-center 
                gap-2 rounded-full mx-auto
                bg-gradient-to-r
                 from-black to-indigo-900
                  text-white shadow-lg 
                  shadow-blue-900/20 text-sm 
                 font-semibold hover:bg-blue-700 
                 cursor-pointer">

                Sign In <LogIn size={18} />
            </button>
        </form>
    );
}

export default LoginForm;