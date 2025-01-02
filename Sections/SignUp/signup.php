<?php
    $name = 0;
    $password = 0;
    $confirmPassword = 0;
    $email = 0;
    if(isset($_POST['fullname']) and isset($_POST['password']) and isset($_POST['email']) and !empty($_POST['fullname']) and!empty($_POST['password']) and !empty($_POST['email'])){
            $name = $_POST['fullname'];
            $password = $_POST['password'];
            $confirmPassword = $_POST['confirm-password'];
            $email = $_POST['email'];
        
        if($password != $confirmPassword){
            echo "Passwords do not match";
            return;
        } else {
                try {
                        $db = new mysqli("localhost","root","","oxygen_shop");
                        $qs = "INSERT INTO `members` (`id`, `fullname`, `email`, `password`, `timestamp`) VALUES (null, '$name', '$email', SHA1('$password'), current_timestamp());";
                        $db -> query($qs);
                        $db -> commit();
                        $db -> close();
                        header("location:../SignIn/signin.html");
                } catch(Exception $e){
                        echo $e -> getMessage();    
                    }
        }
    }
?>