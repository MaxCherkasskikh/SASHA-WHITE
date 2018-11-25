//------------------- ONLOAD BLUR FUNCTION ------------------>

/*

function onLoadBlur() {
    
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

*/

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

//------------------- MENU OPEN/CLOSE FUNCTION ------------------>

var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.3, {
    
    y: 6,
    
    rotation: 45,
    
    ease: Expo.easeInOut
    
});

t1.to(".two", 0.3, {
    
    y: -6,
    
    rotation: -45,
    
    ease: Expo.easeInOut,
    
    delay: -0.3
    
});

t1.to(".menu", 2, {
    
    top: "0%",
    
    ease: Expo.easeInOut,
    
    delay: 0
    
});

t1.staggerFrom(".menu ul li", 2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);

t1.reverse();

$(document).on("click", ".toggle-btn", function() {
    
    t1.reversed(!t1.reversed());
    
});

$(document).on("click", "a", function() {
    
    t1.reversed(!t1.reversed());
    
});

//----------- ASK SASHA BUTTON ONCLICK FUNCTION ---------->

function askSasha() {
    
    //----------- DIAMONDS ROTATING BACK ---------->
    
    document.getElementById("slidepicdiv1").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv1").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv1").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv1").style.transitionDelay = "2s";
        
    document.getElementById("slidepicdiv2").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv2").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv2").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv2").style.transitionDelay = "1.5s";
        
    document.getElementById("slidepicdiv3").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv3").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv3").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv3").style.transitionDelay = "2.5s";
        
    document.getElementById("slidepicdiv4").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv4").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv4").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv4").style.transitionDelay = "1s";
        
    document.getElementById("slidepicdiv5").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv5").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv5").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv5").style.transitionDelay = "2s";
        
    document.getElementById("slidepicdiv6").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv6").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv6").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv6").style.transitionDelay = "3s";
        
    document.getElementById("slidepicdiv7").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv7").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv7").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv7").style.transitionDelay = "1.5s";
        
    document.getElementById("slidepicdiv8").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv8").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv8").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv8").style.transitionDelay = "2.5s";
        
    document.getElementById("slidepicdiv9").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv9").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv9").style.transition = "2.5s";
    
                document.getElementById("slidepicdiv9").style.transitionDelay = "2s";
    
    //----------- SHUFFLE PHRASES ROTATING BACK ---------->
    
    document.getElementById("shufflephrase1").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase1").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase1").style.transition = "1.5s";
    
                document.getElementById("shufflephrase1").style.transitionDelay = "0.5s";
        
    document.getElementById("shufflephrase2").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase2").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase2").style.transition = "1.5s";
    
                document.getElementById("shufflephrase2").style.transitionDelay = "0.8s";
        
    document.getElementById("shufflephrase3").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase3").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase3").style.transition = "1.5s";
    
                document.getElementById("shufflephrase3").style.transitionDelay = "1.1s";
        
    document.getElementById("shufflephrase4").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase4").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase4").style.transition = "1.5s";
    
                document.getElementById("shufflephrase4").style.transitionDelay = "1.4s";
        
    document.getElementById("shufflephrase5").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase5").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase5").style.transition = "1.5s";
    
                document.getElementById("shufflephrase5").style.transitionDelay = "1.7s";
        
    document.getElementById("shufflephrase6").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase6").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase6").style.transition = "1.5s";
    
                document.getElementById("shufflephrase6").style.transitionDelay = "2s";
        
    document.getElementById("shufflephrase7").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase7").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase7").style.transition = "1.5s";
    
                document.getElementById("shufflephrase7").style.transitionDelay = "2.3s";
    
    document.getElementById("shufflephrase8").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase8").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase8").style.transition = "1.5s";
    
                document.getElementById("shufflephrase8").style.transitionDelay = "2.6s";
        
    document.getElementById("shufflephrase9").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase9").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase9").style.transition = "1.5s";
    
                document.getElementById("shufflephrase9").style.transitionDelay = "2.9s";
        
    document.getElementById("shufflephrase10").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase10").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase10").style.transition = "1.5s";
    
                document.getElementById("shufflephrase10").style.transitionDelay = "3.2s";
    
    //----------- DIALOG BOX ROTATING IN ---------->
    
    document.getElementById("asksashainputdiv").style.transform = "rotateY(0deg)";
    
        document.getElementById("asksashainputdiv").style.transformOrigin = "center";
    
            document.getElementById("asksashainputdiv").style.transition = "2.5s";
    
                document.getElementById("asksashainputdiv").style.transitionDelay = "4.5s";
    
    //----------- SIGNATURE ROTATING OUT ---------->
    
    document.getElementById("signaturediv").style.transform = "rotateY(-90deg)";
    
        document.getElementById("signaturediv").style.transformOrigin = "left";
    
            document.getElementById("signaturediv").style.transition = "2s";
    
                document.getElementById("signaturediv").style.transitionDelay = "0s";
    
}

//----------- SUBMIT SASHA BUTTON ONCLICK FUNCTION ---------->

function submitSasha() {
    
    //----------- DIAMONDS ROTATING FORWARD ---------->
    
    document.getElementById("slidepicdiv1").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv1").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv1").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv1").style.transitionDelay = "3s";
        
    document.getElementById("slidepicdiv2").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv2").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv2").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv2").style.transitionDelay = "3.5s";
        
    document.getElementById("slidepicdiv3").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv3").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv3").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv3").style.transitionDelay = "2.5s";
        
    document.getElementById("slidepicdiv4").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv4").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv4").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv4").style.transitionDelay = "4s";
        
    document.getElementById("slidepicdiv5").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv5").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv5").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv5").style.transitionDelay = "3s";
        
    document.getElementById("slidepicdiv6").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv6").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv6").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv6").style.transitionDelay = "2s";
        
    document.getElementById("slidepicdiv7").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv7").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv7").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv7").style.transitionDelay = "3.5s";
        
    document.getElementById("slidepicdiv8").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv8").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv8").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv8").style.transitionDelay = "2.5s";
        
    document.getElementById("slidepicdiv9").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv9").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv9").style.transition = "2.5s";
    
                document.getElementById("slidepicdiv9").style.transitionDelay = "3s";
    
    //----------- SHUFFLE PHRASES ROTATING FORWARD ---------->
    
    document.getElementById("shufflephrase1").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase1").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase1").style.transition = "1.5s";
    
                document.getElementById("shufflephrase1").style.transitionDelay = "3.2s";
        
    document.getElementById("shufflephrase2").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase2").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase2").style.transition = "1.5s";
    
                document.getElementById("shufflephrase2").style.transitionDelay = "2.9s";
        
    document.getElementById("shufflephrase3").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase3").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase3").style.transition = "1.5s";
    
                document.getElementById("shufflephrase3").style.transitionDelay = "2.6s";
        
    document.getElementById("shufflephrase4").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase4").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase4").style.transition = "1.5s";
    
                document.getElementById("shufflephrase4").style.transitionDelay = "2.3s";
        
    document.getElementById("shufflephrase5").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase5").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase5").style.transition = "1.5s";
    
                document.getElementById("shufflephrase5").style.transitionDelay = "2s";
        
    document.getElementById("shufflephrase6").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase6").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase6").style.transition = "1.5s";
    
                document.getElementById("shufflephrase6").style.transitionDelay = "1.7s";
        
    document.getElementById("shufflephrase7").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase7").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase7").style.transition = "1.5s";
    
                document.getElementById("shufflephrase7").style.transitionDelay = "1.4s";
    
    document.getElementById("shufflephrase8").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase8").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase8").style.transition = "1.5s";
    
                document.getElementById("shufflephrase8").style.transitionDelay = "1.1s";
        
    document.getElementById("shufflephrase9").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase9").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase9").style.transition = "1.5s";
    
                document.getElementById("shufflephrase9").style.transitionDelay = "0.8s";
        
    document.getElementById("shufflephrase10").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase10").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase10").style.transition = "1.5s";
    
                document.getElementById("shufflephrase10").style.transitionDelay = "0.5s";
    
    //----------- DIALOG BUTTON ROTATING BACK ---------->
    
    document.getElementById("asksashainputdiv").style.transform = "rotateY(-90deg)";
    
        document.getElementById("asksashainputdiv").style.transformOrigin = "center";
    
            document.getElementById("asksashainputdiv").style.transition = "1s";
    
                document.getElementById("asksashainputdiv").style.transitionDelay = "0s";
    
    //----------- SIGNATURE ROTATING BACK ---------->
    
    document.getElementById("signaturediv").style.transform = "rotateY(0deg)";
    
        document.getElementById("signaturediv").style.transformOrigin = "left";
    
            document.getElementById("signaturediv").style.transition = "2s";
    
                document.getElementById("signaturediv").style.transitionDelay = "2.5s";
    
    TimelineMax({paused: true});
    
}

//----------- LIGHTBOX IMAGES FUNCTION ---------->

lightbox.option({
    
    'resizeDuration': 200,
    
    'fitImagesInViewport': true,
    
    'wrapAround': true
    
});

//----------- SHOW REEL BUTTON ONCLICK FUNCTION ---------->

function showReel() {
    
    //----------- DIAMONDS ROTATING BACK ---------->
    
    document.getElementById("slidepicdiv1").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv1").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv1").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv1").style.transitionDelay = "2s";
        
    document.getElementById("slidepicdiv2").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv2").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv2").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv2").style.transitionDelay = "1.5s";
        
    document.getElementById("slidepicdiv3").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv3").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv3").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv3").style.transitionDelay = "2.5s";
        
    document.getElementById("slidepicdiv4").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv4").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv4").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv4").style.transitionDelay = "1s";
        
    document.getElementById("slidepicdiv5").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv5").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv5").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv5").style.transitionDelay = "2s";
        
    document.getElementById("slidepicdiv6").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv6").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv6").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv6").style.transitionDelay = "3s";
        
    document.getElementById("slidepicdiv7").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv7").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv7").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv7").style.transitionDelay = "1.5s";
        
    document.getElementById("slidepicdiv8").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv8").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv8").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv8").style.transitionDelay = "2.5s";
        
    document.getElementById("slidepicdiv9").style.transform = "rotateY(-90deg)";
    
        document.getElementById("slidepicdiv9").style.transformOrigin = "left";
    
            document.getElementById("slidepicdiv9").style.transition = "2.5s";
    
                document.getElementById("slidepicdiv9").style.transitionDelay = "2s";
    
    //----------- SHUFFLE PHRASES ROTATING BACK ---------->
    
    document.getElementById("shufflephrase1").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase1").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase1").style.transition = "1.5s";
    
                document.getElementById("shufflephrase1").style.transitionDelay = "0.5s";
        
    document.getElementById("shufflephrase2").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase2").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase2").style.transition = "1.5s";
    
                document.getElementById("shufflephrase2").style.transitionDelay = "0.8s";
        
    document.getElementById("shufflephrase3").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase3").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase3").style.transition = "1.5s";
    
                document.getElementById("shufflephrase3").style.transitionDelay = "1.1s";
        
    document.getElementById("shufflephrase4").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase4").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase4").style.transition = "1.5s";
    
                document.getElementById("shufflephrase4").style.transitionDelay = "1.4s";
        
    document.getElementById("shufflephrase5").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase5").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase5").style.transition = "1.5s";
    
                document.getElementById("shufflephrase5").style.transitionDelay = "1.7s";
        
    document.getElementById("shufflephrase6").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase6").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase6").style.transition = "1.5s";
    
                document.getElementById("shufflephrase6").style.transitionDelay = "2s";
        
    document.getElementById("shufflephrase7").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase7").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase7").style.transition = "1.5s";
    
                document.getElementById("shufflephrase7").style.transitionDelay = "2.3s";
    
    document.getElementById("shufflephrase8").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase8").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase8").style.transition = "1.5s";
    
                document.getElementById("shufflephrase8").style.transitionDelay = "2.6s";
        
    document.getElementById("shufflephrase9").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase9").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase9").style.transition = "1.5s";
    
                document.getElementById("shufflephrase9").style.transitionDelay = "2.9s";
        
    document.getElementById("shufflephrase10").style.transform = "rotateY(-90deg)";
    
        document.getElementById("shufflephrase10").style.transformOrigin = "right";
    
            document.getElementById("shufflephrase10").style.transition = "1.5s";
    
                document.getElementById("shufflephrase10").style.transitionDelay = "3.2s";
    
    //----------- REEL CONTAINER ROTATING IN ---------->
    
    document.getElementById("picturereelcontainer").style.transform = "rotateY(0deg)";
    
        document.getElementById("picturereelcontainer").style.transformOrigin = "center";
    
            document.getElementById("picturereelcontainer").style.transition = "2.5s";
                document.getElementById("picturereelcontainer").style.transitionDelay = "5s";
    
    //----------- SIGNATURE ROTATING OUT ---------->
    
    document.getElementById("signaturediv").style.transform = "rotateY(-90deg)";
    
        document.getElementById("signaturediv").style.transformOrigin = "left";
    
            document.getElementById("signaturediv").style.transition = "2s";
    
                document.getElementById("signaturediv").style.transitionDelay = "0s";
    
    //----------- REEL PICS ROTATING IN ---------->
    
    document.getElementById("picturediv1").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv1").style.transformOrigin = "center";
    
            document.getElementById("picturediv1").style.transition = "1s";
    
                document.getElementById("picturediv1").style.transitionDelay = "6s";
    
    document.getElementById("picturediv2").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv2").style.transformOrigin = "center";
    
            document.getElementById("picturediv2").style.transition = "1s";
    
                document.getElementById("picturediv2").style.transitionDelay = "6.2s";
    
    document.getElementById("picturediv3").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv3").style.transformOrigin = "center";
    
            document.getElementById("picturediv3").style.transition = "1s";
    
                document.getElementById("picturediv3").style.transitionDelay = "6.2s";
    
    document.getElementById("picturediv4").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv4").style.transformOrigin = "center";
    
            document.getElementById("picturediv4").style.transition = "1s";
    
                document.getElementById("picturediv4").style.transitionDelay = "6.4s";
    
    document.getElementById("picturediv5").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv5").style.transformOrigin = "center";
    
            document.getElementById("picturediv5").style.transition = "1s";
    
                document.getElementById("picturediv5").style.transitionDelay = "6.4s";
    
    document.getElementById("picturediv6").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv6").style.transformOrigin = "center";
    
            document.getElementById("picturediv6").style.transition = "1s";
    
                document.getElementById("picturediv6").style.transitionDelay = "6.4s";
    
    document.getElementById("picturediv7").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv7").style.transformOrigin = "center";
    
            document.getElementById("picturediv7").style.transition = "1s";
    
                document.getElementById("picturediv7").style.transitionDelay = "6.6s";
    
    document.getElementById("picturediv8").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv8").style.transformOrigin = "center";
    
            document.getElementById("picturediv8").style.transition = "1s";
    
                document.getElementById("picturediv8").style.transitionDelay = "6.6s";
    
    document.getElementById("picturediv9").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv9").style.transformOrigin = "center";
    
            document.getElementById("picturediv9").style.transition = "1s";
    
                document.getElementById("picturediv9").style.transitionDelay = "6.6s";
    
    document.getElementById("picturediv10").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv10").style.transformOrigin = "center";
    
            document.getElementById("picturediv10").style.transition = "1s";
    
                document.getElementById("picturediv10").style.transitionDelay = "6.6s";
    
    document.getElementById("picturediv11").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv11").style.transformOrigin = "center";
    
            document.getElementById("picturediv11").style.transition = "1s";
    
                document.getElementById("picturediv11").style.transitionDelay = "6.8s";
    
    document.getElementById("picturediv12").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv12").style.transformOrigin = "center";
    
            document.getElementById("picturediv12").style.transition = "1s";
    
                document.getElementById("picturediv12").style.transitionDelay = "6.8s";
    
    document.getElementById("picturediv13").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv13").style.transformOrigin = "center";
    
            document.getElementById("picturediv13").style.transition = "1s";
    
                document.getElementById("picturediv13").style.transitionDelay = "6.8s";
    
    document.getElementById("picturediv14").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv14").style.transformOrigin = "center";
    
            document.getElementById("picturediv14").style.transition = "1s";
    
                document.getElementById("picturediv14").style.transitionDelay = "7s";
    
    document.getElementById("picturediv15").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv15").style.transformOrigin = "center";
    
            document.getElementById("picturediv15").style.transition = "1s";
    
                document.getElementById("picturediv15").style.transitionDelay = "7s";
    
    document.getElementById("picturediv16").style.transform = "rotateX(0deg)";
    
        document.getElementById("picturediv16").style.transformOrigin = "center";
    
            document.getElementById("picturediv16").style.transition = "1s";
    
                document.getElementById("picturediv16").style.transitionDelay = "7.2s";
    
    //----------- X BUTTON SHOWING ---------->
    
    document.getElementById("picturereelXbutton").style.transform = "scale(1)";
    
        document.getElementById("picturereelXbutton").style.transformOrigin = "center";
    
            document.getElementById("picturereelXbutton").style.transition = "2s";
    
                document.getElementById("picturereelXbutton").style.transitionDelay = "6.2s";
    
}

//----------- CLOSE REEL BUTTON ONCLICK FUNCTION ---------->

function closeReel() {
    
    //----------- DIAMONDS ROTATING FORWARD ---------->
    
    document.getElementById("slidepicdiv1").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv1").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv1").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv1").style.transitionDelay = "4s";
        
    document.getElementById("slidepicdiv2").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv2").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv2").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv2").style.transitionDelay = "4.5s";
        
    document.getElementById("slidepicdiv3").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv3").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv3").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv3").style.transitionDelay = "3.5s";
        
    document.getElementById("slidepicdiv4").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv4").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv4").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv4").style.transitionDelay = "5s";
        
    document.getElementById("slidepicdiv5").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv5").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv5").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv5").style.transitionDelay = "4s";
        
    document.getElementById("slidepicdiv6").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv6").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv6").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv6").style.transitionDelay = "3s";
        
    document.getElementById("slidepicdiv7").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv7").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv7").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv7").style.transitionDelay = "4.5s";
        
    document.getElementById("slidepicdiv8").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv8").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv8").style.transition = "1.5s";
    
                document.getElementById("slidepicdiv8").style.transitionDelay = "3.5s";
        
    document.getElementById("slidepicdiv9").style.transform = "rotateY(0deg)";
    
        document.getElementById("slidepicdiv9").style.transformOrigin = "right";
    
            document.getElementById("slidepicdiv9").style.transition = "2.5s";
    
                document.getElementById("slidepicdiv9").style.transitionDelay = "4s";
    
    //----------- SHUFFLE PHRASES ROTATING FORWARD ---------->
    
    document.getElementById("shufflephrase1").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase1").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase1").style.transition = "1.5s";
    
                document.getElementById("shufflephrase1").style.transitionDelay = "4.7s";
        
    document.getElementById("shufflephrase2").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase2").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase2").style.transition = "1.5s";
    
                document.getElementById("shufflephrase2").style.transitionDelay = "4.4s";
        
    document.getElementById("shufflephrase3").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase3").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase3").style.transition = "1.5s";
    
                document.getElementById("shufflephrase3").style.transitionDelay = "4.1s";
        
    document.getElementById("shufflephrase4").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase4").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase4").style.transition = "1.5s";
    
                document.getElementById("shufflephrase4").style.transitionDelay = "3.8s";
        
    document.getElementById("shufflephrase5").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase5").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase5").style.transition = "1.5s";
    
                document.getElementById("shufflephrase5").style.transitionDelay = "3.5s";
        
    document.getElementById("shufflephrase6").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase6").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase6").style.transition = "1.5s";
    
                document.getElementById("shufflephrase6").style.transitionDelay = "3.2s";
        
    document.getElementById("shufflephrase7").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase7").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase7").style.transition = "1.5s";
    
                document.getElementById("shufflephrase7").style.transitionDelay = "2.9s";
    
    document.getElementById("shufflephrase8").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase8").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase8").style.transition = "1.5s";
    
                document.getElementById("shufflephrase8").style.transitionDelay = "2.6s";
        
    document.getElementById("shufflephrase9").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase9").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase9").style.transition = "1.5s";
    
                document.getElementById("shufflephrase9").style.transitionDelay = "2.3s";
        
    document.getElementById("shufflephrase10").style.transform = "rotateY(0deg)";
    
        document.getElementById("shufflephrase10").style.transformOrigin = "left";
    
            document.getElementById("shufflephrase10").style.transition = "1.5s";
    
                document.getElementById("shufflephrase10").style.transitionDelay = "2s";
    
    //----------- REEL CONTAINER ROTATING BACK ---------->
    
    document.getElementById("picturereelcontainer").style.transform = "rotateY(-90deg)";
    
        document.getElementById("picturereelcontainer").style.transformOrigin = "center";
    
            document.getElementById("picturereelcontainer").style.transition = "1s";
                
                document.getElementById("picturereelcontainer").style.transitionDelay = "1.5s";
    
    //----------- SIGNATURE ROTATING BACK ---------->
    
    document.getElementById("signaturediv").style.transform = "rotateY(0deg)";
    
        document.getElementById("signaturediv").style.transformOrigin = "left";
    
            document.getElementById("signaturediv").style.transition = "2s";
    
                document.getElementById("signaturediv").style.transitionDelay = "3.5s";
    
    //----------- REEL PICS ROTATING OUT ---------->
    
    document.getElementById("picturediv1").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv1").style.transformOrigin = "center";
    
            document.getElementById("picturediv1").style.transition = "1s";
    
                document.getElementById("picturediv1").style.transitionDelay = "0.2s";
    
    document.getElementById("picturediv2").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv2").style.transformOrigin = "center";
    
            document.getElementById("picturediv2").style.transition = "1s";
    
                document.getElementById("picturediv2").style.transitionDelay = "0.4s";
    
    document.getElementById("picturediv3").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv3").style.transformOrigin = "center";
    
            document.getElementById("picturediv3").style.transition = "1s";
    
                document.getElementById("picturediv3").style.transitionDelay = "0.4s";
    
    document.getElementById("picturediv4").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv4").style.transformOrigin = "center";
    
            document.getElementById("picturediv4").style.transition = "1s";
    
                document.getElementById("picturediv4").style.transitionDelay = "0.6s";
    
    document.getElementById("picturediv5").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv5").style.transformOrigin = "center";
    
            document.getElementById("picturediv5").style.transition = "1s";
    
                document.getElementById("picturediv5").style.transitionDelay = "0.6s";
    
    document.getElementById("picturediv6").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv6").style.transformOrigin = "center";
    
            document.getElementById("picturediv6").style.transition = "1s";
    
                document.getElementById("picturediv6").style.transitionDelay = "0.6s";
    
    document.getElementById("picturediv7").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv7").style.transformOrigin = "center";
    
            document.getElementById("picturediv7").style.transition = "1s";
    
                document.getElementById("picturediv7").style.transitionDelay = "0.8s";
    
    document.getElementById("picturediv8").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv8").style.transformOrigin = "center";
    
            document.getElementById("picturediv8").style.transition = "1s";
    
                document.getElementById("picturediv8").style.transitionDelay = "0.8s";
    
    document.getElementById("picturediv9").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv9").style.transformOrigin = "center";
    
            document.getElementById("picturediv9").style.transition = "1s";
    
                document.getElementById("picturediv9").style.transitionDelay = "0.8s";
    
    document.getElementById("picturediv10").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv10").style.transformOrigin = "center";
    
            document.getElementById("picturediv10").style.transition = "1s";
    
                document.getElementById("picturediv10").style.transitionDelay = "0.8s";
    
    document.getElementById("picturediv11").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv11").style.transformOrigin = "center";
    
            document.getElementById("picturediv11").style.transition = "1s";
    
                document.getElementById("picturediv11").style.transitionDelay = "1s";
    
    document.getElementById("picturediv12").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv12").style.transformOrigin = "center";
    
            document.getElementById("picturediv12").style.transition = "1s";
    
                document.getElementById("picturediv12").style.transitionDelay = "1s";
    
    document.getElementById("picturediv13").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv13").style.transformOrigin = "center";
    
            document.getElementById("picturediv13").style.transition = "1s";
    
                document.getElementById("picturediv13").style.transitionDelay = "1s";
    
    document.getElementById("picturediv14").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv14").style.transformOrigin = "center";
    
            document.getElementById("picturediv14").style.transition = "1s";
    
                document.getElementById("picturediv14").style.transitionDelay = "1.2s";
    
    document.getElementById("picturediv15").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv15").style.transformOrigin = "center";
    
            document.getElementById("picturediv15").style.transition = "1s";
    
                document.getElementById("picturediv15").style.transitionDelay = "1.2s";
    
    document.getElementById("picturediv16").style.transform = "rotateX(-90deg)";
    
        document.getElementById("picturediv16").style.transformOrigin = "center";
    
            document.getElementById("picturediv16").style.transition = "1s";
    
                document.getElementById("picturediv16").style.transitionDelay = "1.4s";
    
    //----------- X BUTTON CLOSING ---------->
    
    document.getElementById("picturereelXbutton").style.transform = "scale(0)";
    
        document.getElementById("picturereelXbutton").style.transformOrigin = "center";
    
            document.getElementById("picturereelXbutton").style.transition = "2s";
    
                document.getElementById("picturereelXbutton").style.transitionDelay = "0.2s";
    
}

//----------- TIMELAPSE 1 VIDEO SCROLL BLUR FUNCTION ---------->

/*

$(window).scroll(function() {
    
    var restPosition = window.scrollY;
    
    if (restPosition >= 40 && restPosition < 80) {
        
        $('#timelapsevideo1').css('filter', 'blur(1px)');
        
    } else if (restPosition < 40) {
        
        $('#timelapsevideo1').css('filter', 'blur(0px)');
        
    }
    
    //--- IF STATEMENT 2 --->
    
    if (restPosition >= 80 && restPosition < 120) {
        
        $('#timelapsevideo1').css('filter', 'blur(2px)');
        
    } else if (restPosition < 80 && restPosition >= 40) {
        
        $('#timelapsevideo1').css('filter', 'blur(1px)');
        
    }
    
    //--- IF STATEMENT 3 --->
    
    if (restPosition >= 120 && restPosition < 160) {
        
        $('#timelapsevideo1').css('filter', 'blur(3px)');
        
    } else if (restPosition < 120 && restPosition >= 80) {
        
        $('#timelapsevideo1').css('filter', 'blur(2px)');
        
    }
    
    //--- IF STATEMENT 4 --->
    
    if (restPosition >= 160 && restPosition < 200) {
        
        $('#timelapsevideo1').css('filter', 'blur(4px)');
        
    } else if (restPosition < 160 && restPosition >= 120) {
        
        $('#timelapsevideo1').css('filter', 'blur(3px)');
        
    }
    
    //--- IF STATEMENT 5 --->
    
    if (restPosition >= 200 && restPosition < 240) {
        
        $('#timelapsevideo1').css('filter', 'blur(5px)');
        
    } else if (restPosition < 200 && restPosition >= 160) {
        
        $('#timelapsevideo1').css('filter', 'blur(4px)');
        
    }
    
    //--- IF STATEMENT 6 --->
    
    if (restPosition >= 240 && restPosition < 280) {
        
        $('#timelapsevideo1').css('filter', 'blur(6px)');
        
    } else if (restPosition < 240 && restPosition >= 200) {
        
        $('#timelapsevideo1').css('filter', 'blur(5px)');
        
    }
    
    //--- IF STATEMENT 7 --->
    
    if (restPosition >= 280 && restPosition < 320) {
        
        $('#timelapsevideo1').css('filter', 'blur(7px)');
        
    } else if (restPosition < 280 && restPosition >= 240) {
        
        $('#timelapsevideo1').css('filter', 'blur(6px)');
        
    }
    
    //--- IF STATEMENT 8 --->
    
    if (restPosition >= 320 && restPosition < 360) {
        
        $('#timelapsevideo1').css('filter', 'blur(8px)');
        
    } else if (restPosition < 320 && restPosition >= 280) {
        
        $('#timelapsevideo1').css('filter', 'blur(7px)');
        
    }
    
    //--- IF STATEMENT 9 --->
    
    if (restPosition >= 360 && restPosition < 400) {
        
        $('#timelapsevideo1').css('filter', 'blur(9px)');
        
    } else if (restPosition < 360 && restPosition >= 320) {
        
        $('#timelapsevideo1').css('filter', 'blur(8px)');
        
    }
    
    //--- IF STATEMENT 10 --->
    
    if (restPosition >= 400 && restPosition < 440) {
        
        $('#timelapsevideo1').css('filter', 'blur(10px)');
        
    } else if (restPosition < 400 && restPosition >= 360) {
        
        $('#timelapsevideo1').css('filter', 'blur(9px)');
        
    }
    
    //--- IF STATEMENT 11 --->
    
    if (restPosition >= 440 && restPosition < 480) {
        
        $('#timelapsevideo1').css('filter', 'blur(11px)');
        
    } else if (restPosition < 440 && restPosition >= 400) {
        
        $('#timelapsevideo1').css('filter', 'blur(10px)');
        
    }
    
    //--- IF STATEMENT 12 --->
    
    if (restPosition >= 480) {
        
        $('#timelapsevideo1').css('filter', '12px');
        
    } else if (restPosition < 480 && restPosition >= 440) {
        
        $('#timelapsevideo1').css('filter', '11px');
        
    }
    
});

*/

//------------------- TEXT SHUFFLE EFFECT FUNCTIONS ------------------>

//--------------------------- PHRASE 1 (HELLO WORLD...) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr1');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["H", "E", "L", "L", "O", ",", "&nbsp;", "W", "O", "R", "L", "D", ".", ".", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr1:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr1:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr1').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr1');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//--------------------------- PHRASE 2 (MY NAME IS...) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr2');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["M", "Y", "&nbsp;", "N", "A", "M", "E", "&nbsp;", "I", "S", ".", ".", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr2:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr2:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr2').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr2');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//--------------------------- PHRASE 3 (SASHA WHITE!) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr3');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["S", "A", "S", "H", "A", "&nbsp;", "W", "H", "I", "T", "E", "!"];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr3:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr3:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr3').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr3');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//----------------------- PHRASE 4 (I AM FIRST AND FOREMOST...) ----------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr4');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["I", "&nbsp;", "A", "M", ",", "&nbsp;", "F", "I", "R", "S", "T", "&nbsp;", "&", "&nbsp;", "F", "O", "R", "E", "M", "O", "S", "T", ".", ".", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr4:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr4:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr4').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr4');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//--------------------------- PHRASE 5 (A BRAIN FUCKER.) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr5');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["A", "&nbsp;", "B", "R", "A", "I", "N", "&nbsp;", "F", "U", "C", "K", "E", "R", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr5:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr5:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr5').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr5');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//--------------------------- PHRASE 6 (A SAVIOR OF PEOPLE.) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr6');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["A", ".", ".", ".", "&nbsp;", "S", "A", "V", "I", "O", "R", "&nbsp;", "O", "F", "&nbsp;", "P", "E", "O", "P", "L", "E", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr6:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr6:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr6').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr6');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//--------------------------- PHRASE 7 (A TALENT AGENT.) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr7');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["A", ".", ".", ".", "&nbsp;", "T", "A", "L", "E", "N", "T", "&nbsp;", "A", "G", "E", "N", "T", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr7:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr7:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr7').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr7');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//------------------------- PHRASE 8 (AND ABOVE ALL ELSE...) ------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr8');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["A", "N", "D", "&nbsp;", "A", "B", "O", "V", "E", "&nbsp;", "A", "L", "L", "&nbsp;", "E", "L", "S", "E", ".", ".", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr8:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr8:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr8').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr8');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//------------------------- PHRASE 9 (YOUR TRUSTED CONFIDANT.) ------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr9');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["Y", "O", "U", "R", "&nbsp;", "T", "R", "U", "S", "T", "E", "D", "&nbsp;", "C", "O", "N", "F", "I", "D", "A", "N", "T", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr9:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr9:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr9').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr9');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//------------------------ PHRASE 10 (I AM HERE TO HELP YOU!) ------------------------>

$(document).ready(function() {

     var $randomnbr = $('.nbr10');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["I", "&nbsp;", "A", "M", "&nbsp;", "H", "E", "R", "E", "&nbsp;", "T", "O", "&nbsp;", "H", "E", "L", "P", "&nbsp;", "Y", "O", "U", "!"];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr10:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr10:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr10').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr10');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//------------- COLLAGE DESERT PHRASES SCROLL FUNCTION ------------>

window.addEventListener("DOMContentLoaded", scrollLoop, false);

var desertHeader1 = document.querySelector("#desertheader1");

var desertHeader2 = document.querySelector("#desertheader2");

var desertHeader3 = document.querySelector("#desertheader3");

var desertHeader4 = document.querySelector("#desertheader4");

var desertHeader5 = document.querySelector("#desertheader5");

var headersBackground = document.querySelector("#desertphrasesbackground");

var typeEffect = document.querySelector("#typeeffect");

var typeEffectBackground = document.querySelector("#typeeffectbackground");

var xScrollPosition;

var yScrollPosition;

function scrollLoop(e) {
    
    xScrollPosition = window.scrollX;
    
    yScrollPosition = window.scrollY;
    
    if (yScrollPosition >= 1740) {
        
        setTranslate(0, yScrollPosition * -0.4, desertHeader1);
    
        setTranslate(0, yScrollPosition * 0.4, desertHeader2);
    
        setTranslate(0, yScrollPosition * -0.4, desertHeader3);
    
        setTranslate(0, yScrollPosition * 0.4, desertHeader4);
    
        setTranslate(0, yScrollPosition * -0.4, desertHeader5);
        
    } else if (yScrollPosition > 1740) {
        
        setTranslate(0, yScrollPosition * 0, desertHeader1);
    
        setTranslate(0, yScrollPosition * 0, desertHeader2);
    
        setTranslate(0, yScrollPosition * 0, desertHeader3);
    
        setTranslate(0, yScrollPosition * 0, desertHeader4);
    
        setTranslate(0, yScrollPosition * 0, desertHeader5);
        
    }
    
    if (yScrollPosition > 2000) {
        
        document.getElementById("desertheader1").style.zIndex = "500";
    
        document.getElementById("desertheader2").style.zIndex = "500";
    
        document.getElementById("desertheader3").style.zIndex = "500";
    
        document.getElementById("desertheader4").style.zIndex = "500";
    
        document.getElementById("desertheader5").style.zIndex = "500";
        
        document.getElementById("desertheader5").style.zIndex = "500";
        
    }
    
    if (yScrollPosition < 2170) {
        
        document.getElementById("desertphrasesbackground").style.display = "none";
        
    }
    
    if (yScrollPosition > 2170 && yScrollPosition < 2230) {
        
        document.getElementById("desertphrasesbackground").style.display = "block";
        
        document.getElementById("desertphrasesbackground").style.zIndex = "499";
        
    }
    
    if (yScrollPosition > 2230) {
        
        document.getElementById("desertphrasesbackground").style.display = "none";
        
    }
    
    requestAnimationFrame(scrollLoop);
    
}

function setTranslate(xPos, yPos, el) {
    
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
    
}

//-------------- COLLAGE PARALLAX VERTICAL SCROLL FUNCTION ------------->

$(window).scroll(function() {
    
    var restPosition = window.scrollY;
    
    if (restPosition >= 1760 && restPosition < 1800) {
        
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
        
    } else if (restPosition < 1760) {
        
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
    
    if (restPosition >= 1800 && restPosition < 1840) {
        
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
        
    } else if (restPosition < 1800 && restPosition >= 1760) {
        
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
    
    if (restPosition >= 1840 && restPosition < 1880) {
        
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
        
    } else if (restPosition < 1840 && restPosition >= 1800) {
        
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
    
    if (restPosition >= 1880 && restPosition < 1920) {
        
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
        
    } else if (restPosition < 1880 && restPosition >= 1840) {
        
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
    
    if (restPosition >= 1920 && restPosition < 1960) {
        
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
        
    } else if (restPosition < 1920 && restPosition >= 1880) {
        
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
    
    if (restPosition >= 1960 && restPosition < 2000) {
        
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
        
    } else if (restPosition < 1960 && restPosition >= 1920) {
        
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
    
    if (restPosition >= 2000 && restPosition < 2040) {
        
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
        
    } else if (restPosition < 2000 && restPosition >= 1960) {
        
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
    
    if (restPosition >= 2040 && restPosition < 2080) {
        
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
        
    } else if (restPosition < 2040 && restPosition >= 2000) {
        
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
    
    if (restPosition >= 2080 && restPosition < 2120) {
        
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
        
    } else if (restPosition < 2080 && restPosition >= 2040) {
        
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
    
    if (restPosition >= 2120 && restPosition < 2160) {
        
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
        
    } else if (restPosition < 2120 && restPosition >= 2080) {
        
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
    
    if (restPosition >= 2160 && restPosition < 2200) {
        
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
        
    } else if (restPosition < 2160 && restPosition >= 2120) {
        
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
    
    if (restPosition >= 2200) {
        
        document.getElementById("colT1").style.top = "30%";
    
        document.getElementById("colT2").style.top = "47.1%";
    
        document.getElementById("colT3").style.top = "53%";
    
        document.getElementById("colT4").style.top = "19.7%";
    
        document.getElementById("colT5").style.top = "23.2%";
    
        document.getElementById("colT6").style.top = "27.7%";
    
        document.getElementById("colT7").style.top = "25.2%";
    
        document.getElementById("colT8").style.top = "33.7%";
    
        document.getElementById("colT9").style.top = "51.3%";
    
        document.getElementById("colT10").style.top = "23%";
    
        document.getElementById("colT11").style.top = "40.92%";
    
        document.getElementById("colT12").style.top = "43%";
        
    } else if (restPosition < 2200 && restPosition >= 2160) {
        
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
    
    if (restPosition >= 1760 && restPosition < 1800) {
        
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
        
    } else if (restPosition < 1760) {
        
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
    
    if (restPosition >= 1800 && restPosition < 1840) {
        
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
        
    } else if (restPosition < 1800 && restPosition >= 1760) {
        
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
    
    if (restPosition >= 1840 && restPosition < 1880) {
        
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
        
    } else if (restPosition < 1840 && restPosition >= 1800) {
        
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
    
    if (restPosition >= 1880 && restPosition < 1920) {
        
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
        
    } else if (restPosition < 1880 && restPosition >= 1840) {
        
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
    
    if (restPosition >= 1920 && restPosition < 1960) {
        
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
        
    } else if (restPosition < 1920 && restPosition >= 1880) {
        
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
    
    if (restPosition >= 1960 && restPosition < 2000) {
        
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
        
    } else if (restPosition < 1960 && restPosition >= 1920) {
        
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
    
    if (restPosition >= 2000 && restPosition < 2040) {
        
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
        
    } else if (restPosition < 2000 && restPosition >= 1960) {
        
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
    
    if (restPosition >= 2040 && restPosition < 2080) {
        
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
        
    } else if (restPosition < 2040 && restPosition >= 2000) {
        
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
    
    if (restPosition >= 2080 && restPosition < 2120) {
        
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
        
    } else if (restPosition < 2080 && restPosition >= 2040) {
        
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
    
    if (restPosition >= 2120 && restPosition < 2160) {
        
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
        
    } else if (restPosition < 2120 && restPosition >= 2080) {
        
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
    
    if (restPosition >= 2160 && restPosition < 2200) {
        
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
        
    } else if (restPosition < 2160 && restPosition >= 2120) {
        
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
    
    if (restPosition >= 2200) {
        
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
        
    } else if (restPosition < 2200 && restPosition >= 2160) {
        
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
    
    if (restPosition >= 1760 && restPosition < 1800) {
        
        $('.collageimage').css('opacity', '0.05');
        
    } else if (restPosition < 1760) {
        
        $('.collageimage').css('opacity', '0');
        
    }
    
    //--- IF STATEMENT 2 --->
    
    if (restPosition >= 1800 && restPosition < 1840) {
        
        $('.collageimage').css('opacity', '0.1');
        
    } else if (restPosition < 1800 && restPosition >= 1760) {
        
        $('.collageimage').css('opacity', '0.05');
        
    }
    
    //--- IF STATEMENT 3 --->
    
    if (restPosition >= 1840 && restPosition < 1880) {
        
        $('.collageimage').css('opacity', '0.15');
        
    } else if (restPosition < 1840 && restPosition >= 1880) {
        
        $('.collageimage').css('opacity', '0.1');
        
    }
    
    //--- IF STATEMENT 4 --->
    
    if (restPosition >= 1880 && restPosition < 1920) {
        
        $('.collageimage').css('opacity', '0.2');
        
    } else if (restPosition < 1880 && restPosition >= 1840) {
        
        $('.collageimage').css('opacity', '0.15');
        
    }
    
    //--- IF STATEMENT 5 --->
    
    if (restPosition >= 1920 && restPosition < 1960) {
        
        $('.collageimage').css('opacity', '0.3');
        
    } else if (restPosition < 1920 && restPosition >= 1880) {
        
        $('.collageimage').css('opacity', '0.2');
        
    }
    
    //--- IF STATEMENT 6 --->
    
    if (restPosition >= 1960 && restPosition < 2000) {
        
        $('.collageimage').css('opacity', '0.4');
        
    } else if (restPosition < 1960 && restPosition >= 1920) {
        
        $('.collageimage').css('opacity', '0.3');
        
    }
    
    //--- IF STATEMENT 7 --->
    
    if (restPosition >= 2000 && restPosition < 2040) {
        
        $('.collageimage').css('opacity', '0.5');
        
    } else if (restPosition < 2000 && restPosition >= 1960) {
        
        $('.collageimage').css('opacity', '0.4');
        
    }
    
    //--- IF STATEMENT 8 --->
    
    if (restPosition >= 2040 && restPosition < 2080) {
        
        $('.collageimage').css('opacity', '0.6');
        
    } else if (restPosition < 2040 && restPosition >= 2000) {
        
        $('.collageimage').css('opacity', '0.5');
        
    }
    
    //--- IF STATEMENT 9 --->
    
    if (restPosition >= 2080 && restPosition < 2120) {
        
        $('.collageimage').css('opacity', '0.7');
        
    } else if (restPosition < 2080 && restPosition >= 2040) {
        
        $('.collageimage').css('opacity', '0.6');
        
    }
    
    //--- IF STATEMENT 10 --->
    
    if (restPosition >= 2120 && restPosition < 2160) {
        
        $('.collageimage').css('opacity', '0.8');
        
    } else if (restPosition < 2120 && restPosition >= 2080) {
        
        $('.collageimage').css('opacity', '0.7');
        
    }
    
    //--- IF STATEMENT 11 --->
    
    if (restPosition >= 2160 && restPosition < 2200) {
        
        $('.collageimage').css('opacity', '0.9');
        
    } else if (restPosition < 2160 && restPosition >= 2120) {
        
        $('.collageimage').css('opacity', '0.8');
        
    }
    
    //--- IF STATEMENT 12 --->
    
    if (restPosition >= 2200) {
        
        $('.collageimage').css('opacity', '1');
        
    } else if (restPosition < 2200 && restPosition >= 2160) {
        
        $('.collageimage').css('opacity', '0.9');
        
    }
    
});

//-------------- COLLAGE PARALLAX BLUR FUNCTION ------------->

/*

function changeBlur() {
    
    var restPosition = window.scrollY;
    
    //--- IF STATEMENT 1 --->
    
    if (restPosition >= 1760 && restPosition < 1800) {
        
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
        
    } else if (restPosition < 1760) {
        
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
    
    if (restPosition >= 1800 && restPosition < 1840) {
        
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
        
    } else if (restPosition < 1800 && restPosition >= 1760) {
        
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
    
    if (restPosition >= 1840 && restPosition < 1880) {
        
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
        
    } else if (restPosition < 1840 && restPosition >= 1800) {
        
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
    
    if (restPosition >= 1880 && restPosition < 1920) {
        
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
        
    } else if (restPosition < 1880 && restPosition >= 1840) {
        
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
    
    if (restPosition >= 1920 && restPosition < 1960) {
        
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
        
    } else if (restPosition < 1920 && restPosition >= 1880) {
        
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
    
    if (restPosition >= 1960 && restPosition < 2000) {
        
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
        
    } else if (restPosition < 1960 && restPosition >= 1920) {
        
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
    
    if (restPosition >= 2000 && restPosition < 2040) {
        
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
        
    } else if (restPosition < 2000 && restPosition >= 1960) {
        
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
    
    if (restPosition >= 2040 && restPosition < 2080) {
        
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
        
    } else if (restPosition < 2040 && restPosition >= 2000) {
        
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
    
    if (restPosition >= 2080 && restPosition < 2120) {
        
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
        
    } else if (restPosition < 2080 && restPosition >= 2040) {
        
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
    
    if (restPosition >= 2120 && restPosition < 2160) {
        
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
        
    } else if (restPosition < 2120 && restPosition >= 2080) {
        
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
    
    if (restPosition >= 2160 && restPosition < 2200) {
        
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
        
    } else if (restPosition < 2160 && restPosition >= 2120) {
        
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
    
    if (restPosition >= 2200) {
        
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
        
    } else if (restPosition < 2200 && restPosition >= 2160) {
        
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

*/

//------------------- SMOKY TEXT EFFECT FUCNTION ------------------>

var phraseArray = [
    
    'I am talent agent',
    
    'A motivational speaker',
    
    'A muse',
    
    'A spiritual leader',
    
    'And most importantly...',
    
    'The Brain Fucker!'
    
];

var i = 0;

var aboutText = document.querySelector('#aboutsashasmokephrases');

function smoke() {
    
    aboutText.innerHTML = phraseArray[i];
    
    setTimeout(nextPhrase, 3000);
    
}

function nextPhrase() {
    
    i++;
    
    if (i > phraseArray.length - 1) {
        
        i = 0;
        
    }
    
    setTimeout(smoke);
    
}

smoke();

/*

//------------------ DESERT PICTURE BLUR EFFECT FUNCTION ----------------->

$(window).scroll(function() {
    
    var restPosition = window.scrollY;
    
    //--- IF STATEMENT 1 (BLUR TO CLEAR)-------------------------------------->
    
    if (restPosition >= 1800 && restPosition < 1840) {
        
        $('#desertpicturediv').css('filter', 'blur(10px)');
        
    } else if (restPosition < 1800) {
        
        $('#desertpicturediv').css('filter', 'blur(11px)');
        
    }
    
    //--- IF STATEMENT 2 --->
    
    if (restPosition >= 1840 && restPosition < 1880) {
        
        $('#desertpicturediv').css('filter', 'blur(9px)');
        
    } else if (restPosition < 1840 && restPosition >= 1800) {
        
        $('#desertpicturediv').css('filter', 'blur(10px)');
        
    }
    
    //--- IF STATEMENT 3 --->
    
    if (restPosition >= 1880 && restPosition < 1920) {
        
        $('#desertpicturediv').css('filter', 'blur(8px)');
        
    } else if (restPosition < 1880 && restPosition >= 1840) {
        
        $('#desertpicturediv').css('filter', 'blur(9px)');
        
    }
    
    //--- IF STATEMENT 4 --->
    
    if (restPosition >= 1920 && restPosition < 1960) {
        
        $('#desertpicturediv').css('filter', 'blur(7px)');
        
    } else if (restPosition < 1920 && restPosition >= 1880) {
        
        $('#desertpicturediv').css('filter', 'blur(8px)');
        
    }
    
    //--- IF STATEMENT 5 --->
    
    if (restPosition >= 1960 && restPosition < 2000) {
        
        $('#desertpicturediv').css('filter', 'blur(6px)');
        
    } else if (restPosition < 1960 && restPosition >= 1920) {
        
        $('#desertpicturediv').css('filter', 'blur(7px)');
        
    }
    
    //--- IF STATEMENT 6 --->
    
    if (restPosition >= 2000 && restPosition < 2040) {
        
        $('#desertpicturediv').css('filter', 'blur(5px)');
        
    } else if (restPosition < 2000 && restPosition >= 1960) {
        
        $('#desertpicturediv').css('filter', 'blur(6px)');
        
    }
    
    //--- IF STATEMENT 7 --->
    
    if (restPosition >= 2040 && restPosition < 2080) {
        
        $('#desertpicturediv').css('filter', 'blur(4px)');
        
    } else if (restPosition < 2040 && restPosition >= 2000) {
        
        $('#desertpicturediv').css('filter', 'blur(5px)');
        
    }
    
    //--- IF STATEMENT 8 --->
    
    if (restPosition >= 2080 && restPosition < 2120) {
        
        $('#desertpicturediv').css('filter', 'blur(3px)');
        
    } else if (restPosition < 2080 && restPosition >= 2040) {
        
        $('#desertpicturediv').css('filter', 'blur(4px)');
        
    }
    
    //--- IF STATEMENT 9 --->
    
    if (restPosition >= 2120 && restPosition < 2160) {
        
        $('#desertpicturediv').css('filter', 'blur(2px)');
        
    } else if (restPosition < 2120 && restPosition >= 2080) {
        
        $('#desertpicturediv').css('filter', 'blur(3px)');
        
    }
    
    //--- IF STATEMENT 10 --->
    
    if (restPosition >= 2160 && restPosition < 2200) {
        
        $('#desertpicturediv').css('filter', 'blur(1px)');
        
    } else if (restPosition < 2160 && restPosition >= 2120) {
        
        $('#desertpicturediv').css('filter', 'blur(2px)');
        
    }
    
    //--- IF STATEMENT 11 --->
    
    if (restPosition >= 2200 && restPosition < 2240) {
        
        $('#desertpicturediv').css('filter', 'blur(0.5px)');
        
    } else if (restPosition < 2200 && restPosition >= 2160) {
        
        $('#desertpicturediv').css('filter', 'blur(1px)');
        
    }
    
    //--- IF STATEMENT 12 --->
    
    if (restPosition >= 2240 && restPosition < 2280) {
        
        $('#desertpicturediv').css('filter', '0px');
        
    } else if (restPosition < 2240 && restPosition >= 2200) {
        
        $('#desertpicturediv').css('filter', '0.5px');
        
    }
    
    //--- IF STATEMENT 13 (CLEAR TO BLUR)------------------------------------->
    
    if (restPosition >= 2280 && restPosition < 2320) {
        
        $('#desertpicturediv').css('filter', 'blur(0.5px)');
        
    } else if (restPosition < 2280 && restPosition >= 2240) {
        
        $('#desertpicturediv').css('filter', 'blur(0px)');
        
    }
    
    //--- IF STATEMENT 14 --->
    
    if (restPosition >= 2320 && restPosition < 2360) {
        
        $('#desertpicturediv').css('filter', 'blur(1px)');
        
    } else if (restPosition < 2320 && restPosition >= 2280) {
        
        $('#desertpicturediv').css('filter', 'blur(0.5px)');
        
    }
    
    //--- IF STATEMENT 15 --->
    
    if (restPosition >= 2360 && restPosition < 2400) {
        
        $('#desertpicturediv').css('filter', 'blur(2px)');
        
    } else if (restPosition < 2360 && restPosition >= 2320) {
        
        $('#desertpicturediv').css('filter', 'blur(1px)');
        
    }
    
    //--- IF STATEMENT 16 --->
    
    if (restPosition >= 2400 && restPosition < 2440) {
        
        $('#desertpicturediv').css('filter', 'blur(3px)');
        
    } else if (restPosition < 2400 && restPosition >= 2360) {
        
        $('#desertpicturediv').css('filter', 'blur(2px)');
        
    }
    
    //--- IF STATEMENT 17 --->
    
    if (restPosition >= 2440 && restPosition < 2480) {
        
        $('#desertpicturediv').css('filter', 'blur(4px)');
        
    } else if (restPosition < 2440 && restPosition >= 2400) {
        
        $('#desertpicturediv').css('filter', 'blur(3px)');
        
    }
    
    //--- IF STATEMENT 18 --->
    
    if (restPosition >= 2480 && restPosition < 2520) {
        
        $('#desertpicturediv').css('filter', 'blur(5px)');
        
    } else if (restPosition < 2480 && restPosition >= 2440) {
        
        $('#desertpicturediv').css('filter', 'blur(4px)');
        
    }
    
    //--- IF STATEMENT 19 --->
    
    if (restPosition >= 2520 && restPosition < 2560) {
        
        $('#desertpicturediv').css('filter', 'blur(6px)');
        
    } else if (restPosition < 2520 && restPosition >= 2480) {
        
        $('#desertpicturediv').css('filter', 'blur(5px)');
        
    }
    
    //--- IF STATEMENT 20 --->
    
    if (restPosition >= 2560 && restPosition < 2600) {
        
        $('#desertpicturediv').css('filter', 'blur(7px)');
        
    } else if (restPosition < 2560 && restPosition >= 2520) {
        
        $('#desertpicturediv').css('filter', 'blur(6px)');
        
    }
    
    //--- IF STATEMENT 21 --->
    
    if (restPosition >= 2600 && restPosition < 2640) {
        
        $('#desertpicturediv').css('filter', 'blur(8px)');
        
    } else if (restPosition < 2600 && restPosition >= 2560) {
        
        $('#desertpicturediv').css('filter', 'blur(7px)');
        
    }
    
    //--- IF STATEMENT 22 --->
    
    if (restPosition >= 2640 && restPosition < 2680) {
        
        $('#desertpicturediv').css('filter', 'blur(9px)');
        
    } else if (restPosition < 2640 && restPosition >= 2600) {
        
        $('#desertpicturediv').css('filter', 'blur(8px)');
        
    }
    
    //--- IF STATEMENT 23 --->
    
    if (restPosition >= 2680 && restPosition < 2720) {
        
        $('#desertpicturediv').css('filter', 'blur(10px)');
        
    } else if (restPosition < 2680 && restPosition >= 2640) {
        
        $('#desertpicturediv').css('filter', 'blur(9px)');
        
    }
    
    //--- IF STATEMENT 24 --->
    
    if (restPosition >= 2720) {
        
        $('#desertpicturediv').css('filter', '11px');
        
    } else if (restPosition < 2720 && restPosition >= 2680) {
        
        $('#desertpicturediv').css('filter', '10px');
        
    }
    
}); 

//------------------ DESERT QUOTE PHRASES BLUR EFFECT FUNCTION ----------------->

$(window).scroll(function() {
    
    var restPosition = window.scrollY;
    
    //--- IF STATEMENT 1 (BLUR TO CLEAR)-------------------------------------->
    
    if (restPosition >= 1800 && restPosition < 1840) {
        
        $(".desertheaders").css('filter', 'blur(10px)');
        
    } else if (restPosition < 1800) {
        
        $(".desertheaders").css('filter', 'blur(11px)');
        
    }
    
    //--- IF STATEMENT 2 --->
    
    if (restPosition >= 1840 && restPosition < 1880) {
        
        $(".desertheaders").css('filter', 'blur(9px)');
        
    } else if (restPosition < 1840 && restPosition >= 1800) {
        
        $(".desertheaders").css('filter', 'blur(10px)');
        
    }
    
    //--- IF STATEMENT 3 --->
    
    if (restPosition >= 1880 && restPosition < 1920) {
        
        $(".desertheaders").css('filter', 'blur(8px)');
        
    } else if (restPosition < 1880 && restPosition >= 1840) {
        
        $(".desertheaders").css('filter', 'blur(9px)');
        
    }
    
    //--- IF STATEMENT 4 --->
    
    if (restPosition >= 1920 && restPosition < 1960) {
        
        $(".desertheaders").css('filter', 'blur(7px)');
        
    } else if (restPosition < 1920 && restPosition >= 1880) {
        
        $(".desertheaders").css('filter', 'blur(8px)');
        
    }
    
    //--- IF STATEMENT 5 --->
    
    if (restPosition >= 1960 && restPosition < 2000) {
        
        $(".desertheaders").css('filter', 'blur(6px)');
        
    } else if (restPosition < 1960 && restPosition >= 1920) {
        
        $(".desertheaders").css('filter', 'blur(7px)');
        
    }
    
    //--- IF STATEMENT 6 --->
    
    if (restPosition >= 2000 && restPosition < 2040) {
        
        $(".desertheaders").css('filter', 'blur(5px)');
        
    } else if (restPosition < 2000 && restPosition >= 1960) {
        
        $(".desertheaders").css('filter', 'blur(6px)');
        
    }
    
    //--- IF STATEMENT 7 --->
    
    if (restPosition >= 2040 && restPosition < 2080) {
        
        $(".desertheaders").css('filter', 'blur(4px)');
        
    } else if (restPosition < 2040 && restPosition >= 2000) {
        
        $(".desertheaders").css('filter', 'blur(5px)');
        
    }
    
    //--- IF STATEMENT 8 --->
    
    if (restPosition >= 2080 && restPosition < 2120) {
        
        $(".desertheaders").css('filter', 'blur(3px)');
        
    } else if (restPosition < 2080 && restPosition >= 2040) {
        
        $(".desertheaders").css('filter', 'blur(4px)');
        
    }
    
    //--- IF STATEMENT 9 --->
    
    if (restPosition >= 2120 && restPosition < 2160) {
        
        $(".desertheaders").css('filter', 'blur(2px)');
        
    } else if (restPosition < 2120 && restPosition >= 2080) {
        
        $(".desertheaders").css('filter', 'blur(3px)');
        
    }
    
    //--- IF STATEMENT 10 --->
    
    if (restPosition >= 2160 && restPosition < 2200) {
        
        $(".desertheaders").css('filter', 'blur(1px)');
        
    } else if (restPosition < 2160 && restPosition >= 2120) {
        
        $(".desertheaders").css('filter', 'blur(2px)');
        
    }
    
    //--- IF STATEMENT 11 --->
    
    if (restPosition >= 2200 && restPosition < 2240) {
        
        $(".desertheaders").css('filter', 'blur(0.5px)');
        
    } else if (restPosition < 2200 && restPosition >= 2160) {
        
        $(".desertheaders").css('filter', 'blur(1px)');
        
    }
    
    //--- IF STATEMENT 12 --->
    
    if (restPosition >= 2240 && restPosition < 2280) {
        
        $(".desertheaders").css('filter', '0px');
        
    } else if (restPosition < 2240 && restPosition >= 2200) {
        
        $(".desertheaders").css('filter', '0.5px');
        
    }
    
    //--- IF STATEMENT 13 (CLEAR TO BLUR)------------------------------------->
    
    if (restPosition >= 2280 && restPosition < 2320) {
        
        $(".desertheaders").css('filter', 'blur(0.5px)');
        
    } else if (restPosition < 2280 && restPosition >= 2240) {
        
        $(".desertheaders").css('filter', 'blur(0px)');
        
    }
    
    //--- IF STATEMENT 14 --->
    
    if (restPosition >= 2320 && restPosition < 2360) {
        
        $(".desertheaders").css('filter', 'blur(1px)');
        
    } else if (restPosition < 2320 && restPosition >= 2280) {
        
        $(".desertheaders").css('filter', 'blur(0.5px)');
        
    }
    
    //--- IF STATEMENT 15 --->
    
    if (restPosition >= 2360 && restPosition < 2400) {
        
        $(".desertheaders").css('filter', 'blur(2px)');
        
    } else if (restPosition < 2360 && restPosition >= 2320) {
        
        $(".desertheaders").css('filter', 'blur(1px)');
        
    }
    
    //--- IF STATEMENT 16 --->
    
    if (restPosition >= 2400 && restPosition < 2440) {
        
        $(".desertheaders").css('filter', 'blur(3px)');
        
    } else if (restPosition < 2400 && restPosition >= 2360) {
        
        $(".desertheaders").css('filter', 'blur(2px)');
        
    }
    
    //--- IF STATEMENT 17 --->
    
    if (restPosition >= 2440 && restPosition < 2480) {
        
        $(".desertheaders").css('filter', 'blur(4px)');
        
    } else if (restPosition < 2440 && restPosition >= 2400) {
        
        $(".desertheaders").css('filter', 'blur(3px)');
        
    }
    
    //--- IF STATEMENT 18 --->
    
    if (restPosition >= 2480 && restPosition < 2520) {
        
        $(".desertheaders").css('filter', 'blur(5px)');
        
    } else if (restPosition < 2480 && restPosition >= 2440) {
        
        $(".desertheaders").css('filter', 'blur(4px)');
        
    }
    
    //--- IF STATEMENT 19 --->
    
    if (restPosition >= 2520 && restPosition < 2560) {
        
        $(".desertheaders").css('filter', 'blur(6px)');
        
    } else if (restPosition < 2520 && restPosition >= 2480) {
        
        $(".desertheaders").css('filter', 'blur(5px)');
        
    }
    
    //--- IF STATEMENT 20 --->
    
    if (restPosition >= 2560 && restPosition < 2600) {
        
        $(".desertheaders").css('filter', 'blur(7px)');
        
    } else if (restPosition < 2560 && restPosition >= 2520) {
        
        $(".desertheaders").css('filter', 'blur(6px)');
        
    }
    
    //--- IF STATEMENT 21 --->
    
    if (restPosition >= 2600 && restPosition < 2640) {
        
        $(".desertheaders").css('filter', 'blur(8px)');
        
    } else if (restPosition < 2600 && restPosition >= 2560) {
        
        $(".desertheaders").css('filter', 'blur(7px)');
        
    }
    
    //--- IF STATEMENT 22 --->
    
    if (restPosition >= 2640 && restPosition < 2680) {
        
        $(".desertheaders").css('filter', 'blur(9px)');
        
    } else if (restPosition < 2640 && restPosition >= 2600) {
        
        $(".desertheaders").css('filter', 'blur(8px)');
        
    }
    
    //--- IF STATEMENT 23 --->
    
    if (restPosition >= 2680 && restPosition < 2720) {
        
        $(".desertheaders").css('filter', 'blur(10px)');
        
    } else if (restPosition < 2680 && restPosition >= 2640) {
        
        $(".desertheaders").css('filter', 'blur(9px)');
        
    }
    
    //--- IF STATEMENT 24 --->
    
    if (restPosition >= 2720) {
        
        $(".desertheaders").css('filter', '11px');
        
    } else if (restPosition < 2720 && restPosition >= 2680) {
        
        $(".desertheaders").css('filter', '10px');
        
    }
    
});

//------------------ DESERT QUOTE PICTURE BLUR EFFECT FUNCTION ----------------->

$(window).scroll(function() {
    
    var restPosition = window.scrollY;
    
    //--- IF STATEMENT 1 (BLUR TO CLEAR)-------------------------------------->
    
    if (restPosition >= 4460 && restPosition < 4500) {
        
        $('#aboutsashadiv3').css('filter', 'blur(10px)');
        
    } else if (restPosition < 4460) {
        
        $('#aboutsashadiv3').css('filter', 'blur(11px)');
        
    }
    
    //--- IF STATEMENT 2 --->
    
    if (restPosition >= 4500 && restPosition < 4540) {
        
        $('#aboutsashadiv3').css('filter', 'blur(9px)');
        
    } else if (restPosition < 4500 && restPosition >= 4460) {
        
        $('#aboutsashadiv3').css('filter', 'blur(10px)');
        
    }
    
    //--- IF STATEMENT 3 --->
    
    if (restPosition >= 4540 && restPosition < 4580) {
        
        $('#aboutsashadiv3').css('filter', 'blur(8px)');
        
    } else if (restPosition < 4540 && restPosition >= 1840) {
        
        $('#aboutsashadiv3').css('filter', 'blur(9px)');
        
    }
    
    //--- IF STATEMENT 4 --->
    
    if (restPosition >= 4580 && restPosition < 4620) {
        
        $('#aboutsashadiv3').css('filter', 'blur(7px)');
        
    } else if (restPosition < 4580 && restPosition >= 4540) {
        
        $('#aboutsashadiv3').css('filter', 'blur(8px)');
        
    }
    
    //--- IF STATEMENT 5 --->
    
    if (restPosition >= 4620 && restPosition < 4660) {
        
        $('#aboutsashadiv3').css('filter', 'blur(6px)');
        
    } else if (restPosition < 4620 && restPosition >= 4580) {
        
        $('#aboutsashadiv3').css('filter', 'blur(7px)');
        
    }
    
    //--- IF STATEMENT 6 --->
    
    if (restPosition >= 4660 && restPosition < 4700) {
        
        $('#aboutsashadiv3').css('filter', 'blur(5px)');
        
    } else if (restPosition < 4660 && restPosition >= 4620) {
        
        $('#aboutsashadiv3').css('filter', 'blur(6px)');
        
    }
    
    //--- IF STATEMENT 7 --->
    
    if (restPosition >= 4700 && restPosition < 4740) {
        
        $('#aboutsashadiv3').css('filter', 'blur(4px)');
        
    } else if (restPosition < 4700 && restPosition >= 4660) {
        
        $('#aboutsashadiv3').css('filter', 'blur(5px)');
        
    }
    
    //--- IF STATEMENT 8 --->
    
    if (restPosition >= 4740 && restPosition < 4780) {
        
        $('#aboutsashadiv3').css('filter', 'blur(3px)');
        
    } else if (restPosition < 4740 && restPosition >= 4700) {
        
        $('#aboutsashadiv3').css('filter', 'blur(4px)');
        
    }
    
    //--- IF STATEMENT 9 --->
    
    if (restPosition >= 4780 && restPosition < 4820) {
        
        $('#aboutsashadiv3').css('filter', 'blur(2px)');
        
    } else if (restPosition < 4780 && restPosition >= 4740) {
        
        $('#aboutsashadiv3').css('filter', 'blur(3px)');
        
    }
    
    //--- IF STATEMENT 10 --->
    
    if (restPosition >= 4820 && restPosition < 4860) {
        
        $('#aboutsashadiv3').css('filter', 'blur(1px)');
        
    } else if (restPosition < 4820 && restPosition >= 4780) {
        
        $('#aboutsashadiv3').css('filter', 'blur(2px)');
        
    }
    
    //--- IF STATEMENT 11 --->
    
    if (restPosition >= 4860 && restPosition < 4900) {
        
        $('#aboutsashadiv3').css('filter', 'blur(0.5px)');
        
    } else if (restPosition < 4860 && restPosition >= 4820) {
        
        $('#aboutsashadiv3').css('filter', 'blur(1px)');
        
    }
    
    //--- IF STATEMENT 12 --->
    
    if (restPosition >= 4900 && restPosition < 4940) {
        
        $('#aboutsashadiv3').css('filter', '0px');
        
    } else if (restPosition < 4900 && restPosition >= 4860) {
        
        $('#aboutsashadiv3').css('filter', '0.5px');
        
    }
    
    //--- IF STATEMENT 13 (CLEAR TO BLUR)------------------------------------->
    
    if (restPosition >= 4940 && restPosition < 4980) {
        
        $('#aboutsashadiv3').css('filter', 'blur(0.5px)');
        
    } else if (restPosition < 4940 && restPosition >= 4900) {
        
        $('#aboutsashadiv3').css('filter', 'blur(0px)');
        
    }
    
    //--- IF STATEMENT 14 --->
    
    if (restPosition >= 4980 && restPosition < 5020) {
        
        $('#aboutsashadiv3').css('filter', 'blur(1px)');
        
    } else if (restPosition < 4980 && restPosition >= 4940) {
        
        $('#aboutsashadiv3').css('filter', 'blur(0.5px)');
        
    }
    
    //--- IF STATEMENT 15 --->
    
    if (restPosition >= 5020 && restPosition < 5060) {
        
        $('#aboutsashadiv3').css('filter', 'blur(2px)');
        
    } else if (restPosition < 5020 && restPosition >= 4980) {
        
        $('#aboutsashadiv3').css('filter', 'blur(1px)');
        
    }
    
    //--- IF STATEMENT 16 --->
    
    if (restPosition >= 5060 && restPosition < 5100) {
        
        $('#aboutsashadiv3').css('filter', 'blur(3px)');
        
    } else if (restPosition < 5060 && restPosition >= 5020) {
        
        $('#aboutsashadiv3').css('filter', 'blur(2px)');
        
    }
    
    //--- IF STATEMENT 17 --->
    
    if (restPosition >= 5100 && restPosition < 5140) {
        
        $('#aboutsashadiv3').css('filter', 'blur(4px)');
        
    } else if (restPosition < 5100 && restPosition >= 5060) {
        
        $('#aboutsashadiv3').css('filter', 'blur(3px)');
        
    }
    
    //--- IF STATEMENT 18 --->
    
    if (restPosition >= 5140 && restPosition < 5180) {
        
        $('#aboutsashadiv3').css('filter', 'blur(5px)');
        
    } else if (restPosition < 5140 && restPosition >= 5100) {
        
        $('#aboutsashadiv3').css('filter', 'blur(4px)');
        
    }
    
    //--- IF STATEMENT 19 --->
    
    if (restPosition >= 5180 && restPosition < 5220) {
        
        $('#aboutsashadiv3').css('filter', 'blur(6px)');
        
    } else if (restPosition < 5180 && restPosition >= 5140) {
        
        $('#aboutsashadiv3').css('filter', 'blur(5px)');
        
    }
    
    //--- IF STATEMENT 20 --->
    
    if (restPosition >= 5220 && restPosition < 5260) {
        
        $('#aboutsashadiv3').css('filter', 'blur(7px)');
        
    } else if (restPosition < 5220 && restPosition >= 5180) {
        
        $('#aboutsashadiv3').css('filter', 'blur(6px)');
        
    }
    
    //--- IF STATEMENT 21 --->
    
    if (restPosition >= 5260 && restPosition < 5300) {
        
        $('#aboutsashadiv3').css('filter', 'blur(8px)');
        
    } else if (restPosition < 5260 && restPosition >= 5220) {
        
        $('#aboutsashadiv3').css('filter', 'blur(7px)');
        
    }
    
    //--- IF STATEMENT 22 --->
    
    if (restPosition >= 5300 && restPosition < 5340) {
        
        $('#aboutsashadiv3').css('filter', 'blur(9px)');
        
    } else if (restPosition < 5300 && restPosition >= 5260) {
        
        $('#aboutsashadiv3').css('filter', 'blur(8px)');
        
    }
    
    //--- IF STATEMENT 23 --->
    
    if (restPosition >= 5340 && restPosition < 5380) {
        
        $('#aboutsashadiv3').css('filter', 'blur(10px)');
        
    } else if (restPosition < 5340 && restPosition >= 5300) {
        
        $('#aboutsashadiv3').css('filter', 'blur(9px)');
        
    }
    
    //--- IF STATEMENT 24 --->
    
    if (restPosition >= 5380) {
        
        $('#aboutsashadiv3').css('filter', '11px');
        
    } else if (restPosition < 5380 && restPosition >= 5340) {
        
        $('#aboutsashadiv3').css('filter', '10px');
        
    }
    
});

//------------------ DESERT QUOTE PICTURE BLUR EFFECT FUNCTION ----------------->

$(window).scroll(function() {
    
    var restPosition = window.scrollY;
    
    //--- IF STATEMENT 1 (BLUR TO CLEAR)-------------------------------------->
    
    if (restPosition >= 4460 && restPosition < 4500) {
        
        $('#quoteboxdiv').css('filter', 'blur(10px)');
        
    } else if (restPosition < 4460) {
        
        $('#quoteboxdiv').css('filter', 'blur(11px)');
        
    }
    
    //--- IF STATEMENT 2 --->
    
    if (restPosition >= 4500 && restPosition < 4540) {
        
        $('#quoteboxdiv').css('filter', 'blur(9px)');
        
    } else if (restPosition < 4500 && restPosition >= 4460) {
        
        $('#quoteboxdiv').css('filter', 'blur(10px)');
        
    }
    
    //--- IF STATEMENT 3 --->
    
    if (restPosition >= 4540 && restPosition < 4580) {
        
        $('#quoteboxdiv').css('filter', 'blur(8px)');
        
    } else if (restPosition < 4540 && restPosition >= 1840) {
        
        $('#quoteboxdiv').css('filter', 'blur(9px)');
        
    }
    
    //--- IF STATEMENT 4 --->
    
    if (restPosition >= 4580 && restPosition < 4620) {
        
        $('#quoteboxdiv').css('filter', 'blur(7px)');
        
    } else if (restPosition < 4580 && restPosition >= 4540) {
        
        $('#quoteboxdiv').css('filter', 'blur(8px)');
        
    }
    
    //--- IF STATEMENT 5 --->
    
    if (restPosition >= 4620 && restPosition < 4660) {
        
        $('#quoteboxdiv').css('filter', 'blur(6px)');
        
    } else if (restPosition < 4620 && restPosition >= 4580) {
        
        $('#quoteboxdiv').css('filter', 'blur(7px)');
        
    }
    
    //--- IF STATEMENT 6 --->
    
    if (restPosition >= 4660 && restPosition < 4700) {
        
        $('#quoteboxdiv').css('filter', 'blur(5px)');
        
    } else if (restPosition < 4660 && restPosition >= 4620) {
        
        $('#quoteboxdiv').css('filter', 'blur(6px)');
        
    }
    
    //--- IF STATEMENT 7 --->
    
    if (restPosition >= 4700 && restPosition < 4740) {
        
        $('#quoteboxdiv').css('filter', 'blur(4px)');
        
    } else if (restPosition < 4700 && restPosition >= 4660) {
        
        $('#quoteboxdiv').css('filter', 'blur(5px)');
        
    }
    
    //--- IF STATEMENT 8 --->
    
    if (restPosition >= 4740 && restPosition < 4780) {
        
        $('#quoteboxdiv').css('filter', 'blur(3px)');
        
    } else if (restPosition < 4740 && restPosition >= 4700) {
        
        $('#quoteboxdiv').css('filter', 'blur(4px)');
        
    }
    
    //--- IF STATEMENT 9 --->
    
    if (restPosition >= 4780 && restPosition < 4820) {
        
        $('#quoteboxdiv').css('filter', 'blur(2px)');
        
    } else if (restPosition < 4780 && restPosition >= 4740) {
        
        $('#quoteboxdiv').css('filter', 'blur(3px)');
        
    }
    
    //--- IF STATEMENT 10 --->
    
    if (restPosition >= 4820 && restPosition < 4860) {
        
        $('#quoteboxdiv').css('filter', 'blur(1px)');
        
    } else if (restPosition < 4820 && restPosition >= 4780) {
        
        $('#quoteboxdiv').css('filter', 'blur(2px)');
        
    }
    
    //--- IF STATEMENT 11 --->
    
    if (restPosition >= 4860 && restPosition < 4900) {
        
        $('#quoteboxdiv').css('filter', 'blur(0.5px)');
        
    } else if (restPosition < 4860 && restPosition >= 4820) {
        
        $('#quoteboxdiv').css('filter', 'blur(1px)');
        
    }
    
    //--- IF STATEMENT 12 --->
    
    if (restPosition >= 4900 && restPosition < 4940) {
        
        $('#quoteboxdiv').css('filter', '0px');
        
    } else if (restPosition < 4900 && restPosition >= 4860) {
        
        $('#quoteboxdiv').css('filter', '0.5px');
        
    }
    
    //--- IF STATEMENT 13 (CLEAR TO BLUR)------------------------------------->
    
    if (restPosition >= 4940 && restPosition < 4980) {
        
        $('#quoteboxdiv').css('filter', 'blur(0.5px)');
        
    } else if (restPosition < 4940 && restPosition >= 4900) {
        
        $('#quoteboxdiv').css('filter', 'blur(0px)');
        
    }
    
    //--- IF STATEMENT 14 --->
    
    if (restPosition >= 4980 && restPosition < 5020) {
        
        $('#quoteboxdiv').css('filter', 'blur(1px)');
        
    } else if (restPosition < 4980 && restPosition >= 4940) {
        
        $('#quoteboxdiv').css('filter', 'blur(0.5px)');
        
    }
    
    //--- IF STATEMENT 15 --->
    
    if (restPosition >= 5020 && restPosition < 5060) {
        
        $('#quoteboxdiv').css('filter', 'blur(2px)');
        
    } else if (restPosition < 5020 && restPosition >= 4980) {
        
        $('#quoteboxdiv').css('filter', 'blur(1px)');
        
    }
    
    //--- IF STATEMENT 16 --->
    
    if (restPosition >= 5060 && restPosition < 5100) {
        
        $('#quoteboxdiv').css('filter', 'blur(3px)');
        
    } else if (restPosition < 5060 && restPosition >= 5020) {
        
        $('#quoteboxdiv').css('filter', 'blur(2px)');
        
    }
    
    //--- IF STATEMENT 17 --->
    
    if (restPosition >= 5100 && restPosition < 5140) {
        
        $('#quoteboxdiv').css('filter', 'blur(4px)');
        
    } else if (restPosition < 5100 && restPosition >= 5060) {
        
        $('#quoteboxdiv').css('filter', 'blur(3px)');
        
    }
    
    //--- IF STATEMENT 18 --->
    
    if (restPosition >= 5140 && restPosition < 5180) {
        
        $('#quoteboxdiv').css('filter', 'blur(5px)');
        
    } else if (restPosition < 5140 && restPosition >= 5100) {
        
        $('#quoteboxdiv').css('filter', 'blur(4px)');
        
    }
    
    //--- IF STATEMENT 19 --->
    
    if (restPosition >= 5180 && restPosition < 5220) {
        
        $('#quoteboxdiv').css('filter', 'blur(6px)');
        
    } else if (restPosition < 5180 && restPosition >= 5140) {
        
        $('#quoteboxdiv').css('filter', 'blur(5px)');
        
    }
    
    //--- IF STATEMENT 20 --->
    
    if (restPosition >= 5220 && restPosition < 5260) {
        
        $('#quoteboxdiv').css('filter', 'blur(7px)');
        
    } else if (restPosition < 5220 && restPosition >= 5180) {
        
        $('#quoteboxdiv').css('filter', 'blur(6px)');
        
    }
    
    //--- IF STATEMENT 21 --->
    
    if (restPosition >= 5260 && restPosition < 5300) {
        
        $('#quoteboxdiv').css('filter', 'blur(8px)');
        
    } else if (restPosition < 5260 && restPosition >= 5220) {
        
        $('#quoteboxdiv').css('filter', 'blur(7px)');
        
    }
    
    //--- IF STATEMENT 22 --->
    
    if (restPosition >= 5300 && restPosition < 5340) {
        
        $('#quoteboxdiv').css('filter', 'blur(9px)');
        
    } else if (restPosition < 5300 && restPosition >= 5260) {
        
        $('#quoteboxdiv').css('filter', 'blur(8px)');
        
    }
    
    //--- IF STATEMENT 23 --->
    
    if (restPosition >= 5340 && restPosition < 5380) {
        
        $('#quoteboxdiv').css('filter', 'blur(10px)');
        
    } else if (restPosition < 5340 && restPosition >= 5300) {
        
        $('#quoteboxdiv').css('filter', 'blur(9px)');
        
    }
    
    //--- IF STATEMENT 24 --->
    
    if (restPosition >= 5380) {
        
        $('#quoteboxdiv').css('filter', '11px');
        
    } else if (restPosition < 5380 && restPosition >= 5340) {
        
        $('#quoteboxdiv').css('filter', '10px');
        
    }
    
});

*/

//----------- REVIEWS INNER OPEN/CLOSE FUNCTION ---------->

//----------- REVIEW 1 ---------->

$(document).ready(function() {
    
    $("#reviewbutton1").click(function() {
        
        $("#picdiv1").toggleClass("open1");
        
        $("#reviewheading1-1").toggleClass("open1");
        
        $("#reviewheading1-2").toggleClass("open1");
        
        $("#reviewpardiv1").toggleClass("open1");
        
        $("#reviewbutton1").toggleClass("open1");
        
        $("#backdrop1").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 2 ---------->

$(document).ready(function() {
    
    $("#reviewbutton2").click(function() {
        
        $("#picdiv2").toggleClass("open2");
        
        $("#reviewheading2-1").toggleClass("open2");
        
        $("#reviewheading2-2").toggleClass("open2");
        
        $("#reviewpardiv2").toggleClass("open2");
        
        $("#reviewbutton2").toggleClass("open2");
        
        $("#backdrop2").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 3 ---------->

$(document).ready(function() {
    
    $("#reviewbutton3").click(function() {
        
        $("#picdiv3").toggleClass("open3");
        
        $("#reviewheading3-1").toggleClass("open3");
        
        $("#reviewheading3-2").toggleClass("open3");
        
        $("#reviewpardiv3").toggleClass("open3");
        
        $("#reviewbutton3").toggleClass("open3");
        
        $("#backdrop3").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 4 ---------->

$(document).ready(function() {
    
    $("#reviewbutton4").click(function() {
        
        $("#picdiv4").toggleClass("open4");
        
        $("#reviewheading4-1").toggleClass("open4");
        
        $("#reviewheading4-2").toggleClass("open4");
        
        $("#reviewpardiv4").toggleClass("open4");
        
        $("#reviewbutton4").toggleClass("open4");
        
        $("#backdrop4").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 5 ---------->

$(document).ready(function() {
    
    $("#reviewbutton5").click(function() {
        
        $("#picdiv5").toggleClass("open5");
        
        $("#reviewheading5-1").toggleClass("open5");
        
        $("#reviewheading5-2").toggleClass("open5");
        
        $("#reviewpardiv5").toggleClass("open5");
        
        $("#reviewbutton5").toggleClass("open5");
        
        $("#backdrop5").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 6 ---------->

$(document).ready(function() {
    
    $("#reviewbutton6").click(function() {
        
        $("#picdiv6").toggleClass("open6");
        
        $("#reviewheading6-1").toggleClass("open6");
        
        $("#reviewheading6-2").toggleClass("open6");
        
        $("#reviewpardiv6").toggleClass("open6");
        
        $("#reviewbutton6").toggleClass("open6");
        
        $("#backdrop6").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 7 ---------->

$(document).ready(function() {
    
    $("#reviewbutton7").click(function() {
        
        $("#picdiv7").toggleClass("open7");
        
        $("#reviewheading7-1").toggleClass("open7");
        
        $("#reviewheading7-2").toggleClass("open7");
        
        $("#reviewpardiv7").toggleClass("open7");
        
        $("#reviewbutton7").toggleClass("open7");
        
        $("#backdrop7").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 8 ---------->

$(document).ready(function() {
    
    $("#reviewbutton8").click(function() {
        
        $("#picdiv8").toggleClass("open8");
        
        $("#reviewheading8-1").toggleClass("open8");
        
        $("#reviewheading8-2").toggleClass("open8");
        
        $("#reviewpardiv8").toggleClass("open8");
        
        $("#reviewbutton8").toggleClass("open8");
        
        $("#backdrop8").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 9 ---------->

$(document).ready(function() {
    
    $("#reviewbutton9").click(function() {
        
        $("#picdiv9").toggleClass("open9");
        
        $("#reviewheading9-1").toggleClass("open9");
        
        $("#reviewheading9-2").toggleClass("open9");
        
        $("#reviewpardiv9").toggleClass("open9");
        
        $("#reviewbutton9").toggleClass("open9");
        
        $("#backdrop9").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 10 ---------->

$(document).ready(function() {
    
    $("#reviewbutton10").click(function() {
        
        $("#picdiv10").toggleClass("open10");
        
        $("#reviewheading10-1").toggleClass("open10");
        
        $("#reviewheading10-2").toggleClass("open10");
        
        $("#reviewpardiv10").toggleClass("open10");
        
        $("#reviewbutton10").toggleClass("open10");
        
        $("#backdrop10").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 11 ---------->

$(document).ready(function() {
    
    $("#reviewbutton11").click(function() {
        
        $("#picdiv11").toggleClass("open11");
        
        $("#reviewheading11-1").toggleClass("open11");
        
        $("#reviewheading11-2").toggleClass("open11");
        
        $("#reviewpardiv11").toggleClass("open11");
        
        $("#reviewbutton11").toggleClass("open11");
        
        $("#backdrop11").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 12 ---------->

$(document).ready(function() {
    
    $("#reviewbutton12").click(function() {
        
        $("#picdiv12").toggleClass("open12");
        
        $("#reviewheading12-1").toggleClass("open12");
        
        $("#reviewheading12-2").toggleClass("open12");
        
        $("#reviewpardiv12").toggleClass("open12");
        
        $("#reviewbutton12").toggleClass("open12");
        
        $("#backdrop12").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEW 13 ---------->

$(document).ready(function() {
    
    $("#reviewbutton13").click(function() {
        
        $("#picdiv13").toggleClass("open13");
        
        $("#reviewheading13-1").toggleClass("open13");
        
        $("#reviewheading13-2").toggleClass("open13");
        
        $("#reviewpardiv13").toggleClass("open13");
        
        $("#reviewbutton13").toggleClass("open13");
        
        $("#backdrop13").toggleClass("openbackdrop");
        
    });
    
});

//----------- REVIEWS OUTER (DIV) MARGIN CHANGE FUNCTION ---------->

clickCount = 1;

function rightClick() {

    clickCount++;
    
    if (clickCount > 11) {
        
        clickCount = 11;
        
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

        $("#review1").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review2").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review3").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review4").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review5").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review6").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review7").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review8").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review9").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review10").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review11").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review12").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review13").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11");

    }

    if (clickCount === 2) {

        $("#review1").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review2").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review3").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review4").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review5").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review6").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review7").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review8").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review9").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review10").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review11").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review12").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review13").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11");

    }

    if (clickCount === 3) {

        $("#review1").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review2").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review3").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review4").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review5").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review6").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review7").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review8").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");

        $("#review9").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review10").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review11").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review12").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review13").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11");

    }

    if (clickCount === 4) {

        $("#review1").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11");

        $("#review2").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11");

        $("#review3").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11");

        $("#review4").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11");

        $("#review5").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11");

        $("#review6").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11");

        $("#review7").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11");

        $("#review8").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11");

        $("#review9").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review10").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review11").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review12").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11");
        
        $("#review13").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11");

    }

    if (clickCount === 5) {

        $("#review1").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");

        $("#review2").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");

        $("#review3").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");

        $("#review4").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");

        $("#review5").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");

        $("#review6").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");

        $("#review7").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");

        $("#review8").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");

        $("#review9").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");
        
        $("#review10").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");
        
        $("#review11").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");
        
        $("#review12").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");
        
        $("#review13").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11");

    }

    if (clickCount === 6) {

        $("#review1").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");

        $("#review2").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");

        $("#review3").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");

        $("#review4").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");

        $("#review5").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");

        $("#review6").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");

        $("#review7").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");

        $("#review8").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");

        $("#review9").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");
        
        $("#review10").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");
        
        $("#review11").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");
        
        $("#review12").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");
        
        $("#review13").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11");

    }

    if (clickCount === 7) {

        $("#review1").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");

        $("#review2").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");

        $("#review3").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");

        $("#review4").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");

        $("#review5").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");

        $("#review6").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");

        $("#review7").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");

        $("#review8").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");

        $("#review9").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");
        
        $("#review10").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");
        
        $("#review11").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");
        
        $("#review12").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");
        
        $("#review13").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11");

    }
    
    if (clickCount === 8) {

        $("#review1").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");

        $("#review2").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");

        $("#review3").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");

        $("#review4").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");

        $("#review5").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");

        $("#review6").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");

        $("#review7").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");

        $("#review8").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");

        $("#review9").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");
        
        $("#review10").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");
        
        $("#review11").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");
        
        $("#review12").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");
        
        $("#review13").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11");

    }
    
    if (clickCount === 9) {

        $("#review1").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");

        $("#review2").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");

        $("#review3").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");

        $("#review4").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");

        $("#review5").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");

        $("#review6").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");

        $("#review7").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");

        $("#review8").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");

        $("#review9").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");
        
        $("#review10").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");
        
        $("#review11").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");
        
        $("#review12").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");
        
        $("#review13").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11");

    }
    
    if (clickCount === 10) {

        $("#review1").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");

        $("#review2").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");

        $("#review3").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");

        $("#review4").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");

        $("#review5").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");

        $("#review6").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");

        $("#review7").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");

        $("#review8").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");

        $("#review9").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");
        
        $("#review10").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");
        
        $("#review11").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");
        
        $("#review12").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");
        
        $("#review13").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11");

    }
    
    if (clickCount === 11) {

        $("#review1").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");

        $("#review2").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");

        $("#review3").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");

        $("#review4").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");

        $("#review5").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");

        $("#review6").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");

        $("#review7").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");

        $("#review8").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");

        $("#review9").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");
        
        $("#review10").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");
        
        $("#review11").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");
        
        $("#review12").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");
        
        $("#review13").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10");

    }

}

//------------------ QUOTE BOX PHRASES FUNCTION ----------------->

var text = [
    
    "Never go in search of Love. <br> Go in search of Life, <br> And Life will find you the love you seek.", 
    
    "I have a lot of favorite things. <br> But loving you is my favorite.", 
    
    "He turned from a monster, <br> into a prince... <br> Because she told him - <br> I love you!",

    "Read my soul... <br> Through my eyes.",

    "Don't break your back for me... <br> I'll put you out of your misery!",

    "You'll never be 100% ready... <br> Just start."];

var counter = 0;

var elem = document.getElementById("quotepar");

var inst = setInterval(change, 5000);

function change() {
    
    elem.innerHTML = text[counter];
    
    counter++;
    
    if (counter >= text.length) {
      
        counter = 0;

    }
    
}

//------------------ THE END ----------------->