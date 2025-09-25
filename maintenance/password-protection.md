# Password Protection for Video Loading

## Overview
This site uses simple password protection to load specific demo videos:

- **Password:** `animation`  
  **Loads:** `demo2.mp4` (Animation)

- **Password:** `liveaction`  
  **Loads:** `demo.mp4` (Live Action)

## How It Works
- On the main page, enter the password in the input field and click "View".
- If the password matches, the corresponding video will be displayed.
- If the password is incorrect, an error message appears.

## Maintenance
- To change passwords or video files, edit the password logic in [`index.html`](index.html:1730).
- Keep passwords simple for demo purposes.
- For more security, consider server-side protection.

## Location in Code
See the password logic in [`index.html`](index.html:1730).
