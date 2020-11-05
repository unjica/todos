/*
-----------------------------------------------------------
-----------------------ADD BUTTON--------------------------
-----------------------------------------------------------
*/

$(document).ready(function(){
    $(".button").click(function(){
        $(".button").css({"background-color":"rgb(255,255,255,0.5)","border-radius":"50%"})
        setTimeout(function(){
            $(".button").css({"background-color":"rgb(255,255,255,0)","border-radius":"50%"}) },70)
    })
})


 
var listItem
$(document).ready(function(){
    $(".button").click(function(){
        setTimeout(function(){
            listItem = prompt("Add new item to the list.")
        },100)
        setTimeout(function(){
           $(".todos").append("<div class='item'><button class='check'></button><p>" + listItem + "</p></div>");
        }, 200)      
    })
})




/*
---------------------------------------------------------------
------------------DELETE AND REMOVE ITEMS----------------------
---------------------------------------------------------------
*/


$(document).ready(function(){
    $(document).on("click",".item",(function(){
        $(this).children("p").css({"text-decoration":"line-through", "color":"#777"});
        $(this).css("border-bottom","solid #777")
        $(this).children("button").css("border-color","#777");
        $(this).fadeOut(1000, function(){
            $(".first-item").remove()
        })
    })) 
})
  
