# Force Search Placeholder Script

A lightweight, aggressive JavaScript utility designed to globally enforce custom, branded placeholder text on stubborn search fields. It is especially useful for older Blogger/Blogspot templates, legacy CMS themes, or rigid third-party widgets that ignore standard HTML5 attributes.

## 🚀 Features

- **Aggressive Targeting:** Overwrites modern HTML5 `placeholder` attributes, HTML5 `search` inputs, and standard search form inputs simultaneously.
- **Legacy Theme Fallback:** Automatically detects and replaces older theme configurations that hardcode text like `"Search this blog..."` into the input `value` field.
- **Conflict Prevention:** Clears out disruptive, inline legacy JavaScript handlers (`onfocus` and `onblur`) to prevent old theme scripts from overwriting your custom text.
- **Performance Optimized:** Runs seamlessly on `DOMContentLoaded` without relying on bulky external libraries like jQuery.

---

## 🛠️ How to Use

### Direct Integration (Recommended for Blogger/HTML Templates)

Copy the code below and paste it directly into your theme's HTML, right before the closing `</body>` tag:

```html
<script type='text/javascript'>
//<![CDATA[
function forceSearchPlaceholder(customText) {
    var textToUse = customText || 'Search...';
    
    // Target all potential search inputs
    var allInputs = document.querySelectorAll('input[type="search"], input[name="q"], .search input, input.search');
    
    allInputs.forEach(function(input) {
        // Enforce modern placeholder
        input.setAttribute('placeholder', textToUse);
        
        // Fix legacy hardcoded values (e.g., "Search this blog")
        if (/Search( this blog)?\.*/i.test(input.value)) {
            input.value = textToUse;
        }
        
        // Remove inline script conflicts
        input.removeAttribute('onfocus');
        input.removeAttribute('onblur');
    });
}

// Run as soon as the DOM structure is safely loaded
window.addEventListener('DOMContentLoaded', function() {
    // Change 'Search in Manula Nirwan Tech' to your website's name!
    forceSearchPlaceholder('Search in Manula Nirwan Tech'); 
});
//]]>
</script>
