let scrollNum = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallaxImage");

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;

  imageAll.forEach((item, index) => {
    item.style.transform = `perspective(400px) translate3d(0,0,${
      scrollNum / (2 * (totalNum - index))
    }px)`;
    // translate3d는 (x값,y값,z(깊이)값)이며, perspective는
  });
});
