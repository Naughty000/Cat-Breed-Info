// catApp.js
document.addEventListener('DOMContentLoaded', function() {
    const catForm = document.getElementById('catForm');
    const urlInput = document.querySelector('input[type="text"]');
    
    // Form submission handler
    catForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const catType = document.querySelector('input[name="cat-type"]:checked');
        const qualities = document.querySelectorAll('input[name="quality"]:checked');
        const photoUrl = urlInput.value;
        
        if (!catType) {
            alert('Please select whether your cat is indoor or outdoor.');
            return;
        }
        
        if (qualities.length === 0) {
            alert('Please select at least one personality trait.');
            return;
        }
        
        if (!photoUrl) {
            alert('Please enter a cat photo URL.');
            return;
        }
        
        // In a real app, you would send this data to a server
        const catData = {
            type: catType.value,
            qualities: Array.from(qualities).map(q => q.value),
            photoUrl: photoUrl
        };
        
        console.log('Cat submitted:', catData);
        alert('Thank you for submitting your cat information!');
        
        // Reset form
        catForm.reset();
    });
    
    // Add image preview functionality
    urlInput.addEventListener('blur', function() {
        if (this.value) {
            // In a real implementation, you would validate the URL
            // and potentially show a preview
            console.log('Photo URL entered:', this.value);
        }
    });
});
