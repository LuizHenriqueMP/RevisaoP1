<?php
if(strtoupper($_POST['texto'])=="COM AMOR"){
    header("Location: sucesso.html");
}else{
    if($_POST['button']=="chamas"){
        header("Location: chamas.html");
    }else if($_POST['button']=="agua"){
        header("Location: agua.html");
    }else if($_POST['button']=="terra"){
        header("Location: terra.html");
}
}
?>