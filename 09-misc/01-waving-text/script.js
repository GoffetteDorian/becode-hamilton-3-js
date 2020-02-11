/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  //Process the index given to return a size from 0 to 5
  let sense = false;
  let size = 0;
  const cycle = index => {
    if (index % 5 === 0) {
      if (sense) sense = false;
      else sense = true;
    }
    sense ? size++ : size--;
    return size;
  };

  //Starting point for the wave
  let str = document.getElementById("target");
  str.innerHTML = [...str.innerHTML]
    .map((letter, i) => letter.fontsize(cycle(i)))
    .join("");

  //Transfer index + 1 size attribute to current element
  const animate = () => {
    let arr = [...document.getElementsByTagName("font")];
    for (let i = 0; i < arr.length - 1; i++) {
      const current = arr[i];
      const next = arr[i + 1];
      current.setAttribute("size", parseInt(next.getAttribute("size")));
    }
  };

  //Trigger animation on mouseenter and stop it on mouseleave
  let interval;
  str.onmouseenter = () => {
    interval = setInterval(animate, 150);
  };
  str.onmouseleave = () => {
    clearInterval(interval);
  };
})();
