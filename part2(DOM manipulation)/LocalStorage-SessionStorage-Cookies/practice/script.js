/**
 * - If "window.matchMedia('(prefers-color-scheme: dark)').matches"
 *   returns a "true" then the system is dark mode, else it
 *   is in the light mode. 
 */
/**
 * OPTIMIZED SCRIPT.JS WITH EXPLANATORY COMMENTS
 * -------------------------------------------------------------------------
 * Summary of improvements over your original code:
 * 1. Bug Fix: Corrected the typo in the media query listener ("prefer-" to 
 *    "prefers-" and added the missing closing parenthesis).
 * 2. Code Reuse (DRY): Created a helper function `setTheme(theme)` to handle 
 *    class switching, eliminating duplicated if-else blocks.
 * 3. Cleaner Class Manipulation: Used `classList.toggle(class, force)` 
 *    instead of manual `add()` and `remove()` lines.
 * 4. DOM Caching: Cached `document.body` into a variable to avoid repetitive 
 *    DOM lookups.
 * 5. Simplified Toggle Handler: Used a concise ternary operator to determine 
 *    the next theme state on button click.
 */

// Cache document.body to optimize performance (relates to repeated 
// document.body calls in your original code).
const body = document.body;

// Cached media query reference to be used for both initial check and listener.
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * NEW HELPER FUNCTION: setTheme(theme)
 * Relates to your original `setDarkOrLight()` function, but enhanced. 
 * Instead of separate if/else statements adding/removing classes manually, 
 * `classList.toggle(className, forceBoolean)` automatically adds the class if 
 * the boolean is true and removes it if false.
 */
function setTheme(theme) {
    body.classList.toggle("dark", theme === "dark");
    body.classList.toggle("light", theme === "light");
}

// ==========================================
// 1. INITIAL THEME SETUP ON PAGE LOAD
// ==========================================
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    // If a theme was previously saved by the user, apply it directly.
    // (Relates to: if(localStorage.getItem("theme")){ document.body.classList.add(...) })
    setTheme(savedTheme);
} else {
    // Otherwise, fall back to the system preference using the helper function.
    // (Relates to your original `else { setDarkOrLight(); }`)
    setTheme(mediaQuery.matches ? "dark" : "light");
}

// ==========================================
// 2. SYSTEM THEME CHANGE LISTENER
// ==========================================
/**
 * BUG FIX APPLIED HERE: 
 * Your original code had: `window.matchMedia("(prefer-color-scheme: dark")` 
 * (missing 's' in prefers and missing closing parenthesis). 
 * This has been fixed to `(prefers-color-scheme: dark)`.
 */
mediaQuery.addEventListener("change", (e) => {
    // Only update automatically if the user hasn't set a manual override in localStorage.
    if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
    }
});

// ==========================================
// 3. TOGGLE BUTTON EVENT HANDLER
// ==========================================
// Relates to your original `let toggleBtn = document.querySelector("#toggleTheme")`
document.querySelector("#toggleTheme").addEventListener("click", () => {
    // Instead of long if/else blocks checking body classes and manually swapping them,
    // we determine the next theme using a clean ternary check:
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    
    // Apply the theme classes and update localStorage in just two clean lines.
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});