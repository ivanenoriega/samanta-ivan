# CountdownTimer Component

A reusable countdown timer component that displays time remaining in days, hours, minutes, and seconds.

## Features

- Displays countdown in a grid layout
- Customizable title and labels
- Supports multiple languages
- Responsive design
- Customizable styling through className prop

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `timeLeft` | `TimeLeft` | **Required** | Object containing days, hours, minutes, and seconds |
| `title` | `string` | `"Falta"` | Title displayed above the timer |
| `labels` | `Labels` | Spanish labels | Custom labels for time units |
| `className` | `string` | `undefined` | Additional CSS classes for custom styling |

## TimeLeft Interface

```typescript
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
```

## Labels Interface

```typescript
interface Labels {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
```

## Usage Examples

### Basic Usage (Spanish)
```tsx
<CountdownTimer timeLeft={timeLeft} />
```

### Custom Title
```tsx
<CountdownTimer 
  timeLeft={timeLeft} 
  title="Time Remaining" 
/>
```

### Custom Labels (English)
```tsx
<CountdownTimer 
  timeLeft={timeLeft}
  title="Countdown"
  labels={{
    days: "days",
    hours: "hrs",
    minutes: "min",
    seconds: "sec"
  }}
/>
```

### Custom Labels (French)
```tsx
<CountdownTimer 
  timeLeft={timeLeft}
  title="Temps Restant"
  labels={{
    days: "jours",
    hours: "heures",
    minutes: "minutes",
    seconds: "secondes"
  }}
/>
```

### With Custom Styling
```tsx
<CountdownTimer 
  timeLeft={timeLeft}
  title="Custom Style"
  className="custom-timer-class"
/>
```

## Styling

The component uses the existing `TimerSection.module.scss` styles. You can override or extend these styles by passing a custom `className` prop.

## Dependencies

- React
- SCSS modules (TimerSection.module.scss)
