<?php
// Check if the form is submitted and all fields are set
if (isset($_POST['name']) && isset($_POST['description']) && isset($_POST['price']) && isset($_POST['category']) && isset($_FILES['image'])) {
    $name = $_POST['name'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $category = $_POST['category'];

    // Handle file upload
    $uploadDir = $_SERVER['DOCUMENT_ROOT'] . '/uploads/'; // Directory to save uploaded files
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true); // Create the directory if it doesn't exist
    }

    $fileName = basename($_FILES['image']['name']); // Get the file name
    $targetFilePath = $uploadDir . $fileName; // Full path for the uploaded file
    $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

    // Check file type (e.g., allow only images)
    $allowedTypes = ['jpg', 'jpeg', 'png', 'gif'];
    if (in_array($fileType, $allowedTypes)) {
        // Move the uploaded file to the server
        if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFilePath)) {
            try {
                // Database connection
                $db = new mysqli("localhost", "root", "", "oxygen_shop");

                // Check for connection errors
                if ($db->connect_error) {
                    die("Connection failed: " . $db->connect_error);
                }

                // Save product details into the database
                $imagePath = '/uploads/' . $fileName; // Path to store in the database
                $qs = "INSERT INTO `products` (`name`, `description`, `price`, `category`, `image_path`) VALUES ('$name', '$description', '$price', '$category', '$imagePath')";
                if ($db->query($qs) === TRUE) {
                    header("Location: control-center.html");
                    exit();
                } else {
                    echo "Error: " . $db->error;
                }

                $db->close();
            } catch (Exception $e) {
                echo "Error: " . $e->getMessage();
            }
        } else {
            echo "Error: Unable to upload the file.";
        }
    } else {
        echo "Error: Invalid file type. Only JPG, JPEG, PNG, and GIF files are allowed.";
    }
} else {
    echo "Error: Missing required fields.";
}
?>