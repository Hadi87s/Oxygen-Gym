<?php
$name = 0;
$password = 0;
$confirmPassword = 0;
$email = 0;

if (isset($_POST['fullname']) && isset($_POST['password']) && isset($_POST['email']) &&
    !empty($_POST['fullname']) && !empty($_POST['password']) && !empty($_POST['email'])) {
    
    $name = $_POST['fullname'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm-password'];
    $email = $_POST['email'];

    if ($password != $confirmPassword) {
        // Show a popup using JavaScript
        echo "<script>
            alert('Passwords do not match! Please try again.');
            window.history.back(); // Go back to the previous form
        </script>";
        return;
    } else {
        try {
            $db = new mysqli("localhost", "root", "", "oxygen_shop");

            // Insert query
            $qs = "INSERT INTO `members` (`id`, `fullname`, `email`, `password`, `timestamp`) 
                VALUES (null, '$name', '$email', SHA1('$password'), current_timestamp());";
            
            // Execute the query
            if ($db->query($qs) === TRUE) {
                $db->commit();
                $db->close();
                header("location:../SignIn/signin.html");
                exit();
            } else {
                throw new Exception($db->error);
            }
        } catch (Exception $e) {
            if (strpos($e->getMessage(), "Duplicate entry") !== false) {
                // Show a popup for duplicate email
                echo "<script>
                    alert('The email address is already registered. Please use a different email.');
                    window.history.back(); // Go back to the registration form
                </script>";
            } else {
                // For other errors, show a generic error popup
                echo "<script>
                    alert('An error occurred while registering. Please try again later.');
                    window.history.back(); // Go back to the registration form
                </script>";
            }
        }
    }
}
?>
