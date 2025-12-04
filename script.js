const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.getElementById('submit-otp-btn').onclick = function(e) {
    e.preventDefault();
    const email = document.getElementById('reset-email').value;
    const otp = document.querySelector('#reset-form input[placeholder="OTP"]').value;
    if (!otp) {
        alert('Please enter the OTP.');
        return;
    }
    fetch('/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('OTP verified! You can now reset your password.');
            // Redirect or show password reset fields here
        } else {
            alert('Invalid OTP.');
        }
    })
    .catch(() => {
        alert('Error verifying OTP.');
    });
};