// import $ from 'jquery';

// class Mouse {
//     constructor() {
//         $(document).on('mousemove', function(e){
//             $('#cursor').css({
//                left:  e.pageX + 2,
//                top:   e.pageY + 2
//             });
//         });
//         $(document).on('click', function(e){
//             $('#cursor').addClass("cursor--click");

//             setTimeout( () => {
//                 $('#cursor').removeClass("cursor--click");
//             }, 500);
//         });
        
//     }

// }

// export default Mouse;
// function findViewCoords(mouseEvent)
// {
//   var xpos;
//   var ypos;
  
//   if (mouseEvent)
//   {
//     //FireFox
//     xpos = mouseEvent.pageX - document.body.scrollLeft;
//     ypos = mouseEvent.pageY - document.body.scrollTop;
//   }
//   else
//   {
//     //IE
//     xpos = window.event.x + 2;
//     ypos = window.event.y + 2;
//   }  
//   let cursor = document.getElementById("cursor");

//   cursor.style.top = String(xpos);
//   cursor.style.left = xpos;
//   console.log(cursor.style);

// }
// window.onmousemove = findViewCoords;
