<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>
    <link rel="stylesheet" href="../../styles/variables.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .error-message {
            color: #f00;
            font-size: 20px;
            margin-top: 20px;
        }

        .loginLink{
            all: unset;
            background-color: var(--crimson-color);
            padding: 1rem 2rem;
            border-radius: 16px;
            color: var(--secondary-color);
            transition: 200ms ease-out;
            cursor: pointer;
        }
        .loginLink:hover {
            background-color: var(--secondary-color);
            color: var(--crimson-color);
        }
        

    </style>
</head>
<body>
    <div class="error-container">
        <img src="../../SVGs/error.svg" alt="Error Icon" width="650">
        <p class="error-message">
            <?php echo isset($_GET['message']) ? htmlspecialchars($_GET['message']) : "An unknown error occurred."; ?>
        </p>
        <a class="loginLink" href="./signin.html">Back to Login</a>
    </div>
</body>
</html>
