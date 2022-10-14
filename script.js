var page;

// // Describe this function...
// function initialize_book() {
//   if(--window.LoopTrap <= 0) throw "Infinite loop.";
//   page = 1;
//   let element_page_num = document.getElementById('page-num');
//   element_page_num.innerText = page;
//   let element_text = document.getElementById('text');
//   element_text.innerText = 'Hi, guys! 👋';
//   let element_image = document.getElementById('image');
//   element_image.setAttribute("src", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVLe_oOCHXktytlMkHX3LVHPsiviETed_lWYTzvzItXMod6jj332BfFvWK1gXBYiV8Yg&usqp=CAU');
// }
//
//
// initialize_book();
//
//
// document.getElementById('pages-btn').addEventListener('click', (event) => {
//   if (page < 6) {
//     let element_page_num2 = document.getElementById('page-num');
//     page = (typeof page === 'number' ? page : 0) + 1;
//     element_page_num2.innerText = page;
//     if (page == 2) {
//       let element_text2 = document.getElementById('text');
//       element_text2.innerText = 'I wish all of us to BECOME COOL DEVELOPERS 🤞';
//       let element_image2 = document.getElementById('image');
//       element_image2.setAttribute("src", 'https://cdni.iconscout.com/illustration/premium/thumb/web-development-programming-4315061-3610795.png');
//     } else if (page == 3) {
//       let element_text3 = document.getElementById('text');
//       let new_div = document.createElement('div');
//       new_div.innerText = '...and to FIND OUR DREAM JOB as soon as possible ';
//
//       element_text3.appendChild(new_div);
//     } else if (page == 4) {
//       let element_text4 = document.getElementById('text');
//       element_text4.innerText = '...and one day probably to work like this! 😎 😉';
//       let element_image3 = document.getElementById('image');
//       element_image3.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png');
//     } else if (page == 5) {
//       let element_text5 = document.getElementById('text');
//       element_text5.innerText = 'but now we have to STUDY HARD and LEARN A LOT of interesting things from the world of IT 💪  ';
//       let element_image4 = document.getElementById('image');
//       element_image4.setAttribute("src", 'http://4.bp.blogspot.com/-7AFQwH4DoS0/VghSR6NYURI/AAAAAAAABKE/KFsJI_OcIVU/s1600/clase%2B28.gif');
//     } else if (page == 6) {
//       let element_text6 = document.getElementById('text');
//       element_text6.innerText = 'Good luck to all of us!!!';
//       let element_image5 = document.getElementById('image');
//       element_image5.setAttribute("src", 'https://c.tenor.com/CDW3UJnnfSkAAAAC/garfield-hi.gif');
//     }
//   }
//
// });
//
// document.getElementById('restart-btn').addEventListener('click', (event) => {
//   initialize_book();
//
// });

var images;


images = ['images/karpaty2.jpg', 'images/karpaty3.jpg', 'images/karpaty4.jpg', 'images/karpaty5.jpg']
document.getElementById('prev').addEventListener('click', (event) => {
  let element_slider_image2 = document.getElementById('slider-image');
  images.unshift(images.slice(-1)[0]);
  element_slider_image2.setAttribute("src", images.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_slider_image3 = document.getElementById('slider-image');
  images.push(images[0]);
  element_slider_image3.setAttribute("src", images.shift());

});