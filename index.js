// Given data
var params = {
  lines: [
    {
      background: "#00F",
      updateTime: 1000,
      elements: [
        {
          background: "#00F",
          width: 25
        },
        {
          background: "#00F",
          width: 50
        },
        {
          background: "#00F",
          width: 25
        }
      ]
    },
    {
      background: "#00F",
      updateTime: 1000,
      elements: [
        {
          background: "#00F",
          width: 25
        },
        {
          background: "#00F",
          width: 50
        },
        {
          background: "#00F",
          width: 25
        }
      ]
    },
    {
      background: "#00F",
      updateTime: 1000,
      elements: [
        {
          background: "#00F",
          width: 25
        },
        {
          background: "#00F",
          width: 50
        },
        {
          background: "#00F",
          width: 25
        }
      ]
    }
  ]
};

const lineWidth = window.innerWidth;
const lineHeight = window.innerHeight / params.lines.length;
const updateTimerTick = params.lines[0].updateTime;
let line;
let elementOfLine;
let elementWidth;
// adding lines on page
let num = params.lines.length;
for (let i = 1; i <= num; i++) {
  line = document.createElement("div");
  line.classList.add("line-container");
  line.style.display = "flex";
  line.style.flexFlow = "row wrap";
  line.style.width = lineWidth + "px";
  line.style.height = lineHeight + "px";
  line.style.background = params.lines[0].background;
  document.body.appendChild(line);
  //adding inner elements
  for (let j = 0; j < params.lines[0].elements.length; j++) {
    params.lines[0].elements[j].width % 2 !== 0
      ? (elementWidth = 25 + "%")
      : (elementWidth = 50 + "%");
    elementOfLine = document.createElement("div");
    elementOfLine.classList.add("line-element");
    elementOfLine.style.width = elementWidth;
    elementOfLine.style.height = line.style["height"];
    for (let k = 0; k < params.lines; k++) {
      for (let l = 0; l < params.lines[k].background; l++) {
        elementOfLine.style.background = params.lines[k].elements[l].background;
      }
    }
    elementOfLine.style.transition = "all 0.5s ease-out";
    line.appendChild(elementOfLine);
  }
}

// Color generator
generateColor = () => {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
};

// Background color function
setBackground = () => {
  const element = document.getElementsByClassName("line-element");
  for (let i = 0; i < element.length; i++) {
    element[i].style.background = generateColor();
  }
};

// Starting function on page load
document.body.onload = () => {
  setInterval(setBackground, updateTimerTick);
};
