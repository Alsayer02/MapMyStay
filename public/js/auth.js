document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    const password = document.querySelector('input[name="password"]').value;
    const confirm = document.querySelector('input[name="password_confirmation"]').value;

    if (password !== confirm) {
        e.preventDefault();
        alert('Passwords do not match!');
    }
});
