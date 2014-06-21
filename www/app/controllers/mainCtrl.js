function mainCtrl($scope, $location) {

    $scope.redirect = function(path) {
        $location.path(path);
    }

    $scope.changeColor = function(color) {
        $(".partialBody").css("background-color", "blue");
    }

    $scope.redirect = function(path) {
        $location.path(path);
    }

    $scope.showText = function(text) {
        $("#showText").html(text);
    }

    $scope.enTest = "Heisann du!";

    $scope.text = "myText"   //ng-model object

    $scope.translate = function(text) {
        var translatedText = "";
        for (i=0; i<text.length; i++) {
            switch(text[i].toLowerCase()) {
                case "a": translatedText+="*-;"; break;
                case "b": translatedText+="-***;"; break;
                case "c": translatedText+="-*-*;"; break;
                case "d": translatedText+="-**;"; break;
                case "e": translatedText+="*;"; break;
                case "f": translatedText+="**-*;"; break;
                case "g": translatedText+="--*;"; break;
                case "h": translatedText+="****;"; break;
                case "i": translatedText+="**;"; break;
                case "j": translatedText+="*---;"; break;
                case "k": translatedText+="-*-;"; break;
                case "l": translatedText+="*-**;"; break;
                case "m": translatedText+="--;"; break;
                case "n": translatedText+="-*;"; break;
                case "o": translatedText+="---;"; break;
                case "p": translatedText+="*--*;"; break;
                case "q": translatedText+="--*-:"; break;
                case "r": translatedText+="*-*;"; break;
                case "s": translatedText+="***;"; break;
                case "t": translatedText+="-;"; break;
                case "u": translatedText+="**-;"; break;
                case "v": translatedText+="***-;"; break;
                case "w": translatedText+="*--;"; break;
                case "x": translatedText+="-**-;"; break;
                case "y": translatedText+="-*--;"; break;
                case "z": translatedText+="--**;"; break;
                case " ": translatedText+="__"; break;  //two flat lines signify space between words
                case "1": translatedText+="*----;"; break;
                case "2": translatedText+="**---;"; break;
                case "3": translatedText+="***--;"; break;
                case "4": translatedText+="****-;"; break;
                case "5": translatedText+="*****;"; break;
                case "6": translatedText+="-****;"; break;
                case "7": translatedText+="--***;"; break;
                case "8": translatedText+="---**;"; break;
                case "9": translatedText+="----*;"; break;
                case "0": translatedText+="-----;"; break;
                default: translatedText+="?"; break;
            }
        }
        $("#showText").html(translatedText);
        playSound(translatedText);
    }

    function playSound(translatedText) {
        for (var i=0; i<translatedText.length; i++) {
                    (function(i) {
                    setTimeout(function() {
                        playAudio(translatedText[i]);
                    }, i*400);
                }(i));
        }

        /*$(".inputBox").css("background", "red");
        playAudio("audio/dot.mp3");
        setTimeout(function () {
            $(".inputBox").css("background", "cornflowerblue");
        }, 700);*/
    }



    function playAudio(char) {
        if (char=="*") {
            var audio = new Media("audio/dash.mp3",
                function () {
                },
                function (err) {
                }
            );
            audio.play();
            setTimeout(function() {
                audio.stop();
            }, 150);
        }
        else if (char=="-") {
            var audio = new Media("audio/dash.mp3",
                function () {
                },
                function (err) {
                }
            );
            audio.play();
            setTimeout(function() {
                audio.stop();
            }, 450);
        }
        else if (char == ";") {
            var audio = new Media("audio/silence.mp3",
                function () {
                },
                function (err) {
                }
            );
            audio.play();
            setTimeout(function() {
                audio.stop();
            }, 300);
        }
        else {
            var audio = new Media("audio/silence.mp3",
                function () {
                },
                function (err) {
                }
            );
            audio.play();
            setTimeout(function() {
                audio.stop();
            }, 900);
        }
    }

}