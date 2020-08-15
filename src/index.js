import React from "react"
import ReactDOM from "react-dom"
import Login from "./Login"
import App from './App'
import * as Sentry from '@sentry/react';

Sentry.init({dsn: "https://7ca13742579b41a9912cbe8361119524@o432544.ingest.sentry.io/5385372",});

Sentry.configureScope(function(scope) {
    scope.setUser({"email": "preeti@xyz.com"});
});
Sentry.addBreadcrumb({
    category: 'confirm',
    level: Sentry.Severity.Info
});


ReactDOM.render(<Login />, document.querySelector("#root"))
