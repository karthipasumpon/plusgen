// const { constant } = require("lodash");

// $(selector).action()
$(document).ready(function(){

  // let i = 3;

  // $(".addlist").on("click", function(){
   
  //   $(".list").append(`<li>List ${i++} <button>Delete</button></li>`)


  // })

  $(".removehead").on("click", function(){
      $(".head").remove()
  })

  // $(".list li").on("click", function() {

  //   $("li").removeClass("active")
  //    $(this).addClass("active")

  //    $(".content").removeClass("show")
  //    let attrval = $(this).attr("data-tab")
  //    $("#" + attrval).addClass("show")

  // })
  // tab1
  // tab2
  // tab3
  // tab4

  // let a = "#"
  // let b = "tab1"
  // console.log(a + b) 















  // document.getElementById("head").classList.add("test")
    
 


  $(".btn_change").on("click", function(){

    // $("#head").addClass("test");

    // $("#head").css( 
    //   {
    //     color: "red",
    //     padding: "10px",
    //     fontSize : "32px"
    //   } 
    // )

// addClass()
// removeClass()
// toggleClass()

    // Chaining 
    // $("#head").toggleClass("test").css( 
    //     {
    //       color: "red",
    //       padding: "10px",
    //       fontSize : "32px",
    //       border: "2px solid red"
    //     } 
    //   )

    // show(), hide(), toggle()

    // $("#head").show(5000, function(){

    //   $("#head").css( 
    //     {
    //       color: "red",
    //       padding: "10px",
    //       fontSize : "32px",
    //       border: "2px solid red"
    //     } 
    //   )

    // })

    // $("#head").css("color", "red")

    // Attribute add and remove

    // $("#head").attr("title", "hello")

    // $("#head").attr("class", "test")

    // $("#head").attr(
    //    {
    //     title: "hello",
    //     class: "test"
    //    }
    // )

    // $('#head').removeAttr("title")

  })

    
  // $("li").on("click", function(){
  //   $("li").removeClass("active")
  //   $(this).addClass("active")
  //   // $("li").addClass("active")
  // })

  // $("h2").on("click", function(){
  //     $(".content").toggle  ()
  //     let headText = $(this).text()
  //     // console.log(headText)

  //     if(headText == "Show More") {
  //       $(this).text("Show Less")
  //     } else {
  //       $(this).text("Show More")
  //     }
  // })

});
