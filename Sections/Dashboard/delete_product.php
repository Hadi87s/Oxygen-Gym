<?php
header("Content-Type: application/json"); // Set response type to JSON

// Database connection details
$host = 'localhost'; // Your database host
$dbname = 'oxygen_shop'; // Your database name
$username = 'root'; // Your database username
$password = ''; // Your database password

// Create a connection to the database
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $e->getMessage()]);
    exit;
}

// Get the raw POST data
$data = json_decode(file_get_contents("php://input"), true);

// Check if the product ID is provided in the request
if (isset($data['product_id'])) {
    $productId = $data['product_id'];

    // Prepare the SQL query to delete the product
    $sql = "DELETE FROM products WHERE id = :product_id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':product_id', $productId, PDO::PARAM_INT);

    // Execute the query
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Product deleted successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to delete product']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Product ID is missing']);
}

// Close the database connection
$conn = null;
?>