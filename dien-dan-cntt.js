window.onload=function(){
    let els = document.querySelectorAll(".forum");
    for (let e of els)
        e.classList.add("wow");
    let even = document.querySelectorAll(".forum:nth-child(even)");
    for (let e of even)
        e.classList.add("animate__backInLeft")
    let odd = document.querySelectorAll(".forum:nth-child(odd)");
    for (let e of odd)
        e.classList.add("animate__backInRight")

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
}