// set current day

$("#currentDay").text(moment().format('dddd, MMMM Do'));
//$("#currentDay").text(new Date().toDateString());

// create a variable that stores current hour
var currentHour = new Date().getHours();


// added classes for styling to all spans & buttons
$("span").addClass("hour");
$("button").addClass("saveBtn");


// when a timeblock is a specific time then change to a color: red(present), yellow(past), & green(future)
$("span").each(function(){
    
    if (parseInt(this.title) == currentHour){
        $(this).parent().next().addClass("present");
        
    } else if (parseInt(this.title) < currentHour){
        $(this).parent().next().addClass("past");
    } else if (parseInt(this.title) > currentHour){
        $(this).parent().next().addClass("future");
    }
    
  });


// when refreshing the page events are not cleared
window.onload = function (event){
    if (this.localStorage != null){
        $(".event1").val(this.localStorage.getItem("event1"));
        $(".event2").val(this.localStorage.getItem("event2"));
        $(".event3").val(this.localStorage.getItem("event3"));
        $(".event4").val(this.localStorage.getItem("event4"));
        $(".event5").val(this.localStorage.getItem("event5"));
        $(".event6").val(this.localStorage.getItem("event6"));
        $(".event7").val(this.localStorage.getItem("event7"));
        $(".event8").val(this.localStorage.getItem("event8"));
        $(".event9").val(this.localStorage.getItem("event9"));
    }
};  

// Event listener added to timeblock buttons; events saved to local storage

$(".submit1").on("click", function(event){
    event.preventDefault();      
    localStorage.setItem("event1", $(".event1").val());
});

$(".submit2").on("click", function(event){
    event.preventDefault();    
    localStorage.setItem("event2", $(".event2").val());
});

$(".submit3").on("click", function(event){
    event.preventDefault();    
    localStorage.setItem("event3", $(".event3").val());
});

$(".submit4").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event4", $(".event4").val());
});

$(".submit5").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event5", $(".event5").val());
});

$(".submit6").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event6", $(".event6").val());
});

$(".submit7").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event7", $(".event7").val());
});

$(".submit8").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event8", $(".event9").val());
});

$(".submit9").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event9", $(".event9").val());
});





