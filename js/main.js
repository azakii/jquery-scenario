/*
Author: A.zaki
*/
// on document ready.
$( document ).ready(function() {
    $("#addSectionBtn").on('click', function() {
        $('#addSectionOrQuiz').hide();        
        $("#addSectionBlock").fadeIn(500);
    });
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
    $('#addQuiz').hide();        
    $("#addOptions").show();
    $("#addSec").show();

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
    $('#addQuiz').hide();     
    $("#addOptions").show();
    $("#addSec").show();
}

//save addQuiz
function addQuiz() {    
    $("#CreatedNewSectionBlock").hide();
    $("#addSectionOrQuiz").hide();    
    $('#lectureDone').fadeIn(500);
    $('#addQuiz').show();
    $("#addOptions").hide();
    $("#addSec").hide();
}
