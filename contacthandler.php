<?php

    if (isset($_POST['submit'])) {

        $rantname = $_POST['rantname'];

        $rantmailFrom = $_POST['rantmail'];
        
        $rantphonenumber = $_POST['rantphonenumber'];
        
        $rantsubject = $_POST['rantsubject'];

        $rantmessage = $_POST['rantmessage'];

        $mailTo = "maxcherkasskikh@gmail.com";

        $headers = "From: ".$mailFrom;

        $ranttxt = "You received an email from ".$rantname.".\n\n".$rantmessage;

        mail($mailTo, $rantsubject, $ranttxt, $headers);

        header("Location: index.html?mailsend");

    }

    if (isset($_POST['submit'])) {

        $name = $_POST['name'];

        $subject = $_POST['subject'];

        $mailFrom = $_POST['mail'];

        $message = $_POST['message'];

        $mailTo = "maxcherkasskikh@gmail.com";

        $headers = "From: ".$mailFrom;

        $txt = "You received an e-mail from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);

        header("Location: index.html?mailsend");

    }

?>