import { useState } from "react";
import { Eye, EyeOff, KeyRound } from "lucide-react";

function SecuritySettings() {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.currentPassword) {
            newErrors.currentPassword = "Current password is required.";
        }

        if (!formData.newPassword) {
            newErrors.newPassword = "New password is required.";
        } else if (formData.newPassword.length < 8) {
            newErrors.newPassword =
                "Password must be at least 8 characters.";
        } else if (!/[A-Z]/.test(formData.newPassword)) {
            newErrors.newPassword =
                "Password must contain an uppercase letter.";
        } else if (!/[a-z]/.test(formData.newPassword)) {
            newErrors.newPassword =
                "Password must contain a lowercase letter.";
        } else if (!/[0-9]/.test(formData.newPassword)) {
            newErrors.newPassword =
                "Password must contain a number.";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword =
                "Please confirm your new password.";
        } else if (
            formData.newPassword !== formData.confirmPassword
        ) {
            newErrors.confirmPassword =
                "Passwords do not match.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // API integration will be added here later.
        console.log("Password validation successful");

        setFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    };

    const passwordRequirements = [
        {
            label: "At least 8 characters",
            valid: formData.newPassword.length >= 8,
        },
        {
            label: "One uppercase letter",
            valid: /[A-Z]/.test(formData.newPassword),
        },
        {
            label: "One lowercase letter",
            valid: /[a-z]/.test(formData.newPassword),
        },
        {
            label: "One number",
            valid: /[0-9]/.test(formData.newPassword),
        },
    ];

    return (
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            {/* Header */}
            
            {/* Password section */}
            <div className="max-w-2xl">
                <h3 className="text-base font-semibold text-slate-800">
                    Change Password
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                    Update your password to keep your account secure.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-5"
                >
                    {/* Current Password */}
                    <div>
                        <label
                            htmlFor="currentPassword"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Current Password
                        </label>

                        <div className="relative">
                            <input
                                id="currentPassword"
                                name="currentPassword"
                                type={
                                    showCurrentPassword
                                        ? "text"
                                        : "password"
                                }
                                value={formData.currentPassword}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-4 py-2.5 pr-11 text-sm outline-none transition
                                    ${errors.currentPassword
                                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                                        : "border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
                                    }`}
                                placeholder="Enter current password"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowCurrentPassword(
                                        (prev) => !prev
                                    )
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                {showCurrentPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        {errors.currentPassword && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.currentPassword}
                            </p>
                        )}
                    </div>

                    {/* New Password */}
                    <div>
                        <label
                            htmlFor="newPassword"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            New Password
                        </label>

                        <div className="relative">
                            <input
                                id="newPassword"
                                name="newPassword"
                                type={
                                    showNewPassword
                                        ? "text"
                                        : "password"
                                }
                                value={formData.newPassword}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-4 py-2.5 pr-11 text-sm outline-none transition
                                    ${errors.newPassword
                                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                                        : "border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
                                    }`}
                                placeholder="Enter new password"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowNewPassword(
                                        (prev) => !prev
                                    )
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                {showNewPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        {errors.newPassword && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.newPassword}
                            </p>
                        )}

                        {/* Requirements */}
                        <div className="mt-3 space-y-1">
                            {passwordRequirements.map((requirement) => (
                                <p
                                    key={requirement.label}
                                    className={`text-xs ${requirement.valid
                                            ? "text-green-600"
                                            : "text-slate-400"
                                        }`}
                                >
                                    {requirement.valid ? "✓" : "○"}{" "}
                                    {requirement.label}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Confirm New Password
                        </label>

                        <div className="relative">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-4 py-2.5 pr-11 text-sm outline-none transition
                                    ${errors.confirmPassword
                                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                                        : "border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
                                    }`}
                                placeholder="Confirm new password"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        (prev) => !prev
                                    )
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        {errors.confirmPassword && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                        >
                            Change Password
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default SecuritySettings;