```markdown
# Force Search Placeholder Script

An aggressive, lightweight JavaScript utility designed to globally enforce custom placeholder text on stubborn search fields—especially useful for older blogger templates, legacy themes, or rigid third-party widgets.

## 🚀 Features
- **Aggressive Targeting:** Overwrites modern HTML5 placeholder attributes and legacy `value`-based search inputs.
- **Conflict Prevention:** Strips out hardcoded inline `onfocus` and `onblur` handlers that cause layout jumping.
- **Lightweight & Fast:** Pure vanilla JavaScript with zero dependencies.

## 🛠️ How to Use

### Option 1: Direct Integration (Recommended)
Copy the following code and paste it right before the closing `</body>` tag of your website template:

\`\`\`html
<script type='text/javascript'>
//<![CDATA[
function forceSearchPlaceholder(customText) {
    var textToUse = customText || 'Search...';
    var allInputs = document.querySelectorAll('input[type="search"], input[name="q"], .search input, input.search');
    allInputs.forEach(function(input) {
        input.setAttribute('placeholder', textToUse);
        if (/Search( this blog)?\.*/i.test(input.value)) { input.value = textToUse; }
        input.removeAttribute('onfocus');
        input.removeAttribute('onblur');
    });
}
window.addEventListener('DOMContentLoaded', function() {
    forceSearchPlaceholder('Your Custom Search Text Here');
});
//]]>
</script>
\`\`\`

### Option 2: External Script
Download `placeholder-enforcer.js` from this repository, host it, and reference it in your HTML:

\`\`\`html
<script src="path/to/placeholder-enforcer.js"></script>
\`\`\`

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
