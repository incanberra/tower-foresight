# Tower Foresight — Geo-Economic & Economic Security Advisory Website

This directory contains the draft website for **Tower Foresight**, tailored for ASX boards, C-suite executives, institutional investors, and senior Australian government decision-makers.

## Running & Testing Locally

### Option 1: Double-Click Launcher (Recommended on Windows)
Double-click `start-local-server.bat` in this folder. It will start a local Python HTTP server on port `8080` and automatically open `http://localhost:8080` in your browser.

### Option 2: PowerShell / Command Prompt
From the `tower-foresight` folder, run:
```powershell
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### Option 3: Direct File Open
Because the site uses zero external build steps and pure vanilla HTML/CSS/JS, you can also open `index.html` directly in any modern browser.

## Structure
- `index.html`: Main single-page executive site with tailored dual-audience switcher (ASX Boards vs. Government Departments), 6 Core Practice Areas, Interactive Coercion Vectors Lab, Filterable Career Track Record Timeline (1994–2026), Representative Briefings with modal previews, and Confidential Inquiry form.
- `styles.css`: Bespoke Sovereign Intelligence & Editorial design system (`#080E14` obsidian slate, `#134E3E` ONI deep green, `#C5A059` brushed gold, `#F6F4EF` editorial ivory).
- `app.js`: Interactive state management for the Coercion Vectors Lab, Career History domain filters, Audience Switcher, and Executive Summary modal reader.
- `assets/hero-vantage.png`: Bespoke high-resolution architectural & Indo-Pacific topographic hero graphic.
