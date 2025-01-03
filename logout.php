<?php
session_start(); // Start the session

// Destroy the session
session_destroy();

// Clear any session-related data
$_SESSION = [];

// Optionally, delete the session cookie
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params["path"],
        $params["domain"],
        $params["secure"],
        $params["httponly"]
    );
}

// Redirect to the home page or login page
header("Location: /Web%20Project/index.html"); // Change this to your desired redirect page
exit();
?>