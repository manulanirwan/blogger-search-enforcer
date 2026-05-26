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
