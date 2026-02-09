<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register</title>
    <link rel="stylesheet" href="{{asset('css/auth.css')}}">
</head>
<body>

<div class="auth-container">
    <h2>Create Account</h2>

    <form method="POST" action="/register" id="registerForm">
        @csrf

        <input type="text" name="name" placeholder="Full Name" required>
        <input type="email" name="email" placeholder="Email Address" required>
        <input type="password" name="password" placeholder="Password" required>
        <input type="password" name="password_confirmation" placeholder="Confirm Password" required>

        <button type="submit">Register</button>
    </form>

    <p>Already have an account? <a href={{ route('login') }}>Login</a></p>
</div>

<script src="{{ asset('js/auth.js') }}"></script>
</body>
</html>
