// Submit Forma
document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var emailType = document.getElementById('selectbasic').value;
    var name = document.getElementById('textinput').value;
    var gender = document.querySelector('input[name="radios"]:checked').value;
    var pageReviews = [];
    var checkboxes = document.querySelectorAll('input[name="checkboxes"]:checked');
    checkboxes.forEach(function(checkbox) {
        pageReviews.push(checkbox.value);
    });
    var comment = document.getElementById('textarea').value;

    console.log('Email Type:', emailType);
    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Page Reviews:', pageReviews);
    console.log('Comment:', comment);
});