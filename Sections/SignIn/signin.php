<?php
session_start(); // Start a session to manage user login state

if (isset($_POST['email']) && isset($_POST['password']) && !empty($_POST['email']) && !empty($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Database Connection
    try {
        $db = new mysqli("localhost", "root", "", "oxygen_shop");

        // Check if the connection was successful
        if ($db->connect_error) {
            throw new Exception("Connection failed: " . $db->connect_error);
        }

        // Prepare SQL statement to fetch the member by email
        $stmt = $db->prepare("SELECT id, fullname, email, password FROM members WHERE email = ?");
        if (!$stmt) {
            throw new Exception("Prepare failed: " . $db->error);
        }

        // Bind the email parameter
        $stmt->bind_param("s", $email);

        // Execute the query
        $stmt->execute();

        // Store the result
        $stmt->store_result();

        // Check if a member with the given email exists
        if ($stmt->num_rows > 0) {
            // Bind the result to variables
            $stmt->bind_result($id, $fullname, $dbEmail, $dbPassword);

            // Fetch the result
            $stmt->fetch();

            // Verify the password using SHA1
            if (sha1($password) === $dbPassword) {
                // Password is correct, log the user in
                $_SESSION['user_id'] = $id;
                $_SESSION['fullname'] = $fullname;
                $_SESSION['email'] = $dbEmail;

                // Check if the user is the admin
                if ($dbEmail === 'admin@oxygen.com' && $password === 'admin@oxygen2') {
                    // Redirect to the admin dashboard
                    // Replace 'dashboard.php' with the actual link to your admin dashboard
                    header("Location: ../Dashboard/control-center.html");
                    exit();
                } else {
                    // Redirect regular users to the home page
                    header("Location: ../../index.html");
                    exit();
                }
            } else {
                // Password is incorrect
                echo "Invalid email or password.";
            }
        } else {
            // No member found with the given email
            echo "Invalid email or password.";
        }

        // Close the statement and connection
        $stmt->close();
        $db->close();
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    echo "Please fill in all fields.";
}
?>