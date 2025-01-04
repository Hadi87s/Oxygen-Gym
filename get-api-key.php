<?php
// Set the content type to JSON
header('Content-Type: application/json');

// Store your API key securely here
$apiKey = "sk-072eda1ac3e44218b11980ecf2753f13";

// Return the API key as a JSON response
echo json_encode(["apiKey" => $apiKey]);
?>
