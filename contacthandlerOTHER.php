<?php

    if (isset($_POST['rantsubmit'])) {

        $rantname = $_POST['rantname'];

        $rantmailFrom = $_POST['rantmail'];
        
        $rantphonenumber = $_POST['rantphonenumber'];
        
        $rantsubject = $_POST['rantsubject'];

        $rantmessage = $_POST['rantmessage'];

        $rantMailTo = "sashawhite@brain-fucker.com";

        $rantHeaders = "From: ".$mailFrom;

        $rantTxt = "You have received a private question from ".$rantname.".\n\n".$rantmessage;

        mail($rantMailTo, $rantsubject, $rantTxt, $rantHeaders);

        header("Location: index.html?mailsend");

    }

?>