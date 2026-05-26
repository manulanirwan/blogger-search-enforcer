/**
 * Force Search Placeholder v1.0.0
 * Automatically enforces custom placeholder text across stubborn theme search inputs.
 */
function forceSearchPlaceholder(customText) {
    var textToUse = customText || 'Search...';
    var allInputs = document.querySelectorAll('input[type="search"], input[name="q"], .search input, input.search');

    allInputs.forEach(function(input) {
        input.setAttribute('placeholder', textToUse);

        // Fix legacy values matching "Search", "Search this blog", etc.
        if (/Search( this blog)?\.*/i.test(input.value)) {
            input.value = textToUse;
        }

        input.removeAttribute('onfocus');
        input.removeAttribute('onblur');
    });
}

// Run when DOM is ready
window.addEventListener('DOMContentLoaded', function() {
    // Users can change the string here to match their site
    forceSearchPlaceholder('Search in Manula Nirwan Tech'); 
});
