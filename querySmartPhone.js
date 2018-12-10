//------------------------ DIAMOND ROTATION FUNCTION ----------------------->

window.addEventListener("DOMContentLoaded", rotateDiamond, true);
    
function rotateDiamond() {
        
    document.getElementById("slidepicdiv1").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv1").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv1").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv1").style.transitionDelay = "2s";
        
    document.getElementById("slidepicdiv2").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv2").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv2").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv2").style.transitionDelay = "2.5s";
        
    document.getElementById("slidepicdiv3").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv3").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv3").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv3").style.transitionDelay = "1.5s";
        
    document.getElementById("slidepicdiv4").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv4").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv4").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv4").style.transitionDelay = "3s";
        
    document.getElementById("slidepicdiv5").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv5").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv5").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv5").style.transitionDelay = "2s";
        
    document.getElementById("slidepicdiv6").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv6").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv6").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv6").style.transitionDelay = "1s";
        
    document.getElementById("slidepicdiv7").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv7").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv7").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv7").style.transitionDelay = "2.5s";
        
    document.getElementById("slidepicdiv8").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv8").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv8").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv8").style.transitionDelay = "1.5s";
        
    document.getElementById("slidepicdiv9").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv9").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv9").style.transition = "2.5s";
    
                document.getElementById("slidepicdiv9").style.transitionDelay = "2s";
        
}

if ( $(window).width() <= 375) {  

    //-------------- COLLAGE PARALLAX VERTICAL SCROLL FUNCTION ------------->

    $(window).scroll(function() {

        var restPosition = window.scrollY;
        
        console.log(restPosition);

        if (restPosition >= 800 && restPosition < 840) {

            document.getElementById("colT1").style.top = "35.5%";

            document.getElementById("colT2").style.top = "58.1%";

            document.getElementById("colT3").style.top = "69.5%";

            document.getElementById("colT4").style.top = "-2.3%";

            document.getElementById("colT5").style.top = "6.7%";

            document.getElementById("colT6").style.top = "16.7%";

            document.getElementById("colT7").style.top = "19.7%";

            document.getElementById("colT8").style.top = "42.5%";

            document.getElementById("colT9").style.top = "65.6%";

            document.getElementById("colT10").style.top = "8.3%";

            document.getElementById("colT11").style.top = "56.4%";

            document.getElementById("colT12").style.top = "62.8%";

        } else if (restPosition < 800) {

            document.getElementById("colT1").style.top = "36%";

            document.getElementById("colT2").style.top = "59.1%";

            document.getElementById("colT3").style.top = "71%";

            document.getElementById("colT4").style.top = "-4.3%";

            document.getElementById("colT5").style.top = "5.2%";

            document.getElementById("colT6").style.top = "15.7%";

            document.getElementById("colT7").style.top = "19.2%";

            document.getElementById("colT8").style.top = "43.3%";

            document.getElementById("colT9").style.top = "66.9%";

            document.getElementById("colT10").style.top = "7%";

            document.getElementById("colT11").style.top = "57.8%";

            document.getElementById("colT12").style.top = "64.6%";

        }

        //--- IF STATEMENT 2 --->

        if (restPosition >= 840 && restPosition < 880) {

            document.getElementById("colT1").style.top = "35%";

            document.getElementById("colT2").style.top = "57.1%";

            document.getElementById("colT3").style.top = "68%";

            document.getElementById("colT4").style.top = "-0.3%";

            document.getElementById("colT5").style.top = "8.2%";

            document.getElementById("colT6").style.top = "17.7%";

            document.getElementById("colT7").style.top = "20.2%";

            document.getElementById("colT8").style.top = "41.7%";

            document.getElementById("colT9").style.top = "64.3%";

            document.getElementById("colT10").style.top = "9.6%";

            document.getElementById("colT11").style.top = "55%";

            document.getElementById("colT12").style.top = "61%";

        } else if (restPosition < 840 && restPosition >= 800) {

            document.getElementById("colT1").style.top = "35.5%";

            document.getElementById("colT2").style.top = "58.1%";

            document.getElementById("colT3").style.top = "69.5%";

            document.getElementById("colT4").style.top = "-2.3%";

            document.getElementById("colT5").style.top = "6.7%";

            document.getElementById("colT6").style.top = "16.7%";

            document.getElementById("colT7").style.top = "19.7%";

            document.getElementById("colT8").style.top = "42.5%";

            document.getElementById("colT9").style.top = "65.6%";

            document.getElementById("colT10").style.top = "8.3%";

            document.getElementById("colT11").style.top = "56.4%";

            document.getElementById("colT12").style.top = "62.8%";

        }

        //--- IF STATEMENT 3 --->

        if (restPosition >= 880 && restPosition < 920) {

            document.getElementById("colT1").style.top = "34.5%";

            document.getElementById("colT2").style.top = "56.1%";

            document.getElementById("colT3").style.top = "66.5%";

            document.getElementById("colT4").style.top = "1.7%";

            document.getElementById("colT5").style.top = "9.7%";

            document.getElementById("colT6").style.top = "18.7%";

            document.getElementById("colT7").style.top = "20.7%";

            document.getElementById("colT8").style.top = "40.9%";

            document.getElementById("colT9").style.top = "63%";

            document.getElementById("colT10").style.top = "10.9%";

            document.getElementById("colT11").style.top = "53.6%";

            document.getElementById("colT12").style.top = "59.2%";

        } else if (restPosition < 880 && restPosition >= 840) {

            document.getElementById("colT1").style.top = "35%";

            document.getElementById("colT2").style.top = "57.1%";

            document.getElementById("colT3").style.top = "68%";

            document.getElementById("colT4").style.top = "-0.3%";

            document.getElementById("colT5").style.top = "8.2%";

            document.getElementById("colT6").style.top = "17.7%";

            document.getElementById("colT7").style.top = "20.2%";

            document.getElementById("colT8").style.top = "41.7%";

            document.getElementById("colT9").style.top = "64.3%";

            document.getElementById("colT10").style.top = "9.6%";

            document.getElementById("colT11").style.top = "55%";

            document.getElementById("colT12").style.top = "61%";

        }

        //--- IF STATEMENT 4 --->

        if (restPosition >= 920 && restPosition < 960) {

            document.getElementById("colT1").style.top = "34%";

            document.getElementById("colT2").style.top = "55.1%";

            document.getElementById("colT3").style.top = "65%";

            document.getElementById("colT4").style.top = "3.7%";

            document.getElementById("colT5").style.top = "11.2%";

            document.getElementById("colT6").style.top = "19.7%";

            document.getElementById("colT7").style.top = "21.2%";

            document.getElementById("colT8").style.top = "40.1%";

            document.getElementById("colT9").style.top = "61.7%";

            document.getElementById("colT10").style.top = "12.2%";

            document.getElementById("colT11").style.top = "52.2%";

            document.getElementById("colT12").style.top = "57.4%";

        } else if (restPosition < 920 && restPosition >= 880) {

            document.getElementById("colT1").style.top = "34.5%";

            document.getElementById("colT2").style.top = "56.1%";

            document.getElementById("colT3").style.top = "66.5%";

            document.getElementById("colT4").style.top = "1.7%";

            document.getElementById("colT5").style.top = "9.7%";

            document.getElementById("colT6").style.top = "18.7%";

            document.getElementById("colT7").style.top = "20.7%";

            document.getElementById("colT8").style.top = "40.9%";

            document.getElementById("colT9").style.top = "63%";

            document.getElementById("colT10").style.top = "10.9%";

            document.getElementById("colT11").style.top = "53.6%";

            document.getElementById("colT12").style.top = "59.2%";

        }

        //--- IF STATEMENT 5 --->

        if (restPosition >= 960 && restPosition < 1000) {

            document.getElementById("colT1").style.top = "33.5%";

            document.getElementById("colT2").style.top = "54.1%";

            document.getElementById("colT3").style.top = "63.5%";

            document.getElementById("colT4").style.top = "5.7%";

            document.getElementById("colT5").style.top = "12.7%";

            document.getElementById("colT6").style.top = "20.7%";

            document.getElementById("colT7").style.top = "21.7%";

            document.getElementById("colT8").style.top = "39.3%";

            document.getElementById("colT9").style.top = "60.4%";

            document.getElementById("colT10").style.top = "13.5%";

            document.getElementById("colT11").style.top = "50.8%";

            document.getElementById("colT12").style.top = "55.6%";

        } else if (restPosition < 960 && restPosition >= 920) {

            document.getElementById("colT1").style.top = "34%";

            document.getElementById("colT2").style.top = "55.1%";

            document.getElementById("colT3").style.top = "65%";

            document.getElementById("colT4").style.top = "3.7%";

            document.getElementById("colT5").style.top = "11.2%";

            document.getElementById("colT6").style.top = "19.7%";

            document.getElementById("colT7").style.top = "21.2%";

            document.getElementById("colT8").style.top = "40.1%";

            document.getElementById("colT9").style.top = "61.7%";

            document.getElementById("colT10").style.top = "12.2%";

            document.getElementById("colT11").style.top = "52.2%";

            document.getElementById("colT12").style.top = "57.4%";

        }

        //--- IF STATEMENT 6 --->

        if (restPosition >= 1000 && restPosition < 1040) {

            document.getElementById("colT1").style.top = "33%";

            document.getElementById("colT2").style.top = "53.1%";

            document.getElementById("colT3").style.top = "62%";

            document.getElementById("colT4").style.top = "7.7%";

            document.getElementById("colT5").style.top = "14.2%";

            document.getElementById("colT6").style.top = "21.7%";

            document.getElementById("colT7").style.top = "22.2%";

            document.getElementById("colT8").style.top = "38.5%";

            document.getElementById("colT9").style.top = "59.1%";

            document.getElementById("colT10").style.top = "14.8%";

            document.getElementById("colT11").style.top = "49.4%";

            document.getElementById("colT12").style.top = "53.8%";

        } else if (restPosition < 1000 && restPosition >= 960) {

            document.getElementById("colT1").style.top = "33.5%";

            document.getElementById("colT2").style.top = "54.1%";

            document.getElementById("colT3").style.top = "63.5%";

            document.getElementById("colT4").style.top = "5.7%";

            document.getElementById("colT5").style.top = "12.7%";

            document.getElementById("colT6").style.top = "20.7%";

            document.getElementById("colT7").style.top = "21.7%";

            document.getElementById("colT8").style.top = "39.3%";

            document.getElementById("colT9").style.top = "60.4%";

            document.getElementById("colT10").style.top = "13.5%";

            document.getElementById("colT11").style.top = "50.8%";

            document.getElementById("colT12").style.top = "55.6%";

        }

        //--- IF STATEMENT 7 --->

        if (restPosition >= 1040 && restPosition < 1080) {

            document.getElementById("colT1").style.top = "32.5%";

            document.getElementById("colT2").style.top = "52.1%";

            document.getElementById("colT3").style.top = "60.5%";

            document.getElementById("colT4").style.top = "9.7%";

            document.getElementById("colT5").style.top = "15.7%";

            document.getElementById("colT6").style.top = "22.7%";

            document.getElementById("colT7").style.top = "22.7%";

            document.getElementById("colT8").style.top = "37.7%";

            document.getElementById("colT9").style.top = "57.8%";

            document.getElementById("colT10").style.top = "16.1%";

            document.getElementById("colT11").style.top = "48%";

            document.getElementById("colT12").style.top = "52%";

        } else if (restPosition < 1040 && restPosition >= 1000) {

            document.getElementById("colT1").style.top = "33%";

            document.getElementById("colT2").style.top = "53.1%";

            document.getElementById("colT3").style.top = "62%";

            document.getElementById("colT4").style.top = "7.7%";

            document.getElementById("colT5").style.top = "14.2%";

            document.getElementById("colT6").style.top = "21.7%";

            document.getElementById("colT7").style.top = "22.2%";

            document.getElementById("colT8").style.top = "38.5%";

            document.getElementById("colT9").style.top = "59.1%";

            document.getElementById("colT10").style.top = "14.8%";

            document.getElementById("colT11").style.top = "49.4%";

            document.getElementById("colT12").style.top = "53.8%";

        }

        //--- IF STATEMENT 8 --->

        if (restPosition >= 1080 && restPosition < 1120) {

            document.getElementById("colT1").style.top = "32%";

            document.getElementById("colT2").style.top = "51.1%";

            document.getElementById("colT3").style.top = "59%";

            document.getElementById("colT4").style.top = "11.7%";

            document.getElementById("colT5").style.top = "17.2%";

            document.getElementById("colT6").style.top = "23.7%";

            document.getElementById("colT7").style.top = "23.2%";

            document.getElementById("colT8").style.top = "36.9%";

            document.getElementById("colT9").style.top = "56.5%";

            document.getElementById("colT10").style.top = "17.4%";

            document.getElementById("colT11").style.top = "46.6%";

            document.getElementById("colT12").style.top = "50.2%";

        } else if (restPosition < 1080 && restPosition >= 1040) {

            document.getElementById("colT1").style.top = "32.5%";

            document.getElementById("colT2").style.top = "52.1%";

            document.getElementById("colT3").style.top = "60.5%";

            document.getElementById("colT4").style.top = "9.7%";

            document.getElementById("colT5").style.top = "15.7%";

            document.getElementById("colT6").style.top = "22.7%";

            document.getElementById("colT7").style.top = "22.7%";

            document.getElementById("colT8").style.top = "37.7%";

            document.getElementById("colT9").style.top = "57.8%";

            document.getElementById("colT10").style.top = "16.1%";

            document.getElementById("colT11").style.top = "48%";

            document.getElementById("colT12").style.top = "52%";

        }

        //--- IF STATEMENT 9 --->

        if (restPosition >= 1120 && restPosition < 1160) {

            document.getElementById("colT1").style.top = "31.5%";

            document.getElementById("colT2").style.top = "50.1%";

            document.getElementById("colT3").style.top = "57.5%";

            document.getElementById("colT4").style.top = "13.7%";

            document.getElementById("colT5").style.top = "18.7%";

            document.getElementById("colT6").style.top = "24.7%";

            document.getElementById("colT7").style.top = "23.7%";

            document.getElementById("colT8").style.top = "36.1%";

            document.getElementById("colT9").style.top = "55.2%";

            document.getElementById("colT10").style.top = "18.7%";

            document.getElementById("colT11").style.top = "45.2%";

            document.getElementById("colT12").style.top = "48.4%";

        } else if (restPosition < 1120 && restPosition >= 1080) {

            document.getElementById("colT1").style.top = "32%";

            document.getElementById("colT2").style.top = "51.1%";

            document.getElementById("colT3").style.top = "59%";

            document.getElementById("colT4").style.top = "11.7%";

            document.getElementById("colT5").style.top = "17.2%";

            document.getElementById("colT6").style.top = "23.7%";

            document.getElementById("colT7").style.top = "23.2%";

            document.getElementById("colT8").style.top = "36.9%";

            document.getElementById("colT9").style.top = "56.5%";

            document.getElementById("colT10").style.top = "17.4%";

            document.getElementById("colT11").style.top = "46.6%";

            document.getElementById("colT12").style.top = "50.2%";

        }

        //--- IF STATEMENT 10 --->

        if (restPosition >= 1160 && restPosition < 1200) {

            document.getElementById("colT1").style.top = "31%";

            document.getElementById("colT2").style.top = "49.1%";

            document.getElementById("colT3").style.top = "56%";

            document.getElementById("colT4").style.top = "15.7%";

            document.getElementById("colT5").style.top = "20.2%";

            document.getElementById("colT6").style.top = "25.7%";

            document.getElementById("colT7").style.top = "24.2%";

            document.getElementById("colT8").style.top = "35.3%";

            document.getElementById("colT9").style.top = "53.9%";

            document.getElementById("colT10").style.top = "20%";

            document.getElementById("colT11").style.top = "43.8%";

            document.getElementById("colT12").style.top = "46.6%";

        } else if (restPosition < 1160 && restPosition >= 1120) {

            document.getElementById("colT1").style.top = "31.5%";

            document.getElementById("colT2").style.top = "50.1%";

            document.getElementById("colT3").style.top = "57.5%";

            document.getElementById("colT4").style.top = "13.7%";

            document.getElementById("colT5").style.top = "18.7%";

            document.getElementById("colT6").style.top = "24.7%";

            document.getElementById("colT7").style.top = "23.7%";

            document.getElementById("colT8").style.top = "36.1%";

            document.getElementById("colT9").style.top = "55.2%";

            document.getElementById("colT10").style.top = "18.7%";

            document.getElementById("colT11").style.top = "45.2%";

            document.getElementById("colT12").style.top = "48.4%";

        }

        //--- IF STATEMENT 11 --->

        if (restPosition >= 1200 && restPosition < 1240) {

            document.getElementById("colT1").style.top = "30.5%";

            document.getElementById("colT2").style.top = "48.1%";

            document.getElementById("colT3").style.top = "54.5%";

            document.getElementById("colT4").style.top = "17.7%";

            document.getElementById("colT5").style.top = "21.7%";

            document.getElementById("colT6").style.top = "26.7%";

            document.getElementById("colT7").style.top = "24.7%";

            document.getElementById("colT8").style.top = "34.5%";

            document.getElementById("colT9").style.top = "52.6%";

            document.getElementById("colT10").style.top = "21.3%";

            document.getElementById("colT11").style.top = "42.4%";

            document.getElementById("colT12").style.top = "44.8%";

        } else if (restPosition < 1200 && restPosition >= 1160) {

            document.getElementById("colT1").style.top = "31%";

            document.getElementById("colT2").style.top = "49.1%";

            document.getElementById("colT3").style.top = "56%";

            document.getElementById("colT4").style.top = "15.7%";

            document.getElementById("colT5").style.top = "20.2%";

            document.getElementById("colT6").style.top = "25.7%";

            document.getElementById("colT7").style.top = "24.2%";

            document.getElementById("colT8").style.top = "35.3%";

            document.getElementById("colT9").style.top = "53.9%";

            document.getElementById("colT10").style.top = "20%";

            document.getElementById("colT11").style.top = "43.8%";

            document.getElementById("colT12").style.top = "46.6%";

        }

        //--- IF STATEMENT 12 --->

        if (restPosition >= 1240) {

            document.getElementById("colT1").style.top = "30%";

            document.getElementById("colT2").style.top = "47.1%";

            document.getElementById("colT3").style.top = "53%";

            document.getElementById("colT4").style.top = "19.7%";

            document.getElementById("colT5").style.top = "23.2%";

            document.getElementById("colT6").style.top = "27.7%";

            document.getElementById("colT7").style.top = "25.2%";

            document.getElementById("colT8").style.top = "33.7%";

            document.getElementById("colT9").style.top = "51.3%";

            document.getElementById("colT10").style.top = "22.6%";

            document.getElementById("colT11").style.top = "40.92%";

            document.getElementById("colT12").style.top = "43%";

        } else if (restPosition < 1240 && restPosition >= 1200) {

            document.getElementById("colT1").style.top = "30.5%";

            document.getElementById("colT2").style.top = "48.1%";

            document.getElementById("colT3").style.top = "54.5%";

            document.getElementById("colT4").style.top = "17.7%";

            document.getElementById("colT5").style.top = "21.7%";

            document.getElementById("colT6").style.top = "26.7%";

            document.getElementById("colT7").style.top = "24.7%";

            document.getElementById("colT8").style.top = "34.5%";

            document.getElementById("colT9").style.top = "52.6%";

            document.getElementById("colT10").style.top = "21.3%";

            document.getElementById("colT11").style.top = "42.4%";

            document.getElementById("colT12").style.top = "44.8%";

        }

    });

    //-------------- COLLAGE PARALLAX HORIZONTAL SCROLL FUNCTION ------------->

    $(window).scroll(function() {

        var restPosition = window.scrollY;

        if (restPosition >= 800 && restPosition < 840) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "15%";

            document.getElementById("colT6").style.left = "34%";

            document.getElementById("colT10").style.left = "4%";

            document.getElementById("colT11").style.left = "6%";

            document.getElementById("colT12").style.left = "26%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "49.5%";

            document.getElementById("colT3").style.left = "64%";

            document.getElementById("colT5").style.left = "51%";

            document.getElementById("colT7").style.left = "76%";

            document.getElementById("colT8").style.left = "73%";

            document.getElementById("colT9").style.left = "84%";

        } else if (restPosition < 800) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "13%";

            document.getElementById("colT6").style.left = "33%";

            document.getElementById("colT10").style.left = "2%";

            document.getElementById("colT11").style.left = "4%";

            document.getElementById("colT12").style.left = "25%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "50%";

            document.getElementById("colT3").style.left = "65%";

            document.getElementById("colT5").style.left = "52%";

            document.getElementById("colT7").style.left = "77%";

            document.getElementById("colT8").style.left = "74%";

            document.getElementById("colT9").style.left = "86%";

        }

        //--- IF STATEMENT 2 --->

        if (restPosition >= 840 && restPosition < 880) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "17%";

            document.getElementById("colT6").style.left = "35%";

            document.getElementById("colT10").style.left = "6%";

            document.getElementById("colT11").style.left = "8%";

            document.getElementById("colT12").style.left = "27%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "49%";

            document.getElementById("colT3").style.left = "63%";

            document.getElementById("colT5").style.left = "50%";

            document.getElementById("colT7").style.left = "75%";

            document.getElementById("colT8").style.left = "72%";

            document.getElementById("colT9").style.left = "82%";

        } else if (restPosition < 840 && restPosition >= 800) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "15%";

            document.getElementById("colT6").style.left = "34%";

            document.getElementById("colT10").style.left = "4%";

            document.getElementById("colT11").style.left = "6%";

            document.getElementById("colT12").style.left = "26%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "49.5%";

            document.getElementById("colT3").style.left = "64%";

            document.getElementById("colT5").style.left = "51%";

            document.getElementById("colT7").style.left = "76%";

            document.getElementById("colT8").style.left = "73%";

            document.getElementById("colT9").style.left = "84%";

        }

        //--- IF STATEMENT 3 --->

        if (restPosition >= 880 && restPosition < 920) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "19%";

            document.getElementById("colT6").style.left = "36%";

            document.getElementById("colT10").style.left = "8%";

            document.getElementById("colT11").style.left = "10%";

            document.getElementById("colT12").style.left = "28%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "48.5%";

            document.getElementById("colT3").style.left = "62%";

            document.getElementById("colT5").style.left = "49%";

            document.getElementById("colT7").style.left = "73%";

            document.getElementById("colT8").style.left = "71%";

            document.getElementById("colT9").style.left = "80%";

        } else if (restPosition < 880 && restPosition >= 840) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "17%";

            document.getElementById("colT6").style.left = "35%";

            document.getElementById("colT10").style.left = "6%";

            document.getElementById("colT11").style.left = "8%";

            document.getElementById("colT12").style.left = "27%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "49%";

            document.getElementById("colT3").style.left = "63%";

            document.getElementById("colT5").style.left = "50%";

            document.getElementById("colT7").style.left = "75%";

            document.getElementById("colT8").style.left = "72%";

            document.getElementById("colT9").style.left = "82%";

        }

        //--- IF STATEMENT 4 --->

        if (restPosition >= 920 && restPosition < 960) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "21%";

            document.getElementById("colT6").style.left = "37%";

            document.getElementById("colT10").style.left = "10%";

            document.getElementById("colT11").style.left = "12%";

            document.getElementById("colT12").style.left = "29%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "48%";

            document.getElementById("colT3").style.left = "61%";

            document.getElementById("colT5").style.left = "48%";

            document.getElementById("colT7").style.left = "71%";

            document.getElementById("colT8").style.left = "70%";

            document.getElementById("colT9").style.left = "78%";

        } else if (restPosition < 920 && restPosition >= 880) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "19%";

            document.getElementById("colT6").style.left = "36%";

            document.getElementById("colT10").style.left = "8%";

            document.getElementById("colT11").style.left = "10%";

            document.getElementById("colT12").style.left = "28%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "48.5%";

            document.getElementById("colT3").style.left = "62%";

            document.getElementById("colT5").style.left = "49%";

            document.getElementById("colT7").style.left = "73%";

            document.getElementById("colT8").style.left = "71%";

            document.getElementById("colT9").style.left = "80%";

        }

        //--- IF STATEMENT 5 --->

        if (restPosition >= 960 && restPosition < 1000) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "23%";

            document.getElementById("colT6").style.left = "38%";

            document.getElementById("colT10").style.left = "13%";

            document.getElementById("colT11").style.left = "14%";

            document.getElementById("colT12").style.left = "30%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "47.5%";

            document.getElementById("colT3").style.left = "60%";

            document.getElementById("colT5").style.left = "47%";

            document.getElementById("colT7").style.left = "69%";

            document.getElementById("colT8").style.left = "69%";

            document.getElementById("colT9").style.left = "76%";

        } else if (restPosition < 960 && restPosition >= 920) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "21%";

            document.getElementById("colT6").style.left = "37%";

            document.getElementById("colT10").style.left = "10%";

            document.getElementById("colT11").style.left = "12%";

            document.getElementById("colT12").style.left = "29%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "48%";

            document.getElementById("colT3").style.left = "61%";

            document.getElementById("colT5").style.left = "48%";

            document.getElementById("colT7").style.left = "71%";

            document.getElementById("colT8").style.left = "70%";

            document.getElementById("colT9").style.left = "78%";

        }

        //--- IF STATEMENT 6 --->

        if (restPosition >= 1000 && restPosition < 1040) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "25%";

            document.getElementById("colT6").style.left = "39%";

            document.getElementById("colT10").style.left = "16%";

            document.getElementById("colT11").style.left = "16%";

            document.getElementById("colT12").style.left = "31%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "47%";

            document.getElementById("colT3").style.left = "59%";

            document.getElementById("colT5").style.left = "46%";

            document.getElementById("colT7").style.left = "67%";

            document.getElementById("colT8").style.left = "68%";

            document.getElementById("colT9").style.left = "74%";

        } else if (restPosition < 1000 && restPosition >= 960) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "23%";

            document.getElementById("colT6").style.left = "38%";

            document.getElementById("colT10").style.left = "13%";

            document.getElementById("colT11").style.left = "14%";

            document.getElementById("colT12").style.left = "30%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "47.5%";

            document.getElementById("colT3").style.left = "60%";

            document.getElementById("colT5").style.left = "47%";

            document.getElementById("colT7").style.left = "69%";

            document.getElementById("colT8").style.left = "69%";

            document.getElementById("colT9").style.left = "76%";

        }

        //--- IF STATEMENT 7 --->

        if (restPosition >= 1040 && restPosition < 1080) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "27%";

            document.getElementById("colT6").style.left = "40%";

            document.getElementById("colT10").style.left = "18%";

            document.getElementById("colT11").style.left = "18%";

            document.getElementById("colT12").style.left = "32%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "46.5%";

            document.getElementById("colT3").style.left = "58%";

            document.getElementById("colT5").style.left = "45%";

            document.getElementById("colT7").style.left = "65%";

            document.getElementById("colT8").style.left = "67%";

            document.getElementById("colT9").style.left = "72%";

        } else if (restPosition < 1040 && restPosition >= 1000) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "25%";

            document.getElementById("colT6").style.left = "39%";

            document.getElementById("colT10").style.left = "16%";

            document.getElementById("colT11").style.left = "16%";

            document.getElementById("colT12").style.left = "31%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "47%";

            document.getElementById("colT3").style.left = "59%";

            document.getElementById("colT5").style.left = "46%";

            document.getElementById("colT7").style.left = "67%";

            document.getElementById("colT8").style.left = "68%";

            document.getElementById("colT9").style.left = "74%";

        }

        //--- IF STATEMENT 8 --->

        if (restPosition >= 1080 && restPosition < 1120) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "29%";

            document.getElementById("colT6").style.left = "41%";

            document.getElementById("colT10").style.left = "20%";

            document.getElementById("colT11").style.left = "20%";

            document.getElementById("colT12").style.left = "33%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "46%";

            document.getElementById("colT3").style.left = "57%";

            document.getElementById("colT5").style.left = "44%";

            document.getElementById("colT7").style.left = "63%";

            document.getElementById("colT8").style.left = "66%";

            document.getElementById("colT9").style.left = "70%";

        } else if (restPosition < 1080 && restPosition >= 1040) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "27%";

            document.getElementById("colT6").style.left = "40%";

            document.getElementById("colT10").style.left = "18%";

            document.getElementById("colT11").style.left = "18%";

            document.getElementById("colT12").style.left = "32%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "46.5%";

            document.getElementById("colT3").style.left = "58%";

            document.getElementById("colT5").style.left = "45%";

            document.getElementById("colT7").style.left = "65%";

            document.getElementById("colT8").style.left = "67%";

            document.getElementById("colT9").style.left = "72%";

        }

        //--- IF STATEMENT 9 --->

        if (restPosition >= 1120 && restPosition < 1160) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "30%";

            document.getElementById("colT6").style.left = "42%";

            document.getElementById("colT10").style.left = "23%";

            document.getElementById("colT11").style.left = "22%";

            document.getElementById("colT12").style.left = "34%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "45.5%";

            document.getElementById("colT3").style.left = "56%";

            document.getElementById("colT5").style.left = "43%";

            document.getElementById("colT7").style.left = "61%";

            document.getElementById("colT8").style.left = "65%";

            document.getElementById("colT9").style.left = "68%";

        } else if (restPosition < 1120&& restPosition >= 1080) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "29%";

            document.getElementById("colT6").style.left = "41%";

            document.getElementById("colT10").style.left = "20%";

            document.getElementById("colT11").style.left = "20%";

            document.getElementById("colT12").style.left = "33%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "46%";

            document.getElementById("colT3").style.left = "57%";

            document.getElementById("colT5").style.left = "44%";

            document.getElementById("colT7").style.left = "63%";

            document.getElementById("colT8").style.left = "66%";

            document.getElementById("colT9").style.left = "70%";

        }

        //--- IF STATEMENT 10 --->

        if (restPosition >= 1160 && restPosition < 1200) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "32%";

            document.getElementById("colT6").style.left = "43%";

            document.getElementById("colT10").style.left = "25%";

            document.getElementById("colT11").style.left = "24%";

            document.getElementById("colT12").style.left = "35%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "45%";

            document.getElementById("colT3").style.left = "55%";

            document.getElementById("colT5").style.left = "42%";

            document.getElementById("colT7").style.left = "59%";

            document.getElementById("colT8").style.left = "64%";

            document.getElementById("colT9").style.left = "66%";

        } else if (restPosition < 1160 && restPosition >= 1120) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "30%";

            document.getElementById("colT6").style.left = "42%";

            document.getElementById("colT10").style.left = "23%";

            document.getElementById("colT11").style.left = "22%";

            document.getElementById("colT12").style.left = "34%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "45.5%";

            document.getElementById("colT3").style.left = "56%";

            document.getElementById("colT5").style.left = "43%";

            document.getElementById("colT7").style.left = "61%";

            document.getElementById("colT8").style.left = "65%";

            document.getElementById("colT9").style.left = "68%";

        }

        //--- IF STATEMENT 11 --->

        if (restPosition >= 1200 && restPosition < 1240) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "34%";

            document.getElementById("colT6").style.left = "44%";

            document.getElementById("colT10").style.left = "27%";

            document.getElementById("colT11").style.left = "27%";

            document.getElementById("colT12").style.left = "36%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "44.5%";

            document.getElementById("colT3").style.left = "54%";

            document.getElementById("colT5").style.left = "41%";

            document.getElementById("colT7").style.left = "57%";

            document.getElementById("colT8").style.left = "63%";

            document.getElementById("colT9").style.left = "64%";

        } else if (restPosition < 1200 && restPosition >= 1160) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "32%";

            document.getElementById("colT6").style.left = "43%";

            document.getElementById("colT10").style.left = "25%";

            document.getElementById("colT11").style.left = "24%";

            document.getElementById("colT12").style.left = "35%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "45%";

            document.getElementById("colT3").style.left = "55%";

            document.getElementById("colT5").style.left = "42%";

            document.getElementById("colT7").style.left = "59%";

            document.getElementById("colT8").style.left = "64%";

            document.getElementById("colT9").style.left = "66%";

        }

        //--- IF STATEMENT 12 --->

        if (restPosition >= 1240) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "35%";

            document.getElementById("colT6").style.left = "45%";

            document.getElementById("colT10").style.left = "31%";

            document.getElementById("colT11").style.left = "31%";

            document.getElementById("colT12").style.left = "37%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "44%";

            document.getElementById("colT3").style.left = "53%";

            document.getElementById("colT5").style.left = "40%";

            document.getElementById("colT7").style.left = "55%";

            document.getElementById("colT8").style.left = "62%";

            document.getElementById("colT9").style.left = "62%";

        } else if (restPosition < 1240 && restPosition >= 1200) {

            //--- MOVE RIGHT --->

            document.getElementById("colT4").style.left = "34%";

            document.getElementById("colT6").style.left = "44%";

            document.getElementById("colT10").style.left = "27%";

            document.getElementById("colT11").style.left = "27%";

            document.getElementById("colT12").style.left = "36%";

            //--- MOVE LEFT --->

            document.getElementById("colT2").style.left = "44.5%";

            document.getElementById("colT3").style.left = "54%";

            document.getElementById("colT5").style.left = "41%";

            document.getElementById("colT7").style.left = "57%";

            document.getElementById("colT8").style.left = "63%";

            document.getElementById("colT9").style.left = "64%";

        }

    });

    //-------------- COLLAGE PARALLAX VISIBILITY FUNCTION ------------->

    $(window).scroll(function() {

        var restPosition = window.scrollY;

        if (restPosition >= 800 && restPosition < 840) {

            $('.collageimage').css('opacity', '0.05');

        } else if (restPosition < 800) {

            $('.collageimage').css('opacity', '0');

        }

        //--- IF STATEMENT 2 --->

        if (restPosition >= 840 && restPosition < 880) {

            $('.collageimage').css('opacity', '0.1');

        } else if (restPosition < 840 && restPosition >= 800) {

            $('.collageimage').css('opacity', '0.05');

        }

        //--- IF STATEMENT 3 --->

        if (restPosition >= 880 && restPosition < 920) {

            $('.collageimage').css('opacity', '0.15');

        } else if (restPosition < 880 && restPosition >= 840) {

            $('.collageimage').css('opacity', '0.1');

        }

        //--- IF STATEMENT 4 --->

        if (restPosition >= 920 && restPosition < 960) {

            $('.collageimage').css('opacity', '0.2');

        } else if (restPosition < 920 && restPosition >= 880) {

            $('.collageimage').css('opacity', '0.15');

        }

        //--- IF STATEMENT 5 --->

        if (restPosition >= 960 && restPosition < 1000) {

            $('.collageimage').css('opacity', '0.3');

        } else if (restPosition < 960 && restPosition >= 920) {

            $('.collageimage').css('opacity', '0.2');

        }

        //--- IF STATEMENT 6 --->

        if (restPosition >= 1000 && restPosition < 1040) {

            $('.collageimage').css('opacity', '0.4');

        } else if (restPosition < 1000 && restPosition >= 960) {

            $('.collageimage').css('opacity', '0.3');

        }

        //--- IF STATEMENT 7 --->

        if (restPosition >= 1040 && restPosition < 1080) {

            $('.collageimage').css('opacity', '0.5');

        } else if (restPosition < 1040 && restPosition >= 1000) {

            $('.collageimage').css('opacity', '0.4');

        }

        //--- IF STATEMENT 8 --->

        if (restPosition >= 1080 && restPosition < 1120) {

            $('.collageimage').css('opacity', '0.6');

        } else if (restPosition < 1080 && restPosition >= 1040) {

            $('.collageimage').css('opacity', '0.5');

        }

        //--- IF STATEMENT 9 --->

        if (restPosition >= 1120 && restPosition < 1160) {

            $('.collageimage').css('opacity', '0.7');

        } else if (restPosition < 1120 && restPosition >= 1080) {

            $('.collageimage').css('opacity', '0.6');

        }

        //--- IF STATEMENT 10 --->

        if (restPosition >= 1160 && restPosition < 1200) {

            $('.collageimage').css('opacity', '0.8');

        } else if (restPosition < 1160 && restPosition >= 1120) {

            $('.collageimage').css('opacity', '0.7');

        }

        //--- IF STATEMENT 11 --->

        if (restPosition >= 1200 && restPosition < 1240) {

            $('.collageimage').css('opacity', '0.9');

        } else if (restPosition < 1200 && restPosition >= 1160) {

            $('.collageimage').css('opacity', '0.8');

        }

        //--- IF STATEMENT 12 --->

        if (restPosition >= 1240) {

            $('.collageimage').css('opacity', '1');

        } else if (restPosition < 1240 && restPosition >= 1200) {

            $('.collageimage').css('opacity', '0.9');

        }

    });
    
    

    //-------------- COLLAGE PARALLAX BLUR FUNCTION ------------->

    function changeBlur() {

        var restPosition = window.scrollY;

        //--- IF STATEMENT 1 --->

        if (restPosition >= 800 && restPosition < 840) {

            document.getElementById("colImage1").style.filter = "blur(10px)";

            document.getElementById("colImage2").style.filter = "blur(10px)";

            document.getElementById("colImage3").style.filter = "blur(10px)";

            document.getElementById("colImage4").style.filter = "blur(10px)";

            document.getElementById("colImage5").style.filter = "blur(10px)";

            document.getElementById("colImage6").style.filter = "blur(10px)";

            document.getElementById("colImage7").style.filter = "blur(10px)";

            document.getElementById("colImage8").style.filter = "blur(10px)";

            document.getElementById("colImage9").style.filter = "blur(10px)";

            document.getElementById("colImage10").style.filter = "blur(10px)";

            document.getElementById("colImage11").style.filter = "blur(10px)";

            document.getElementById("colImage12").style.filter = "blur(10px)";

        } else if (restPosition < 800) {

            document.getElementById("colImage1").style.filter = "blur(11px)";

            document.getElementById("colImage2").style.filter = "blur(11px)";

            document.getElementById("colImage3").style.filter = "blur(11px)";

            document.getElementById("colImage4").style.filter = "blur(11px)";

            document.getElementById("colImage5").style.filter = "blur(11px)";

            document.getElementById("colImage6").style.filter = "blur(11px)";

            document.getElementById("colImage7").style.filter = "blur(11px)";

            document.getElementById("colImage8").style.filter = "blur(11px)";

            document.getElementById("colImage9").style.filter = "blur(11px)";

            document.getElementById("colImage10").style.filter = "blur(11px)";

            document.getElementById("colImage11").style.filter = "blur(11px)";

            document.getElementById("colImage12").style.filter = "blur(11px)";

        }

        //--- IF STATEMENT 2 --->

        if (restPosition >= 840 && restPosition < 880) {

            document.getElementById("colImage1").style.filter = "blur(9px)";

            document.getElementById("colImage2").style.filter = "blur(9px)";

            document.getElementById("colImage3").style.filter = "blur(9px)";

            document.getElementById("colImage4").style.filter = "blur(9px)";

            document.getElementById("colImage5").style.filter = "blur(9px)";

            document.getElementById("colImage6").style.filter = "blur(9px)";

            document.getElementById("colImage7").style.filter = "blur(9px)";

            document.getElementById("colImage8").style.filter = "blur(9px)";

            document.getElementById("colImage9").style.filter = "blur(9px)";

            document.getElementById("colImage10").style.filter = "blur(9px)";

            document.getElementById("colImage11").style.filter = "blur(9px)";

            document.getElementById("colImage12").style.filter = "blur(9px)";

        } else if (restPosition < 840 && restPosition >= 800) {

            document.getElementById("colImage1").style.filter = "blur(10px)";

            document.getElementById("colImage2").style.filter = "blur(10px)";

            document.getElementById("colImage3").style.filter = "blur(10px)";

            document.getElementById("colImage4").style.filter = "blur(10px)";

            document.getElementById("colImage5").style.filter = "blur(10px)";

            document.getElementById("colImage6").style.filter = "blur(10px)";

            document.getElementById("colImage7").style.filter = "blur(10px)";

            document.getElementById("colImage8").style.filter = "blur(10px)";

            document.getElementById("colImage9").style.filter = "blur(10px)";

            document.getElementById("colImage10").style.filter = "blur(10px)";

            document.getElementById("colImage11").style.filter = "blur(10px)";

            document.getElementById("colImage12").style.filter = "blur(10px)";

        }

        //--- IF STATEMENT 3 --->

        if (restPosition >= 880 && restPosition < 920) {

            document.getElementById("colImage1").style.filter = "blur(8px)";

            document.getElementById("colImage2").style.filter = "blur(8px)";

            document.getElementById("colImage3").style.filter = "blur(8px)";

            document.getElementById("colImage4").style.filter = "blur(8px)";

            document.getElementById("colImage5").style.filter = "blur(8px)";

            document.getElementById("colImage6").style.filter = "blur(8px)";

            document.getElementById("colImage7").style.filter = "blur(8px)";

            document.getElementById("colImage8").style.filter = "blur(8px)";

            document.getElementById("colImage9").style.filter = "blur(8px)";

            document.getElementById("colImage10").style.filter = "blur(8px)";

            document.getElementById("colImage11").style.filter = "blur(8px)";

            document.getElementById("colImage12").style.filter = "blur(8px)";

        } else if (restPosition < 880 && restPosition >= 840) {

            document.getElementById("colImage1").style.filter = "blur(9px)";

            document.getElementById("colImage2").style.filter = "blur(9px)";

            document.getElementById("colImage3").style.filter = "blur(9px)";

            document.getElementById("colImage4").style.filter = "blur(9px)";

            document.getElementById("colImage5").style.filter = "blur(9px)";

            document.getElementById("colImage6").style.filter = "blur(9px)";

            document.getElementById("colImage7").style.filter = "blur(9px)";

            document.getElementById("colImage8").style.filter = "blur(9px)";

            document.getElementById("colImage9").style.filter = "blur(9px)";

            document.getElementById("colImage10").style.filter = "blur(9px)";

            document.getElementById("colImage11").style.filter = "blur(9px)";

            document.getElementById("colImage12").style.filter = "blur(9px)";

        }

        //--- IF STATEMENT 4 --->

        if (restPosition >= 920 && restPosition < 960) {

            document.getElementById("colImage1").style.filter = "blur(7px)";

            document.getElementById("colImage2").style.filter = "blur(7px)";

            document.getElementById("colImage3").style.filter = "blur(7px)";

            document.getElementById("colImage4").style.filter = "blur(7px)";

            document.getElementById("colImage5").style.filter = "blur(7px)";

            document.getElementById("colImage6").style.filter = "blur(7px)";

            document.getElementById("colImage7").style.filter = "blur(7px)";

            document.getElementById("colImage8").style.filter = "blur(7px)";

            document.getElementById("colImage9").style.filter = "blur(7px)";

            document.getElementById("colImage10").style.filter = "blur(7px)";

            document.getElementById("colImage11").style.filter = "blur(7px)";

            document.getElementById("colImage12").style.filter = "blur(7px)";

        } else if (restPosition < 920 && restPosition >= 880) {

            document.getElementById("colImage1").style.filter = "blur(8px)";

            document.getElementById("colImage2").style.filter = "blur(8px)";

            document.getElementById("colImage3").style.filter = "blur(8px)";

            document.getElementById("colImage4").style.filter = "blur(8px)";

            document.getElementById("colImage5").style.filter = "blur(8px)";

            document.getElementById("colImage6").style.filter = "blur(8px)";

            document.getElementById("colImage7").style.filter = "blur(8px)";

            document.getElementById("colImage8").style.filter = "blur(8px)";

            document.getElementById("colImage9").style.filter = "blur(8px)";

            document.getElementById("colImage10").style.filter = "blur(8px)";

            document.getElementById("colImage11").style.filter = "blur(8px)";

            document.getElementById("colImage12").style.filter = "blur(8px)";

        }

        //--- IF STATEMENT 5 --->

        if (restPosition >= 960 && restPosition < 1000) {

            document.getElementById("colImage1").style.filter = "blur(6px)";

            document.getElementById("colImage2").style.filter = "blur(6px)";

            document.getElementById("colImage3").style.filter = "blur(6px)";

            document.getElementById("colImage4").style.filter = "blur(6px)";

            document.getElementById("colImage5").style.filter = "blur(6px)";

            document.getElementById("colImage6").style.filter = "blur(6px)";

            document.getElementById("colImage7").style.filter = "blur(6px)";

            document.getElementById("colImage8").style.filter = "blur(6px)";

            document.getElementById("colImage9").style.filter = "blur(6px)";

            document.getElementById("colImage10").style.filter = "blur(6px)";

            document.getElementById("colImage11").style.filter = "blur(6px)";

            document.getElementById("colImage12").style.filter = "blur(6px)";

        } else if (restPosition < 960 && restPosition >= 920) {

            document.getElementById("colImage1").style.filter = "blur(7px)";

            document.getElementById("colImage2").style.filter = "blur(7px)";

            document.getElementById("colImage3").style.filter = "blur(7px)";

            document.getElementById("colImage4").style.filter = "blur(7px)";

            document.getElementById("colImage5").style.filter = "blur(7px)";

            document.getElementById("colImage6").style.filter = "blur(7px)";

            document.getElementById("colImage7").style.filter = "blur(7px)";

            document.getElementById("colImage8").style.filter = "blur(7px)";

            document.getElementById("colImage9").style.filter = "blur(7px)";

            document.getElementById("colImage10").style.filter = "blur(7px)";

            document.getElementById("colImage11").style.filter = "blur(7px)";

            document.getElementById("colImage12").style.filter = "blur(7px)";

        }

        //--- IF STATEMENT 6 --->

        if (restPosition >= 1000 && restPosition < 1040) {

            document.getElementById("colImage1").style.filter = "blur(5px)";

            document.getElementById("colImage2").style.filter = "blur(5px)";

            document.getElementById("colImage3").style.filter = "blur(5px)";

            document.getElementById("colImage4").style.filter = "blur(5px)";

            document.getElementById("colImage5").style.filter = "blur(5px)";

            document.getElementById("colImage6").style.filter = "blur(5px)";

            document.getElementById("colImage7").style.filter = "blur(5px)";

            document.getElementById("colImage8").style.filter = "blur(5px)";

            document.getElementById("colImage9").style.filter = "blur(5px)";

            document.getElementById("colImage10").style.filter = "blur(5px)";

            document.getElementById("colImage11").style.filter = "blur(5px)";

            document.getElementById("colImage12").style.filter = "blur(5px)";

        } else if (restPosition < 1000 && restPosition >= 960) {

            document.getElementById("colImage1").style.filter = "blur(6px)";

            document.getElementById("colImage2").style.filter = "blur(6px)";

            document.getElementById("colImage3").style.filter = "blur(6px)";

            document.getElementById("colImage4").style.filter = "blur(6px)";

            document.getElementById("colImage5").style.filter = "blur(6px)";

            document.getElementById("colImage6").style.filter = "blur(6px)";

            document.getElementById("colImage7").style.filter = "blur(6px)";

            document.getElementById("colImage8").style.filter = "blur(6px)";

            document.getElementById("colImage9").style.filter = "blur(6px)";

            document.getElementById("colImage10").style.filter = "blur(6px)";

            document.getElementById("colImage11").style.filter = "blur(6px)";

            document.getElementById("colImage12").style.filter = "blur(6px)";

        }

        //--- IF STATEMENT 7 --->

        if (restPosition >= 1040 && restPosition < 1080) {

            document.getElementById("colImage1").style.filter = "blur(4px)";

            document.getElementById("colImage2").style.filter = "blur(4px)";

            document.getElementById("colImage3").style.filter = "blur(4px)";

            document.getElementById("colImage4").style.filter = "blur(4px)";

            document.getElementById("colImage5").style.filter = "blur(4px)";

            document.getElementById("colImage6").style.filter = "blur(4px)";

            document.getElementById("colImage7").style.filter = "blur(4px)";

            document.getElementById("colImage8").style.filter = "blur(4px)";

            document.getElementById("colImage9").style.filter = "blur(4px)";

            document.getElementById("colImage10").style.filter = "blur(4px)";

            document.getElementById("colImage11").style.filter = "blur(4px)";

            document.getElementById("colImage12").style.filter = "blur(4px)";

        } else if (restPosition < 1040 && restPosition >= 1000) {

            document.getElementById("colImage1").style.filter = "blur(5px)";

            document.getElementById("colImage2").style.filter = "blur(5px)";

            document.getElementById("colImage3").style.filter = "blur(5px)";

            document.getElementById("colImage4").style.filter = "blur(5px)";

            document.getElementById("colImage5").style.filter = "blur(5px)";

            document.getElementById("colImage6").style.filter = "blur(5px)";

            document.getElementById("colImage7").style.filter = "blur(5px)";

            document.getElementById("colImage8").style.filter = "blur(5px)";

            document.getElementById("colImage9").style.filter = "blur(5px)";

            document.getElementById("colImage10").style.filter = "blur(5px)";

            document.getElementById("colImage11").style.filter = "blur(5px)";

            document.getElementById("colImage12").style.filter = "blur(5px)";

        }

        //--- IF STATEMENT 8 --->

        if (restPosition >= 1080 && restPosition < 1120) {

            document.getElementById("colImage1").style.filter = "blur(3px)";

            document.getElementById("colImage2").style.filter = "blur(3px)";

            document.getElementById("colImage3").style.filter = "blur(3px)";

            document.getElementById("colImage4").style.filter = "blur(3px)";

            document.getElementById("colImage5").style.filter = "blur(3px)";

            document.getElementById("colImage6").style.filter = "blur(3px)";

            document.getElementById("colImage7").style.filter = "blur(3px)";

            document.getElementById("colImage8").style.filter = "blur(3px)";

            document.getElementById("colImage9").style.filter = "blur(3px)";

            document.getElementById("colImage10").style.filter = "blur(3px)";

            document.getElementById("colImage11").style.filter = "blur(3px)";

            document.getElementById("colImage12").style.filter = "blur(3px)";

        } else if (restPosition < 1080 && restPosition >= 1040) {

            document.getElementById("colImage1").style.filter = "blur(4px)";

            document.getElementById("colImage2").style.filter = "blur(4px)";

            document.getElementById("colImage3").style.filter = "blur(4px)";

            document.getElementById("colImage4").style.filter = "blur(4px)";

            document.getElementById("colImage5").style.filter = "blur(4px)";

            document.getElementById("colImage6").style.filter = "blur(4px)";

            document.getElementById("colImage7").style.filter = "blur(4px)";

            document.getElementById("colImage8").style.filter = "blur(4px)";

            document.getElementById("colImage9").style.filter = "blur(4px)";

            document.getElementById("colImage10").style.filter = "blur(4px)";

            document.getElementById("colImage11").style.filter = "blur(4px)";

            document.getElementById("colImage12").style.filter = "blur(4px)";

        }

        //--- IF STATEMENT 9 --->

        if (restPosition >= 1120 && restPosition < 1160) {

            document.getElementById("colImage1").style.filter = "blur(2px)";

            document.getElementById("colImage2").style.filter = "blur(2px)";

            document.getElementById("colImage3").style.filter = "blur(2px)";

            document.getElementById("colImage4").style.filter = "blur(2px)";

            document.getElementById("colImage5").style.filter = "blur(2px)";

            document.getElementById("colImage6").style.filter = "blur(2px)";

            document.getElementById("colImage7").style.filter = "blur(2px)";

            document.getElementById("colImage8").style.filter = "blur(2px)";

            document.getElementById("colImage9").style.filter = "blur(2px)";

            document.getElementById("colImage10").style.filter = "blur(2px)";

            document.getElementById("colImage11").style.filter = "blur(2px)";

            document.getElementById("colImage12").style.filter = "blur(2px)";

        } else if (restPosition < 1120 && restPosition >= 1080) {

            document.getElementById("colImage1").style.filter = "blur(3px)";

            document.getElementById("colImage2").style.filter = "blur(3px)";

            document.getElementById("colImage3").style.filter = "blur(3px)";

            document.getElementById("colImage4").style.filter = "blur(3px)";

            document.getElementById("colImage5").style.filter = "blur(3px)";

            document.getElementById("colImage6").style.filter = "blur(3px)";

            document.getElementById("colImage7").style.filter = "blur(3px)";

            document.getElementById("colImage8").style.filter = "blur(3px)";

            document.getElementById("colImage9").style.filter = "blur(3px)";

            document.getElementById("colImage10").style.filter = "blur(3px)";

            document.getElementById("colImage11").style.filter = "blur(3px)";

            document.getElementById("colImage12").style.filter = "blur(3px)";

        }

        //--- IF STATEMENT 10 --->

        if (restPosition >= 1160 && restPosition < 1200) {

            document.getElementById("colImage1").style.filter = "blur(1.5px)";

            document.getElementById("colImage2").style.filter = "blur(1.5px)";

            document.getElementById("colImage3").style.filter = "blur(1.5px)";

            document.getElementById("colImage4").style.filter = "blur(1.5px)";

            document.getElementById("colImage5").style.filter = "blur(1.5px)";

            document.getElementById("colImage6").style.filter = "blur(1.5px)";

            document.getElementById("colImage7").style.filter = "blur(1.5px)";

            document.getElementById("colImage8").style.filter = "blur(1.5px)";

            document.getElementById("colImage9").style.filter = "blur(1.5px)";

            document.getElementById("colImage10").style.filter = "blur(1.5px)";

            document.getElementById("colImage11").style.filter = "blur(1.5px)";

            document.getElementById("colImage12").style.filter = "blur(1.5px)";

        } else if (restPosition < 1160 && restPosition >= 1120) {

            document.getElementById("colImage1").style.filter = "blur(2px)";

            document.getElementById("colImage2").style.filter = "blur(2px)";

            document.getElementById("colImage3").style.filter = "blur(2px)";

            document.getElementById("colImage4").style.filter = "blur(2px)";

            document.getElementById("colImage5").style.filter = "blur(2px)";

            document.getElementById("colImage6").style.filter = "blur(2px)";

            document.getElementById("colImage7").style.filter = "blur(2px)";

            document.getElementById("colImage8").style.filter = "blur(2px)";

            document.getElementById("colImage9").style.filter = "blur(2px)";

            document.getElementById("colImage10").style.filter = "blur(2px)";

            document.getElementById("colImage11").style.filter = "blur(2px)";

            document.getElementById("colImage12").style.filter = "blur(2px)";

        }

        //--- IF STATEMENT 11 --->

        if (restPosition >= 1200 && restPosition < 1240) {

            document.getElementById("colImage1").style.filter = "blur(1px)";

            document.getElementById("colImage2").style.filter = "blur(1px)";

            document.getElementById("colImage3").style.filter = "blur(1px)";

            document.getElementById("colImage4").style.filter = "blur(1px)";

            document.getElementById("colImage5").style.filter = "blur(1px)";

            document.getElementById("colImage6").style.filter = "blur(1px)";

            document.getElementById("colImage7").style.filter = "blur(1px)";

            document.getElementById("colImage8").style.filter = "blur(1px)";

            document.getElementById("colImage9").style.filter = "blur(1px)";

            document.getElementById("colImage10").style.filter = "blur(1px)";

            document.getElementById("colImage11").style.filter = "blur(1px)";

            document.getElementById("colImage12").style.filter = "blur(1px)";

        } else if (restPosition < 1200 && restPosition >= 1160) {

            document.getElementById("colImage1").style.filter = "blur(1.5px)";

            document.getElementById("colImage2").style.filter = "blur(1.5px)";

            document.getElementById("colImage3").style.filter = "blur(1.5px)";

            document.getElementById("colImage4").style.filter = "blur(1.5px)";

            document.getElementById("colImage5").style.filter = "blur(1.5px)";

            document.getElementById("colImage6").style.filter = "blur(1.5px)";

            document.getElementById("colImage7").style.filter = "blur(1.5px)";

            document.getElementById("colImage8").style.filter = "blur(1.5px)";

            document.getElementById("colImage9").style.filter = "blur(1.5px)";

            document.getElementById("colImage10").style.filter = "blur(1.5px)";

            document.getElementById("colImage11").style.filter = "blur(1.5px)";

            document.getElementById("colImage12").style.filter = "blur(1.5px)";

        }

        //--- IF STATEMENT 12 --->

        if (restPosition >= 1240) {

            document.getElementById("colImage1").style.filter = "blur(0px)";

            document.getElementById("colImage2").style.filter = "blur(0px)";

            document.getElementById("colImage3").style.filter = "blur(0px)";

            document.getElementById("colImage4").style.filter = "blur(0px)";

            document.getElementById("colImage5").style.filter = "blur(0px)";

            document.getElementById("colImage6").style.filter = "blur(0px)";

            document.getElementById("colImage7").style.filter = "blur(0px)";

            document.getElementById("colImage8").style.filter = "blur(0px)";

            document.getElementById("colImage9").style.filter = "blur(0px)";

            document.getElementById("colImage10").style.filter = "blur(0px)";

            document.getElementById("colImage11").style.filter = "blur(0px)";

            document.getElementById("colImage12").style.filter = "blur(0px)";

        } else if (restPosition < 1240 && restPosition >= 1200) {

            document.getElementById("colImage1").style.filter = "blur(1px)";

            document.getElementById("colImage2").style.filter = "blur(1px)";

            document.getElementById("colImage3").style.filter = "blur(1px)";

            document.getElementById("colImage4").style.filter = "blur(1px)";

            document.getElementById("colImage5").style.filter = "blur(1px)";

            document.getElementById("colImage6").style.filter = "blur(1px)";

            document.getElementById("colImage7").style.filter = "blur(1px)";

            document.getElementById("colImage8").style.filter = "blur(1px)";

            document.getElementById("colImage9").style.filter = "blur(1px)";

            document.getElementById("colImage10").style.filter = "blur(1px)";

            document.getElementById("colImage11").style.filter = "blur(1px)";

            document.getElementById("colImage12").style.filter = "blur(1px)";

        }

    }

    window.addEventListener("scroll", changeBlur);
    
/*
    
//-------------- DESERT BLUR FUNCTION ------------->

if ( $(window).width() < 376) {      
  
    $(window).scroll(function() {
    
        var restPosition = window.scrollY;

        //--- IF STATEMENT 1 (BLUR TO CLEAR)-------------------------------------->

        if (restPosition >= 780 && restPosition < 820) {

            $('#desertpicturediv').css('filter', 'blur(10px)');

        } else if (restPosition < 780) {

            $('#desertpicturediv').css('filter', 'blur(11px)');

        }

        //--- IF STATEMENT 2 --->

        if (restPosition >= 820 && restPosition < 860) {

            $('#desertpicturediv').css('filter', 'blur(9px)');

        } else if (restPosition < 820 && restPosition >= 780) {

            $('#desertpicturediv').css('filter', 'blur(10px)');

        }

        //--- IF STATEMENT 3 --->

        if (restPosition >= 860 && restPosition < 900) {

            $('#desertpicturediv').css('filter', 'blur(8px)');

        } else if (restPosition < 860 && restPosition >= 820) {

            $('#desertpicturediv').css('filter', 'blur(9px)');

        }

        //--- IF STATEMENT 4 --->

        if (restPosition >= 900 && restPosition < 940) {

            $('#desertpicturediv').css('filter', 'blur(7px)');

        } else if (restPosition < 900 && restPosition >= 860) {

            $('#desertpicturediv').css('filter', 'blur(8px)');

        }

        //--- IF STATEMENT 5 --->

        if (restPosition >= 940 && restPosition < 980) {

            $('#desertpicturediv').css('filter', 'blur(6px)');

        } else if (restPosition < 940 && restPosition >= 900) {

            $('#desertpicturediv').css('filter', 'blur(7px)');

        }

        //--- IF STATEMENT 6 --->

        if (restPosition >= 980 && restPosition < 1020) {

            $('#desertpicturediv').css('filter', 'blur(5px)');

        } else if (restPosition < 980 && restPosition >= 940) {

            $('#desertpicturediv').css('filter', 'blur(6px)');

        }

        //--- IF STATEMENT 7 --->

        if (restPosition >= 1020 && restPosition < 1060) {

            $('#desertpicturediv').css('filter', 'blur(4px)');

        } else if (restPosition < 1020 && restPosition >= 980) {

            $('#desertpicturediv').css('filter', 'blur(5px)');

        }

        //--- IF STATEMENT 8 --->

        if (restPosition >= 1060 && restPosition < 1100) {

            $('#desertpicturediv').css('filter', 'blur(3px)');

        } else if (restPosition < 1060 && restPosition >= 1020) {

            $('#desertpicturediv').css('filter', 'blur(4px)');

        }

        //--- IF STATEMENT 9 --->

        if (restPosition >= 1100 && restPosition < 1140) {

            $('#desertpicturediv').css('filter', 'blur(2px)');

        } else if (restPosition < 1100 && restPosition >= 1060) {

            $('#desertpicturediv').css('filter', 'blur(3px)');

        }

        //--- IF STATEMENT 10 --->

        if (restPosition >= 1140 && restPosition < 1180) {

            $('#desertpicturediv').css('filter', 'blur(1px)');

        } else if (restPosition < 1140 && restPosition >= 1100) {

            $('#desertpicturediv').css('filter', 'blur(2px)');

        }

        //--- IF STATEMENT 11 --->

        if (restPosition >= 1180 && restPosition < 1220) {

            $('#desertpicturediv').css('filter', 'blur(0.5px)');

        } else if (restPosition < 1180 && restPosition >= 1140) {

            $('#desertpicturediv').css('filter', 'blur(1px)');

        }

        //--- IF STATEMENT 12 --->

        if (restPosition >= 1220 && restPosition < 1260) {

            $('#desertpicturediv').css('filter', '0px');

        } else if (restPosition < 1220 && restPosition >= 1180) {

            $('#desertpicturediv').css('filter', '0.5px');

        }

        //--- IF STATEMENT 13 (CLEAR TO BLUR)------------------------------------->

        if (restPosition >= 1260 && restPosition < 1300) {

            $('#desertpicturediv').css('filter', 'blur(1px)');

        } else if (restPosition < 1260 && restPosition >= 1220) {

            $('#desertpicturediv').css('filter', 'blur(0px)');

        }

        //--- IF STATEMENT 14 --->

        if (restPosition >= 1300 && restPosition < 1340) {

            $('#desertpicturediv').css('filter', 'blur(2px)');

        } else if (restPosition < 1300 && restPosition >= 1260) {

            $('#desertpicturediv').css('filter', 'blur(1px)');

        }

        //--- IF STATEMENT 15 --->

        if (restPosition >= 1340 && restPosition < 1380) {

            $('#desertpicturediv').css('filter', 'blur(3px)');

        } else if (restPosition < 1340 && restPosition >= 1300) {

            $('#desertpicturediv').css('filter', 'blur(2px)');

        }

        //--- IF STATEMENT 16 --->

        if (restPosition >= 1380 && restPosition < 1420) {

            $('#desertpicturediv').css('filter', 'blur(4px)');

        } else if (restPosition < 1380 && restPosition >= 1340) {

            $('#desertpicturediv').css('filter', 'blur(3px)');

        }

        //--- IF STATEMENT 17 --->

        if (restPosition >= 1420 && restPosition < 1460) {

            $('#desertpicturediv').css('filter', 'blur(5px)');

        } else if (restPosition < 1420 && restPosition >= 1380) {

            $('#desertpicturediv').css('filter', 'blur(4px)');

        }

        //--- IF STATEMENT 18 --->

        if (restPosition >= 1460 && restPosition < 1500) {

            $('#desertpicturediv').css('filter', 'blur(6px)');

        } else if (restPosition < 1460 && restPosition >= 1420) {

            $('#desertpicturediv').css('filter', 'blur(5px)');

        }

        //--- IF STATEMENT 19 --->

        if (restPosition >= 1500 && restPosition < 1540) {

            $('#desertpicturediv').css('filter', 'blur(7px)');

        } else if (restPosition < 1500 && restPosition >= 1460) {

            $('#desertpicturediv').css('filter', 'blur(6px)');

        }

        //--- IF STATEMENT 20 --->

        if (restPosition >= 1540 && restPosition < 1580) {

            $('#desertpicturediv').css('filter', 'blur(8px)');

        } else if (restPosition < 1540 && restPosition >= 1500) {

            $('#desertpicturediv').css('filter', 'blur(7px)');

        }

        //--- IF STATEMENT 21 --->

        if (restPosition >= 1580 && restPosition < 16200) {

            $('#desertpicturediv').css('filter', 'blur(9px)');

        } else if (restPosition < 1580 && restPosition >= 1540) {

            $('#desertpicturediv').css('filter', 'blur(8px)');

        }

        //--- IF STATEMENT 22 --->

        if (restPosition >= 1620 && restPosition < 1660) {

            $('#desertpicturediv').css('filter', 'blur(10px)');

        } else if (restPosition < 1620 && restPosition >= 1580) {

            $('#desertpicturediv').css('filter', 'blur(9px)');

        }

        //--- IF STATEMENT 23 --->

        if (restPosition >= 1660 && restPosition < 1700) {

            $('#desertpicturediv').css('filter', 'blur(11px)');

        } else if (restPosition < 1660 && restPosition >= 1620) {

            $('#desertpicturediv').css('filter', 'blur(10px)');

        }

        //--- IF STATEMENT 24 --->

        if (restPosition >= 1700) {

            $('#desertpicturediv').css('filter', '12px');

        } else if (restPosition < 1700 && restPosition >= 2680) {

            $('#desertpicturediv').css('filter', '11px');

        }
    
    });
    
}

if ( $(window).width() < 376) {      
  
    $(window).scroll(function() {
    
        var restPosition = window.scrollY;

        //--- IF STATEMENT 1 (BLUR TO CLEAR)-------------------------------------->

        if (restPosition >= 780 && restPosition < 820) {

            $('.desertheaders').css('filter', 'blur(10px)');

        } else if (restPosition < 780) {

            $('.desertheaders').css('filter', 'blur(11px)');

        }

        //--- IF STATEMENT 2 --->

        if (restPosition >= 820 && restPosition < 860) {

            $('.desertheaders').css('filter', 'blur(9px)');

        } else if (restPosition < 820 && restPosition >= 780) {

            $('.desertheaders').css('filter', 'blur(10px)');

        }

        //--- IF STATEMENT 3 --->

        if (restPosition >= 860 && restPosition < 900) {

            $('.desertheaders').css('filter', 'blur(8px)');

        } else if (restPosition < 860 && restPosition >= 820) {

            $('.desertheaders').css('filter', 'blur(9px)');

        }

        //--- IF STATEMENT 4 --->

        if (restPosition >= 900 && restPosition < 940) {

            $('.desertheaders').css('filter', 'blur(7px)');

        } else if (restPosition < 900 && restPosition >= 860) {

            $('.desertheaders').css('filter', 'blur(8px)');

        }

        //--- IF STATEMENT 5 --->

        if (restPosition >= 940 && restPosition < 980) {

            $('.desertheaders').css('filter', 'blur(6px)');

        } else if (restPosition < 940 && restPosition >= 900) {

            $('.desertheaders').css('filter', 'blur(7px)');

        }

        //--- IF STATEMENT 6 --->

        if (restPosition >= 980 && restPosition < 1020) {

            $('.desertheaders').css('filter', 'blur(5px)');

        } else if (restPosition < 980 && restPosition >= 940) {

            $('.desertheaders').css('filter', 'blur(6px)');

        }

        //--- IF STATEMENT 7 --->

        if (restPosition >= 1020 && restPosition < 1060) {

            $('.desertheaders').css('filter', 'blur(4px)');

        } else if (restPosition < 1020 && restPosition >= 980) {

            $('.desertheaders').css('filter', 'blur(5px)');

        }

        //--- IF STATEMENT 8 --->

        if (restPosition >= 1060 && restPosition < 1100) {

            $('.desertheaders').css('filter', 'blur(3px)');

        } else if (restPosition < 1060 && restPosition >= 1020) {

            $('.desertheaders').css('filter', 'blur(4px)');

        }

        //--- IF STATEMENT 9 --->

        if (restPosition >= 1100 && restPosition < 1140) {

            $('.desertheaders').css('filter', 'blur(2px)');

        } else if (restPosition < 1100 && restPosition >= 1060) {

            $('.desertheaders').css('filter', 'blur(3px)');

        }

        //--- IF STATEMENT 10 --->

        if (restPosition >= 1140 && restPosition < 1180) {

            $('.desertheaders').css('filter', 'blur(1px)');

        } else if (restPosition < 1140 && restPosition >= 1100) {

            $('.desertheaders').css('filter', 'blur(2px)');

        }

        //--- IF STATEMENT 11 --->

        if (restPosition >= 1180 && restPosition < 1220) {

            $('.desertheaders').css('filter', 'blur(0.5px)');

        } else if (restPosition < 1180 && restPosition >= 1140) {

            $('.desertheaders').css('filter', 'blur(1px)');

        }

        //--- IF STATEMENT 12 --->

        if (restPosition >= 1220 && restPosition < 1260) {

            $('.desertheaders').css('filter', '0px');

        } else if (restPosition < 1220 && restPosition >= 1180) {

            $('.desertheaders').css('filter', '0.5px');

        }

        //--- IF STATEMENT 13 (CLEAR TO BLUR)------------------------------------->

        if (restPosition >= 1260 && restPosition < 1300) {

            $('.desertheaders').css('filter', 'blur(1px)');

        } else if (restPosition < 1260 && restPosition >= 1220) {

            $('.desertheaders').css('filter', 'blur(0px)');

        }

        //--- IF STATEMENT 14 --->

        if (restPosition >= 1300 && restPosition < 1340) {

            $('.desertheaders').css('filter', 'blur(2px)');

        } else if (restPosition < 1300 && restPosition >= 1260) {

            $('.desertheaders').css('filter', 'blur(1px)');

        }

        //--- IF STATEMENT 15 --->

        if (restPosition >= 1340 && restPosition < 1380) {

            $('.desertheaders').css('filter', 'blur(3px)');

        } else if (restPosition < 1340 && restPosition >= 1300) {

            $('.desertheaders').css('filter', 'blur(2px)');

        }

        //--- IF STATEMENT 16 --->

        if (restPosition >= 1380 && restPosition < 1420) {

            $('.desertheaders').css('filter', 'blur(4px)');

        } else if (restPosition < 1380 && restPosition >= 1340) {

            $('.desertheaders').css('filter', 'blur(3px)');

        }

        //--- IF STATEMENT 17 --->

        if (restPosition >= 1420 && restPosition < 1460) {

            $('.desertheaders').css('filter', 'blur(5px)');

        } else if (restPosition < 1420 && restPosition >= 1380) {

            $('.desertheaders').css('filter', 'blur(4px)');

        }

        //--- IF STATEMENT 18 --->

        if (restPosition >= 1460 && restPosition < 1500) {

            $('.desertheaders').css('filter', 'blur(6px)');

        } else if (restPosition < 1460 && restPosition >= 1420) {

            $('.desertheaders').css('filter', 'blur(5px)');

        }

        //--- IF STATEMENT 19 --->

        if (restPosition >= 1500 && restPosition < 1540) {

            $('.desertheaders').css('filter', 'blur(7px)');

        } else if (restPosition < 1500 && restPosition >= 1460) {

            $('.desertheaders').css('filter', 'blur(6px)');

        }

        //--- IF STATEMENT 20 --->

        if (restPosition >= 1540 && restPosition < 1580) {

            $('.desertheaders').css('filter', 'blur(8px)');

        } else if (restPosition < 1540 && restPosition >= 1500) {

            $('.desertheaders').css('filter', 'blur(7px)');

        }

        //--- IF STATEMENT 21 --->

        if (restPosition >= 1580 && restPosition < 16200) {

            $('.desertheaders').css('filter', 'blur(9px)');

        } else if (restPosition < 1580 && restPosition >= 1540) {

            $('.desertheaders').css('filter', 'blur(8px)');

        }

        //--- IF STATEMENT 22 --->

        if (restPosition >= 1620 && restPosition < 1660) {

            $('.desertheaders').css('filter', 'blur(10px)');

        } else if (restPosition < 1620 && restPosition >= 1580) {

            $('.desertheaders').css('filter', 'blur(9px)');

        }

        //--- IF STATEMENT 23 --->

        if (restPosition >= 1660 && restPosition < 1700) {

            $('.desertheaders').css('filter', 'blur(11px)');

        } else if (restPosition < 1660 && restPosition >= 1620) {

            $('.desertheaders').css('filter', 'blur(10px)');

        }

        //--- IF STATEMENT 24 --->

        if (restPosition >= 1700) {

            $('.desertheaders').css('filter', 'blur(12px)');

        } else if (restPosition < 1700 && restPosition >= 2680) {

            $('.desertheaders').css('filter', 'blur(11px)');

        }
    
    });
    
}

if ( $(window).width() < 376) {
 
    $(window).scroll(function() {

        var restPosition = window.scrollY;
        
        console.log(scrollY);

        //--- IF STATEMENT 1 (BLUR TO CLEAR)-------------------------------------->

        if (restPosition >= 2080 && restPosition < 2120) {

            $('#quoteboxdiv').css('filter', 'blur(10px)');

        } else if (restPosition < 2080) {

            $('#quoteboxdiv').css('filter', 'blur(11px)');

        }

        //--- IF STATEMENT 2 --->

        if (restPosition >= 2120 && restPosition < 2160) {

            $('#quoteboxdiv').css('filter', 'blur(9px)');

        } else if (restPosition < 2120 && restPosition >= 2080) {

            $('#quoteboxdiv').css('filter', 'blur(10px)');

        }

        //--- IF STATEMENT 3 --->

        if (restPosition >= 2160 && restPosition < 2200) {

            $('#quoteboxdiv').css('filter', 'blur(8px)');

        } else if (restPosition < 2160 && restPosition >= 2120) {

            $('#quoteboxdiv').css('filter', 'blur(9px)');

        }

        //--- IF STATEMENT 4 --->

        if (restPosition >= 2200 && restPosition < 2240) {

            $('#quoteboxdiv').css('filter', 'blur(7px)');

        } else if (restPosition < 2200 && restPosition >= 2160) {

            $('#quoteboxdiv').css('filter', 'blur(8px)');

        }

        //--- IF STATEMENT 5 --->

        if (restPosition >= 2240 && restPosition < 2280) {

            $('#quoteboxdiv').css('filter', 'blur(6px)');

        } else if (restPosition < 2240 && restPosition >= 2200) {

            $('#quoteboxdiv').css('filter', 'blur(7px)');

        }

        //--- IF STATEMENT 6 --->

        if (restPosition >= 2280 && restPosition < 2320) {

            $('#quoteboxdiv').css('filter', 'blur(5px)');

        } else if (restPosition < 2280 && restPosition >= 2240) {

            $('#quoteboxdiv').css('filter', 'blur(6px)');

        }

        //--- IF STATEMENT 7 --->

        if (restPosition >= 2320 && restPosition < 2360) {

            $('#quoteboxdiv').css('filter', 'blur(4px)');

        } else if (restPosition < 2320 && restPosition >= 2280) {

            $('#quoteboxdiv').css('filter', 'blur(5px)');

        }

        //--- IF STATEMENT 8 --->

        if (restPosition >= 2360 && restPosition < 2400) {

            $('#quoteboxdiv').css('filter', 'blur(3px)');

        } else if (restPosition < 2360 && restPosition >= 2320) {

            $('#quoteboxdiv').css('filter', 'blur(4px)');

        }

        //--- IF STATEMENT 9 --->

        if (restPosition >= 2400 && restPosition < 2440) {

            $('#quoteboxdiv').css('filter', 'blur(2px)');

        } else if (restPosition < 2400 && restPosition >= 2360) {

            $('#quoteboxdiv').css('filter', 'blur(3px)');

        }

        //--- IF STATEMENT 10 --->

        if (restPosition >= 2440 && restPosition < 2480) {

            $('#quoteboxdiv').css('filter', 'blur(1px)');

        } else if (restPosition < 2440 && restPosition >= 2400) {

            $('#quoteboxdiv').css('filter', 'blur(2px)');

        }

        //--- IF STATEMENT 11 --->

        if (restPosition >= 2480 && restPosition < 2520) {

            $('#quoteboxdiv').css('filter', 'blur(0.5px)');

        } else if (restPosition < 2480 && restPosition >= 2440) {

            $('#quoteboxdiv').css('filter', 'blur(1px)');

        }

        //--- IF STATEMENT 12 --->

        if (restPosition >= 2520 && restPosition < 2560) {

            $('#quoteboxdiv').css('filter', '0px');

        } else if (restPosition < 2520 && restPosition >= 2480) {

            $('#quoteboxdiv').css('filter', '0.5px');

        }

        //--- IF STATEMENT 13 (CLEAR TO BLUR)------------------------------------->

        if (restPosition >= 2560 && restPosition < 2600) {

            $('#quoteboxdiv').css('filter', 'blur(0.5px)');

        } else if (restPosition < 2560 && restPosition >= 2520) {

            $('#quoteboxdiv').css('filter', 'blur(0px)');

        }

        //--- IF STATEMENT 14 --->

        if (restPosition >= 2600 && restPosition < 2640) {

            $('#quoteboxdiv').css('filter', 'blur(1px)');

        } else if (restPosition < 2600 && restPosition >= 2560) {

            $('#quoteboxdiv').css('filter', 'blur(0.5px)');

        }

        //--- IF STATEMENT 15 --->

        if (restPosition >= 2640 && restPosition < 2680) {

            $('#quoteboxdiv').css('filter', 'blur(2px)');

        } else if (restPosition < 2640 && restPosition >= 2600) {

            $('#quoteboxdiv').css('filter', 'blur(1px)');

        }

        //--- IF STATEMENT 16 --->

        if (restPosition >= 2680 && restPosition < 2720) {

            $('#quoteboxdiv').css('filter', 'blur(3px)');

        } else if (restPosition < 2680 && restPosition >= 2640) {

            $('#quoteboxdiv').css('filter', 'blur(2px)');

        }

        //--- IF STATEMENT 17 --->

        if (restPosition >= 2720 && restPosition < 2760) {

            $('#quoteboxdiv').css('filter', 'blur(4px)');

        } else if (restPosition < 2720 && restPosition >= 2680) {

            $('#quoteboxdiv').css('filter', 'blur(3px)');

        }

        //--- IF STATEMENT 18 --->

        if (restPosition >= 2760 && restPosition < 2800) {

            $('#quoteboxdiv').css('filter', 'blur(5px)');

        } else if (restPosition < 2760 && restPosition >= 2720) {

            $('#quoteboxdiv').css('filter', 'blur(4px)');

        }

        //--- IF STATEMENT 19 --->

        if (restPosition >= 2800 && restPosition < 2840) {

            $('#quoteboxdiv').css('filter', 'blur(6px)');

        } else if (restPosition < 2800 && restPosition >= 2760) {

            $('#quoteboxdiv').css('filter', 'blur(5px)');

        }

        //--- IF STATEMENT 20 --->

        if (restPosition >= 2840 && restPosition < 2880) {

            $('#quoteboxdiv').css('filter', 'blur(7px)');

        } else if (restPosition < 2840 && restPosition >= 2800) {

            $('#quoteboxdiv').css('filter', 'blur(6px)');

        }

        //--- IF STATEMENT 21 --->

        if (restPosition >= 2880 && restPosition < 2920) {

            $('#quoteboxdiv').css('filter', 'blur(8px)');

        } else if (restPosition < 2880 && restPosition >= 2840) {

            $('#quoteboxdiv').css('filter', 'blur(7px)');

        }

        //--- IF STATEMENT 22 --->

        if (restPosition >= 2920 && restPosition < 2960) {

            $('#quoteboxdiv').css('filter', 'blur(9px)');

        } else if (restPosition < 2920 && restPosition >= 2880) {

            $('#quoteboxdiv').css('filter', 'blur(8px)');

        }

        //--- IF STATEMENT 23 --->

        if (restPosition >= 2960 && restPosition < 3000) {

            $('#quoteboxdiv').css('filter', 'blur(10px)');

        } else if (restPosition < 2960 && restPosition >= 2920) {

            $('#quoteboxdiv').css('filter', 'blur(9px)');

        }

        //--- IF STATEMENT 24 --->

        if (restPosition >= 3000) {

            $('#quoteboxdiv').css('filter', '11px');

        } else if (restPosition < 3000 && restPosition >= 2960) {

            $('#quoteboxdiv').css('filter', '10px');

        }

    });
    
}

if ( $(window).width() < 376) {
 
    $(window).scroll(function() {

        var restPosition = window.scrollY;
        
        console.log(scrollY);

        //--- IF STATEMENT 1 (BLUR TO CLEAR)-------------------------------------->

        if (restPosition >= 2080 && restPosition < 2120) {

            $('#aboutsashadiv3').css('filter', 'blur(10px)');

        } else if (restPosition < 2080) {

            $('#aboutsashadiv3').css('filter', 'blur(11px)');

        }

        //--- IF STATEMENT 2 --->

        if (restPosition >= 2120 && restPosition < 2160) {

            $('#aboutsashadiv3').css('filter', 'blur(9px)');

        } else if (restPosition < 2120 && restPosition >= 2080) {

            $('#aboutsashadiv3').css('filter', 'blur(10px)');

        }

        //--- IF STATEMENT 3 --->

        if (restPosition >= 2160 && restPosition < 2200) {

            $('#aboutsashadiv3').css('filter', 'blur(8px)');

        } else if (restPosition < 2160 && restPosition >= 2120) {

            $('#aboutsashadiv3').css('filter', 'blur(9px)');

        }

        //--- IF STATEMENT 4 --->

        if (restPosition >= 2200 && restPosition < 2240) {

            $('#aboutsashadiv3').css('filter', 'blur(7px)');

        } else if (restPosition < 2200 && restPosition >= 2160) {

            $('#aboutsashadiv3').css('filter', 'blur(8px)');

        }

        //--- IF STATEMENT 5 --->

        if (restPosition >= 2240 && restPosition < 2280) {

            $('#aboutsashadiv3').css('filter', 'blur(6px)');

        } else if (restPosition < 2240 && restPosition >= 2200) {

            $('#aboutsashadiv3').css('filter', 'blur(7px)');

        }

        //--- IF STATEMENT 6 --->

        if (restPosition >= 2280 && restPosition < 2320) {

            $('#aboutsashadiv3').css('filter', 'blur(5px)');

        } else if (restPosition < 2280 && restPosition >= 2240) {

            $('#aboutsashadiv3').css('filter', 'blur(6px)');

        }

        //--- IF STATEMENT 7 --->

        if (restPosition >= 2320 && restPosition < 2360) {

            $('#aboutsashadiv3').css('filter', 'blur(4px)');

        } else if (restPosition < 2320 && restPosition >= 2280) {

            $('#aboutsashadiv3').css('filter', 'blur(5px)');

        }

        //--- IF STATEMENT 8 --->

        if (restPosition >= 2360 && restPosition < 2400) {

            $('#aboutsashadiv3').css('filter', 'blur(3px)');

        } else if (restPosition < 2360 && restPosition >= 2320) {

            $('#aboutsashadiv3').css('filter', 'blur(4px)');

        }

        //--- IF STATEMENT 9 --->

        if (restPosition >= 2400 && restPosition < 2440) {

            $('#aboutsashadiv3').css('filter', 'blur(2px)');

        } else if (restPosition < 2400 && restPosition >= 2360) {

            $('#aboutsashadiv3').css('filter', 'blur(3px)');

        }

        //--- IF STATEMENT 10 --->

        if (restPosition >= 2440 && restPosition < 2480) {

            $('#aboutsashadiv3').css('filter', 'blur(1px)');

        } else if (restPosition < 2440 && restPosition >= 2400) {

            $('#aboutsashadiv3').css('filter', 'blur(2px)');

        }

        //--- IF STATEMENT 11 --->

        if (restPosition >= 2480 && restPosition < 2520) {

            $('#aboutsashadiv3').css('filter', 'blur(0.5px)');

        } else if (restPosition < 2480 && restPosition >= 2440) {

            $('#aboutsashadiv3').css('filter', 'blur(1px)');

        }

        //--- IF STATEMENT 12 --->

        if (restPosition >= 2520 && restPosition < 2560) {

            $('#aboutsashadiv3').css('filter', '0px');

        } else if (restPosition < 2520 && restPosition >= 2480) {

            $('#aboutsashadiv3').css('filter', '0.5px');

        }

        //--- IF STATEMENT 13 (CLEAR TO BLUR)------------------------------------->

        if (restPosition >= 2560 && restPosition < 2600) {

            $('#aboutsashadiv3').css('filter', 'blur(0.5px)');

        } else if (restPosition < 2560 && restPosition >= 2520) {

            $('#aboutsashadiv3').css('filter', 'blur(0px)');

        }

        //--- IF STATEMENT 14 --->

        if (restPosition >= 2600 && restPosition < 2640) {

            $('#aboutsashadiv3').css('filter', 'blur(1px)');

        } else if (restPosition < 2600 && restPosition >= 2560) {

            $('#aboutsashadiv3').css('filter', 'blur(0.5px)');

        }

        //--- IF STATEMENT 15 --->

        if (restPosition >= 2640 && restPosition < 2680) {

            $('#aboutsashadiv3').css('filter', 'blur(2px)');

        } else if (restPosition < 2640 && restPosition >= 2600) {

            $('#aboutsashadiv3').css('filter', 'blur(1px)');

        }

        //--- IF STATEMENT 16 --->

        if (restPosition >= 2680 && restPosition < 2720) {

            $('#aboutsashadiv3').css('filter', 'blur(3px)');

        } else if (restPosition < 2680 && restPosition >= 2640) {

            $('#aboutsashadiv3').css('filter', 'blur(2px)');

        }

        //--- IF STATEMENT 17 --->

        if (restPosition >= 2720 && restPosition < 2760) {

            $('#aboutsashadiv3').css('filter', 'blur(4px)');

        } else if (restPosition < 2720 && restPosition >= 2680) {

            $('#aboutsashadiv3').css('filter', 'blur(3px)');

        }

        //--- IF STATEMENT 18 --->

        if (restPosition >= 2760 && restPosition < 2800) {

            $('#aboutsashadiv3').css('filter', 'blur(5px)');

        } else if (restPosition < 2760 && restPosition >= 2720) {

            $('#aboutsashadiv3').css('filter', 'blur(4px)');

        }

        //--- IF STATEMENT 19 --->

        if (restPosition >= 2800 && restPosition < 2840) {

            $('#aboutsashadiv3').css('filter', 'blur(6px)');

        } else if (restPosition < 2800 && restPosition >= 2760) {

            $('#aboutsashadiv3').css('filter', 'blur(5px)');

        }

        //--- IF STATEMENT 20 --->

        if (restPosition >= 2840 && restPosition < 2880) {

            $('#aboutsashadiv3').css('filter', 'blur(7px)');

        } else if (restPosition < 2840 && restPosition >= 2800) {

            $('#aboutsashadiv3').css('filter', 'blur(6px)');

        }

        //--- IF STATEMENT 21 --->

        if (restPosition >= 2880 && restPosition < 2920) {

            $('#aboutsashadiv3').css('filter', 'blur(8px)');

        } else if (restPosition < 2880 && restPosition >= 2840) {

            $('#aboutsashadiv3').css('filter', 'blur(7px)');

        }

        //--- IF STATEMENT 22 --->

        if (restPosition >= 2920 && restPosition < 2960) {

            $('#aboutsashadiv3').css('filter', 'blur(9px)');

        } else if (restPosition < 2920 && restPosition >= 2880) {

            $('#aboutsashadiv3').css('filter', 'blur(8px)');

        }

        //--- IF STATEMENT 23 --->

        if (restPosition >= 2960 && restPosition < 3000) {

            $('#aboutsashadiv3').css('filter', 'blur(10px)');

        } else if (restPosition < 2960 && restPosition >= 2920) {

            $('#aboutsashadiv3').css('filter', 'blur(9px)');

        }

        //--- IF STATEMENT 24 --->

        if (restPosition >= 3000) {

            $('#aboutsashadiv3').css('filter', '11px');

        } else if (restPosition < 3000 && restPosition >= 2960) {

            $('#aboutsashadiv3').css('filter', '10px');

        }

    });
    
}

*/
    
function smartPhoneReviews() {
    
    if (clientWidth < 376) {     
        
        clickCount = 1;
    
        function rightClick() {
    
            clickCount++;
    
            if (clickCount > 13) {
    
                clickCount = 13;
    
            }
    
            clickTracker();
    
        }
    
        function leftClick() {
    
            clickCount--;
    
            if (clickCount < 1) {
    
                clickCount = 1;
    
            }
    
            clickTracker();
    
        }
    
        function clickTracker() {
    
            if (clickCount === 1) {
    
                $("#review1").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review2").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review3").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review4").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review5").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review6").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review7").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review8").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review9").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review10").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review11").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review12").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");
    
                $("#review13").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
            }
    
            if (clickCount === 2) {
    
                $("#review1").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review2").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review3").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review4").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review5").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review6").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review7").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review8").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review9").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review10").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review11").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review12").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review13").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
            }
    
            if (clickCount === 3) {
    
                $("#review1").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review2").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review3").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review4").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review5").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review6").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review7").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review8").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review9").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review10").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review11").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review12").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review13").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
            }
    
            if (clickCount === 4) {
    
                $("#review1").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review2").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review3").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review4").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review5").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review6").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review7").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review8").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review9").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review10").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review11").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review12").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review13").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
    
            }
    
            if (clickCount === 5) {
    
                $("#review1").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review2").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review3").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review4").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review5").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review6").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review7").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review8").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review9").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review10").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review11").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review12").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review13").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
    
            }
    
            if (clickCount === 6) {
    
                $("#review1").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review2").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review3").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review4").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review5").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review6").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review7").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review8").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review9").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review10").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review11").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review12").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
                $("#review13").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
    
            }
    
            if (clickCount === 7) {
    
                $("#review1").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review2").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review3").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review4").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review5").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review6").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review7").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review8").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review9").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review10").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review11").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review12").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
                $("#review13").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
    
            }
    
            if (clickCount === 8) {
    
                $("#review1").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review2").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review3").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review4").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review5").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review6").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review7").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review8").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review9").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review10").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review11").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review12").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
                $("#review13").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
    
            }
    
            if (clickCount === 9) {
    
                $("#review1").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review2").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review3").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review4").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review5").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review6").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review7").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review8").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review9").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review10").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review11").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review12").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
                $("#review13").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
    
            }
    
            if (clickCount === 10) {
    
                $("#review1").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review2").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review3").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review4").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review5").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review6").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review7").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review8").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review9").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review10").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review11").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review12").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
                $("#review13").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
    
            }
    
            if (clickCount === 11) {
    
                $("#review1").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review2").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review3").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review4").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review5").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review6").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review7").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review8").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review9").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review10").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review11").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review12").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
                $("#review13").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
    
            }
    
            if (clickCount === 12) {
    
                $("#review1").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review2").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review3").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review4").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review5").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review6").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review7").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review8").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review9").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review10").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review11").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review12").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
                $("#review13").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
    
            }
    
            if (clickCount === 13) {
    
                $("#review1").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review2").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review3").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review4").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review5").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review6").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review7").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review8").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review9").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review10").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review11").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review12").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
                $("#review13").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
    
            }
    
        }
      
    }
    
}