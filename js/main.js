/*
Author: A.zaki
*/
// on document ready.
$( document ).ready(function() {
    $("#addSectionBtn").on('click', function() {
        $('#addSectionOrQuiz').hide();        
        $("#addSectionBlock").fadeIn(500);
    });
    
    $("input").click(function () {
        $.cookie('myCookie', cook.val(), {
        expires: 365
        });
    });
    var cook = $(".addblock").val($.cookie("myCookie"))

});

//cancel btn
function goBack() {    
    $("#addSectionBlock").hide();
    $('#addSectionOrQuiz').fadeIn(500);        
}

function addSectionBtn() {    
        $('#addSectionOrQuiz').hide();
        $('#CreatedNewSectionBlock').hide();
        $('#lectureDone').hide();    
        $("#addSectionBlock").fadeIn(500);
}

//CreatedNewSection
function CreatedNewSection() {    
    $("#addSectionBlock").hide();
    $('#CreatedNewSectionBlock').fadeIn(500);        
}

//addLecture
function addLecture() {    
    $("#CreatedNewSectionBlock").hide();
    $("#lectureDone").hide();
    $('#addLectureBlock').fadeIn(500);        
}

//submit Lecture
function submitLecture() {    
    $("#addLectureBlock").hide();
    $('#lectureDone').fadeIn(500);        
}

//cancel lecture
function lectureCancel() {    
    $("#addLectureBlock").hide();
    $('#CreatedNewSectionBlock').fadeIn(500);        
}

//add lecture descrtibtion
function addlectureDescribtion() {    
    $("#lectureDone").hide();
    $('#adddescribtion').fadeIn(500);        
}

//save descrtibtion
function saveDescribtion() {    
    $("#adddescribtion").hide();
    $('#lectureDone').fadeIn(500);        
}
