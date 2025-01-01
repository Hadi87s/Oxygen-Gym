<?php
header('Content-Type: application/json');

try {
    // Connect to the database
    $db = new mysqli("localhost", "root", "", "oxygen_shop");

    // Check the connection
    if ($db->connect_error) {
        throw new Exception("Database connection failed: " . $db->connect_error);
    }

    // Query to fetch all products
    $query = "SELECT * FROM products";
    $result = $db->query($query);

    // Check if any products are found
    if ($result->num_rows > 0) {
        $products = [];

        // Fetch each product as an associative array
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }

        // Return products as JSON
        echo json_encode($products);
    } else {
        echo json_encode([]);
    }

    // Close the database connection
    $db->close();
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
}

?>
