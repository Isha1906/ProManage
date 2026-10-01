import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function DashboardCalendar() {

    const today = new Date();

    const [currentMonth, setCurrentMonth] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1)
    );

    const [selectedDate, setSelectedDate] = useState(today);

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const monthName = currentMonth.toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
    });

    // First day of current month
    const firstDay = new Date(year, month, 1).getDay();

    // Convert Sunday-first to Monday-first
    const startingDay = firstDay === 0 ? 6 : firstDay - 1;

    // Number of days in current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Empty spaces before first day
    for (let i = 0; i < startingDay; i++) {
        days.push(null);
    }

    // Actual dates
    for (let day = 1; day <= daysInMonth; day++) {
        days.push(day);
    }

    const goToPreviousMonth = () => {
        setCurrentMonth(
            new Date(year, month - 1, 1)
        );
    };

    const goToNextMonth = () => {
        setCurrentMonth(
            new Date(year, month + 1, 1)
        );
    };

    const isToday = (day) => {
        if (!day) return false;

        return (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        );
    };

    const isSelected = (day) => {
        if (!day) return false;

        return (
            day === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear()
        );
    };

    return (
        <section className="mt-1 bg-white rounded-lg shadow p-4 w-full ">
            {/* Calendar Header */}
            <div className="flex items-center justify-between">

                <h2 className="text-base font-semibold text-slate-800">
                    {monthName}
                </h2>

                <div className="flex items-center gap-1">

                    <button
                        onClick={goToPreviousMonth}
                        className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <button
                        onClick={goToNextMonth}
                        className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500"
                    >
                        <ChevronRight size={18} />
                    </button>

                </div>

            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 mt-4">

                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                        <div
                            key={day}
                            className="text-center text-xs font-medium text-slate-400"
                        >
                            {day}
                        </div>
                    )
                )}

            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-y-0.5 mt-2">

                {days.map((day, index) => {

                    if (!day) {
                        return (
                            <div key={`empty-${index}`} />
                        );
                    }

                    const todayDate = isToday(day);
                    const selected = isSelected(day);

                    return (
                        <button
                            key={day}
                            onClick={() =>
                                setSelectedDate(
                                    new Date(year, month, day)
                                )
                            }
                            className={`
                                relative
                                mx-auto
                                w-7 h-7
                                rounded-full
                                flex items-center justify-center
                                text-sm
                                transition
                                ${selected
                                    ? "bg-purple-900 text-white"
                                    : todayDate
                                        ? "border-2 border-purple-600 text-purple-900 font-semibold"
                                        : "text-slate-600 hover:bg-slate-100"
                                }
                            `}
                        >
                            {day}

                            {/* Today indicator */}
                            {todayDate && !selected && (
                                <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-purple-900" />
                            )}

                        </button>
                    );
                })}

            </div>
        </section>
    );
}

export default DashboardCalendar;