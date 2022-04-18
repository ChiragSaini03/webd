
$(".togglebutton").click(function(){
    if ($(".menuitems").css("top")!="60px"){
        $(".menuitems").css("opacity","1")
        $(".menuitems").css("top","60px")}
    else if ($(".menuitems").css("top")!="-300px"){
        $(".menuitems").css("opacity","0.2")
        $(".menuitems").css("top","-300px")}
})