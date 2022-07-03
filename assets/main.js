$(".wrapper").animate({"width":"100%"},2000);
$(".wrapper").animate({"height":"100vh"},2000,function(){

    $(".wrapper h1").slideDown(2000,function(){

        $(".wrapper .col-md-4").fadeIn(2000)
    });
});
