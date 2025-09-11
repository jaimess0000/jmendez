# Skill Bar Animations

The skill bars in `ai.html` use a CSS-only animation system for better performance and reliability. This implementation avoids the issues with animations resetting on scroll that can occur with JavaScript-based solutions.

## Key Features

- Pure CSS animations using custom properties
- One-time fill animation on page load
- Continuous shimmer effect for visual interest
- No JavaScript dependencies
- Smooth performance
- Maintains filled state after animation

## Implementation Details

### CSS Custom Properties

Each skill level uses the `--target-width` CSS custom property to define its final width:

```css
.skill-level.w-11/12 { --target-width: 90%; }
.skill-level.w-5/6 { --target-width: 85%; }
.skill-level.w-4/5 { --target-width: 80%; }
.skill-level.w-3/4 { --target-width: 75%; }
.skill-level.w-2/3 { --target-width: 66%; }
```

### Animation

The fill animation is defined using `@keyframes`:

```css
@keyframes fillBar {
    from { width: 0; }
    to { width: var(--target-width); }
}
```

The skill level elements use this animation:

```css
.skill-level {
    animation: fillBar 1.2s ease-out forwards;
    width: 0;
}
```

### Shimmer Effect

A continuous shimmer effect is added using a pseudo-element:

```css
.skill-level::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transform: translateX(-100%);
    animation: shimmer 2s infinite;
}
```

## Usage

To add a new skill bar:

1. Create the container structure:
```html
<div class="skill-bar">
    <div class="skill-level w-[size]"></div>
</div>
```

2. Choose the appropriate width class for the skill level:
- `w-4/5` for 80% (Advanced)
- `w-3/4` for 75% (Intermediate-Advanced)
- `w-2/3` for 66% (Intermediate)

The animation will automatically run once when the page loads and maintain its filled state.