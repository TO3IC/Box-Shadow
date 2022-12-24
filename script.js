let x_pos = document.querySelector(".x-pos");
let y_pos = document.querySelector(".y-pos");
let blur_val = document.querySelector(".blur-range");
let spread_val = document.querySelector(".spread-range");
let round = document.querySelector(".round-range");
let box = document.querySelector(".box-preview");
let opacity_val = document.querySelector(".opacity-range");
let reset_btn = document.querySelector(".reset");
let code = document.querySelector(".code");
let ctc = document.querySelector(".ctc");
let boxcolortext = document.querySelector(".box-color-text");
let fontcolortext = document.querySelector(".font-color-text");
let shadow_color = document.querySelector(".shadow-color");
let shadow_color_text = document.querySelector(".shadow-color-text");
// for text
let x_pos_text = document.querySelector(".x-pos-text");
let y_pos_text = document.querySelector(".y-pos-text");
let blur_val_text = document.querySelector(".blur-range-text");
let spread_val_text = document.querySelector(".spread-range-text");
let round_text = document.querySelector(".round-range-text");

// shadow color
let shadow_r = document.querySelector(".shadow-color-r");
let shadow_g = document.querySelector(".shadow-color-g");
let shadow_b = document.querySelector(".shadow-color-b");

var visit = document.querySelector(".visit");

function codeforbox() {
  box.style.boxShadow = `${x_pos.value}px ${y_pos.value}px ${blur_val.value}px ${spread_val.value}px rgba(${shadow_r.value},${shadow_g.value},${shadow_b.value},${opacity_val.value})`;
  code.innerHTML = `box-shadow: ${x_pos.value}px ${y_pos.value}px ${blur_val.value}px ${spread_val.value}px rgba(${shadow_r.value},${shadow_g.value},${shadow_b.value},${opacity_val.value});`;
  box.style.borderRadius = round.value + "px";
  localStorage.setItem("x_pos", x_pos.value);

  localStorage.setItem("y_pos", y_pos.value);

  localStorage.setItem("blur", blur_val.value);

  localStorage.setItem("spread", spread_val.value);

  localStorage.setItem("opacity", opacity_val.value);
}

window.onload = function () {
  x_pos.value = localStorage.getItem("x_pos");

  y_pos.value = localStorage.getItem("y_pos");

  blur_val.value = localStorage.getItem("blur");

  spread_val.value = localStorage.getItem("spread");

  round.value = localStorage.getItem("round");

  opacity_val.value = localStorage.getItem("opacity");

  x_pos_text.value = x_pos.value;
  spread_val_text.value = spread_val.value;
  blur_val_text.value = blur_val.value;
  y_pos_text.value = y_pos.value;
  round_text.value = round.value;

  codeforbox();
};

x_pos.oninput = function () {
  codeforbox();
  x_pos_text.value = x_pos.value;
};

y_pos.oninput = function () {
  codeforbox();
  y_pos_text.value = y_pos.value;
};

blur_val.oninput = function () {
  codeforbox();
  blur_val_text.value = blur_val.value;
};

spread_val.oninput = function () {
  codeforbox();
  spread_val_text.value = spread_val.value;
};

opacity_val.oninput = function () {
  codeforbox();
};

round_text.oninput = function () {
  round.value = round_text.value;
  codeforbox();
};

x_pos_text.oninput = function () {
  codeforbox();
  x_pos.value = x_pos_text.value;
};

y_pos_text.oninput = function () {
  codeforbox();
  y_pos.value = y_pos_text.value;
};

blur_val_text.oninput = function () {
  codeforbox();
  blur_val.value = blur_val_text.value;
};

spread_val_text.oninput = function () {
  codeforbox();
  spread_val.value = spread_val_text.value;
};

shadow_r.oninput = function () {
  codeforbox();
};

shadow_g.oninput = function () {
  codeforbox();
};

shadow_b.oninput = function () {
  codeforbox();
};

round.oninput = function () {
  localStorage.setItem("round", round.value);
  box.style.borderRadius = round.value + "px";
  round_text.value = round.value;
};

document.querySelector(".box-color").oninput = function () {
  boxcolortext.value = document.querySelector(".box-color").value;
  box.style.backgroundColor = document.querySelector(".box-color").value;
};

document.querySelector(".font-color").oninput = function () {
  fontcolortext.value = document.querySelector(".font-color").value;
  box.style.color = document.querySelector(".font-color").value;
};

boxcolortext.oninput = function () {
  box.style.backgroundColor = boxcolortext.value;
};

fontcolortext.oninput = function () {
  box.style.color = fontcolortext.value;
};

reset_btn.addEventListener("click", function () {
  box.style.boxShadow = "0px 0px 10px 0 rgba(0, 0, 0)";

  x_pos.value = 0;
  y_pos.value = 0;
  spread_val.value = 0;
  blur_val.value = 10;
  opacity_val.value = 1;
  box.style.borderRadius = 0;
  box.style.backgroundColor = "white";
  x_pos_text.value = 0;
  y_pos_text.value = 0;
  blur_val_text.value = 10;
  spread_val_text.value = 0;
  round_text.value = 0;
  round.value = 0;
  box.style.color = "black";
  shadow_r.value = 0;
  shadow_g.value = 0;
  shadow_b.value = 0;
  localStorage.setItem("x_pos", x_pos.value);
  localStorage.setItem("y_pos", y_pos.value);
  localStorage.setItem("blur", blur_val.value);
  localStorage.setItem("spread", spread_val.value);
  localStorage.setItem("opacity", opacity_val.value);
  localStorage.setItem("round", round.value);

  box.style.width = "551px";
  box.style.height = "501px";
  code.innerHTML = `box-shadow: ${x_pos.value}px ${y_pos.value}px ${blur_val.value}px ${spread_val.value}px rgba(0, 0, 0, ${opacity_val.value})`;
});

ctc.addEventListener("click", function () {
  navigator.clipboard.writeText(code.innerHTML);
});

visit.addEventListener("click", function () {
  visit.innerHTML = "If it is not working add me on Discord:TOXIC#3537";
});

var closewarn = document.querySelector(".closewarn");

closewarn.addEventListener("click", function () {
  document.querySelector(".warn").style.display = "none";
  console.log("close");
});
