<?php

    if (isset($_POST['submit'])) {

        $rantname = $_POST['rantname'];

        $rantmailFrom = $_POST['rantmail'];
        
        $rantdateofbirth = $_POST['rantdateofbirth'];
        
        $rantplaceofbirth = $_POST['rantplaceofbirth'];
        
        $ranttimeofbirth = $_POST['ranttimeofbirth'];
        
        $rantphonenumber = $_POST['rantphonenumber'];
        
        $rantsubject = $_POST['rantsubject'];
        
        if (isset($_FILES) && (bool) $_FILES) {
            
            $allowedExtensions = array("pdf", "doc", "docx", "gif", "jpeg", "jpg", "png", "txt");
            
            $files = array();
            
            foreach ($_FILES as $name => $file) {
                
                $file_name = $file['name'];
                
                $temp_name = $file['tmp_name'];
                
                $file_type = $file['type'];
                
                $path_parts = pathinfo($file_name);
                
                $ext = $path_parts['extension'];
                
                if (!in_array($ext, $allowedExtensions)) {
                    
                    die("File $file_name has the extension $ext which is not allowed");
                    
                }
                
                array_push($files, $file);
                
            }
            
            $to = $_POST['maxcherkasskikh@gmail.com'];
            
            $from = $_POST['rantmail'];
            
            $subject = $_POST['rantsubject'];
            
            $message = $_POST['rantmessage'];
            
            $headers = "From: $from";
            
            $semi_rand = md5(time());
            
            $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
            
            $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\" {$mime_boundary}\"";
                
            $message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n";
                
            $message .= "--{$mime_boundary}\n";
            
            for ($x = 0, $x < count($files); $x++) {
                
                $file = fopen($files[$x]['tmp_name'], "rb");
                
                $data = fread($file, filesize($files[$x]['tmp_name']));
                
                fclose($file);
                
                $data = chunk_split(base64_encode($data));
                
                $name = $files[$x]['name'];
                
                $message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$name\"\n" . "Content-Disposition: attachment;\n" . " filename=\"$name\"\n" . "Content-Transfer_encoding: base64\n\n" . $data . "\n\n";
                    
                $message .= "--{$mime_boundary}\n";
                
            }
            
            $ok = mail($to, $subject, $message, $headers);
            
            if ($ok) {
                
                echo "<p>Mail sent to $to!</p>";
                
            } else {
                
                echo "<p>Mail could not be sent!</p>";
                
            }
            
        }

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