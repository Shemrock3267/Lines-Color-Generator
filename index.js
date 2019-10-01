// Given data
var params = {
  lines: [
    {
      background: "#00F",
      updateTime: 1000,
      elements: [
        {
          background: "#00F",
          width: 30
        },
        {
          background: "#00F",
          width: 30
        },
        {
          background: "#00F",
          width: 40
        }
      ]
    },
    {
      background: "#00F",
      updateTime: 1000,
      elements: [
        {
          background: "#00F",
          width: 40
        },
        {
          background: "#00F",
          width: 25
        },
        {
          background: "#00F",
          width: 35
        }
      ]
    },
    {
      background: "#00F",
      updateTime: 1000,
      elements: [
        {
          background: "#00F",
          width: 15
        },
        {
          background: "#00F",
          width: 35
        },
        {
          background: "#00F",
          width: 50
        }
      ]
    }
  ]
};

generateColor = () => {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
};

const lineWidth = window.innerWidth;
const lineHeight = window.innerHeight / params.lines.length + "px";
const view = [];

const buildLine = (line, randomColor) => {
  const lineHTML = document.createElement("div");

  lineHTML.style.width = line.width ? line.width + "%" : lineWidth;
  lineHTML.style.height = lineHeight;

  lineHTML.style.backgroundColor = randomColor
    ? generateColor()
    : line.background;

  return lineHTML;
};

const paintLine = (line, randomColor) => {
  const parentLine = buildLine(line, randomColor);

  line.elements
    .map(innerLine => {
      return buildLine(innerLine, randomColor);
    })
    .forEach(lineHTML => {
      parentLine.appendChild(lineHTML);
      lineHTML.style.float = "left";
    });

  return parentLine;
};

params.lines.forEach(line => {
  const parentLine = paintLine(line);

  document.body.appendChild(parentLine);

  setInterval(() => {
    parentLine.innerHTML = paintLine(line, true).innerHTML;
  }, line.updateTime);
});
