// Marital Status Change Handler
document.getElementById('marital_status').addEventListener('change', function () {
    if (this.value === 'married') {
        document.getElementById('marital_married').value = '1.0';
        document.getElementById('marital_single').value = '0.0';
    } else {
        document.getElementById('marital_married').value = '0.0';
        document.getElementById('marital_single').value = '1.0';
    }
});

// Education Change Handler
document.getElementById('education').addEventListener('change', function () {
    if (this.value === 'primary') {
        document.getElementById('education_primary').value = '1.0';
        document.getElementById('education_secondary').value = '0.0';
        document.getElementById('education_tertiary').value = '0.0';
    } else if (this.value === 'secondary') {
        document.getElementById('education_primary').value = '0.0';
        document.getElementById('education_secondary').value = '1.0';
        document.getElementById('education_tertiary').value = '0.0';
    } else {
        document.getElementById('education_primary').value = '0.0';
        document.getElementById('education_secondary').value = '0.0';
        document.getElementById('education_tertiary').value = '1.0';
    }
});

// Contact Change Handler
document.getElementById('contact').addEventListener('change', function () {
    if (this.value === 'cellular') {
        document.getElementById('contact_cellular').value = '1.0';
        document.getElementById('contact_unknown').value = '0.0';
    } else {
        document.getElementById('contact_cellular').value = '0.0';
        document.getElementById('contact_unknown').value = '1.0';
    }
});

// Poutcome Change Handler
document.getElementById('poutcome').addEventListener('change', function () {
    if (this.value === 'success') {
        document.getElementById('poutcome_success').value = '1.0';
        document.getElementById('poutcome_other').value = '0.0';
        document.getElementById('poutcome_unknown').value = '0.0';
    } else if (this.value === 'other') {
        document.getElementById('poutcome_success').value = '0.0';
        document.getElementById('poutcome_other').value = '1.0';
        document.getElementById('poutcome_unknown').value = '0.0';
    } else {
        document.getElementById('poutcome_success').value = '0.0';
        document.getElementById('poutcome_other').value = '0.0';
        document.getElementById('poutcome_unknown').value = '1.0';
    }
});
