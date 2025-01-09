# Dropdown Toggle Package

This simple JavaScript utility allows you to toggle the visibility of a dropdown menu based on either a **click** or **hover** event. The package can be customized by passing specific elements and a class name to hide/show the dropdown content.

## Installation

You can install this package via npm:

```bash
npm install dropdown-toggle
```

## Usage

### Import the `setDropdown` function:

```javascript
import { setDropdown } from 'dropdown-toggle';
```

### Function Signature:

```javascript
setDropdown(dropdownButton, dropdownContentWrapper, eventListener, hiddenClass = "hidden");
```

### Parameters:

- `dropdownButton`: **HTMLElement** - The button or trigger element that will toggle the dropdown content.
- `dropdownContentWrapper`: **HTMLElement** - The wrapper element of the dropdown content that will be shown/hidden.
- `eventListener`: **"click" | "hover"** - The type of event to listen for. It can either be "click" to toggle on click or "hover" to toggle on mouseover/mouseout.
- `hiddenClass`: **string** (Optional, default: "hidden") - The class that hides the dropdown content. You can customize this class name if needed.

### Example:

#### HTML:

```html
<button id="dropdown-button">Toggle Dropdown</button>
<div id="dropdown-content" class="hidden">
    <!-- Dropdown content goes here -->
</div>
```

#### JavaScript:

```javascript
import { setDropdown } from 'dropdown-toggle';

// Get the button and content elements
const dropdownButton = document.getElementById("dropdown-button");
const dropdownContentWrapper = document.getElementById("dropdown-content");

// Initialize the dropdown with a click event listener
setDropdown(dropdownButton, dropdownContentWrapper, "click");
```

You can also use the `hover` event listener instead:

```javascript
setDropdown(dropdownButton, dropdownContentWrapper, "hover");
```

### Example with Custom Hidden Class:

```javascript
setDropdown(dropdownButton, dropdownContentWrapper, "click", "hidden-class");
```

### Default Behavior:

- **Click Event**: When the button is clicked, the dropdown content will toggle visibility.
- **Hover Event**: When the button is hovered over, the dropdown content will appear, and it will disappear when the mouse leaves both the button and the content area.

### Error Handling:

- If an invalid `eventListener` type (other than `click` or `hover`) is passed, the function will log an error to the console.

## License

MIT License