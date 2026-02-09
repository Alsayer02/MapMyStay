<?php

use App\Http\Controllers\authController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/register', function () {
    return view('register');
});
Route::post('/register', [authController::class, 'register']);

Route::get('/login', function () {
    return view('login');
})->name('login');
Route::post('/login', [authController::class, 'login']);

// Route::view('/login', 'login');
Route::view('/map', 'map')->name('map')->middleware('auth');

require __DIR__ . '/auth.php';
