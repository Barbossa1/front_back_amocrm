<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <title>Test</title>
</head>
<body>
<div class="container">
    <button class="popup-open" onclick="openPopup()">Кликни</button>

    <div class="popup-bg">
        <div class="popup">
            <img src="img/close.png" alt="закрыть" class="popup-close" onclick="closePopup()">
            <div class="popup-title">Получите набор файлов<br>для руководителя:</div>
            <div class="popup-left-side">
                <img class="popup-icons" src="img/icons.png" alt="иконки">
                <img class="popup-image" src="img/image.png" alt="картинка">
            </div>
            <div class="popup-right-side">
                <form name="form">
                    <div class="popup-alert" id="popup-alert"><span></span></div>
                    <div class="popup-input-email">
                        <div class="label">Введите Email для получения файлов:</div>
                        <input type="email" class="popup-field" name="email" id="email" placeholder="E-mail" required/>
                    </div>
                    <div class="popup-input-phone">
                        <div class="label">Введите телефон для подтверждения доступа:</div>
                        <input type="text" class="popup-field" name="phone" id="phone" placeholder="+7 (000) 000-00-00" required/>
                    </div>
                    <div class="popup-btn">
                        <button class="popup-btn-send" type="submit">
                            <span class="popup-btn-text">Скачать файлы</span>
                            <img class="popup-btn-sign" src="img/sign.png" alt="значок">
                        </button>
                        <div class="popup-btn-info">
                            <span style="padding-right: 20px;">PDF 4,7 MB</span>
                            <span style="padding-right: 20px;">DOC 0,8 MB</span>
                            <span>XLS 1,2 MB</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script src="js/script.js"></script>
</body>
</html>