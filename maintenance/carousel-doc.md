# Floating Video Carousel Documentation

## Overview
This experiment page (`carousel.html`) displays a floating carousel of short videos (TikTok format) and, optionally, AI-generated images. Users can click on any floating media to play/pause videos or enlarge images.

## How It Works
- Videos and images float around the screen using simple JavaScript animation.
- Clicking a video toggles play/pause and unmutes/mutes audio.
- Clicking an image opens it in a new tab.

## Adding New Videos or Images
1. Place your video files (e.g., `.mp4`) or image files (e.g., `.png`, `.jpg`) in the project folder.
2. Edit the `sources` array in `carousel.html`:
   ```js
   const sources = [
     { type: 'video', src: 'your-video.mp4' },
     { type: 'image', src: 'your-image.png' }
   ];
   ```
3. Save and refresh the page.

## Maintenance Notes
- The code is kept simple and well-commented for easy updates.
- The floating effect uses random movement and boundary checks.
- For more media, simply add to the `sources` array.

## Live Server
You can use the Live Server extension in VSCode to preview `carousel.html` interactively.

---
_Last updated: 2025-10-01_