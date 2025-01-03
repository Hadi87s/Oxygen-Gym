<?php
session_start();

// Check if the user is logged in
if (isset($_SESSION['user_id']) && isset($_SESSION['fullname'])) {
    // Return the user's name as JSON
    header('Content-Type: application/json');
    echo json_encode(['status' => 'success', 'fullname' => $_SESSION['fullname']]);
} else {
    // User is not logged in
    header('Content-Type: application/json');
    echo json_encode(['status' => 'error', 'message' => 'User not logged in']);
}
?>