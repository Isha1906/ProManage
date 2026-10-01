import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";

import App from "../src/app/App";
import "./index.css";

Sentry.init({
    dsn: "https://6a2bc9190b391d12f00f1eec1bac3319@o4512180623441920.ingest.us.sentry.io/4512180689960960",

    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
        Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
    ],

    // Tracing
    tracesSampleRate: 1.0,

    // Session Replay - development/testing
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// "https://6a2bc9190b391d12f00f1eec1bac3319@o4512180623441920.ingest.us.sentry.io/4512180689960960"