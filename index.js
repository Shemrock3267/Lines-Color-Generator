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

function generateColor() {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
}

const lineWidth = window.innerWidth;
const lineHeight = window.innerHeight / params.lines.length + "px";
const view = [];

function buildLine(line, randomColor) {
  var lineHTML = document.createElement("div");

  lineHTML.style.width = line.width ? line.width + "%" : lineWidth;
  lineHTML.style.height = lineHeight;

  lineHTML.style.backgroundColor = randomColor
    ? generateColor()
    : line.background;

  return lineHTML;
}

function paintLine(line, randomColor) {
  var parentLine = buildLine(line, randomColor);

  line.elements
    .map(function(innerLine) {
      return buildLine(innerLine, randomColor);
    })
    .forEach(function(lineHTML) {
      parentLine.appendChild(lineHTML);
      lineHTML.style.float = "left";
    });

  return parentLine;
}

params.lines.forEach(function(line, index) {
  var parentLine = paintLine(line);

  document.body.appendChild(parentLine);

  setInterval(function() {
    parentLine.innerHTML = paintLine(line, true).innerHTML;
  }, line.updateTime);
});
