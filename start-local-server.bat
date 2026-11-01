@echo off
title Tower Foresight - Local Preview Server
echo ============================================================================
echo   TOWER FORESIGHT - GEO-ECONOMIC ^& ECONOMIC SECURITY ADVISORY
echo   Starting local web server at http://localhost:8080
echo ============================================================================
echo.
start "" "http://localhost:8080"
python -m http.server 8080 --directory "%~dp0"
