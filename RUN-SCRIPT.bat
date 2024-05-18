@echo off
setlocal

:: Check if node_modules directory exists
if not exist "node_modules\" (
    echo Installing dependencies...
    npm install
    npm start
)

:: Run npm verify
:: echo Running npm verify...
:: npm run verify

endlocal