function truncateText(text, n) {
    if (text.length <= n) {
        return text;
    }
    return text.substring(0, n) + '...';
}

function formatDuration(text) {
    // avoid to apply the same formatting multiple times
    if (text.indexOf(':') === -1) {
        return text;
    }
    const timeParts = text.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const seconds = parseInt(timeParts[2], 10);

    let formattedDuration = '';
    if (hours > 0) {
        formattedDuration += `${hours} hr `;
    }
    if (minutes > 0) {
        formattedDuration += `${minutes} min `;
    }
    if (seconds > 0) {
        formattedDuration += `${seconds} secs`;
    }
    return formattedDuration.trim();
}

function applyRenderers() {
    // Truncate text
    const truncateElements = document.querySelectorAll('.truncate');
    truncateElements.forEach(function(element) {
        const truncatedText = truncateText(element.textContent, 300); 
        element.textContent = truncatedText;
    });

    // Format duration
    const durationElements = document.querySelectorAll('.duration');
    durationElements.forEach(function(element) {
        const durationText = formatDuration(element.textContent);
        element.textContent = durationText;
    });    
}

// this is only triggered when the page is loaded
// the MutationObserver is used to detect dynamic changes in the DOM
document.addEventListener('DOMContentLoaded', function() {
    applyRenderers();
});