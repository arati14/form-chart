//in type field input the type of graph u want to create
//in name field input the name of the parameter u want to draw in x-axis
//in value field input the value for which u want to draw the chart
let data={"type":"pie",
"graphWidthValue":700,
"graphHeightValue":700,
"margin" : { "top": 100, "right": 100, "bottom": 100, "left": 100 },
"barcolor" :"red" ,
"linecolor":"green",
"piecolor" :d3.scaleOrdinal(d3["schemeSet1"]),
"parameter":[
  {
    "names":  2019,
    "value": 200
  },
  {
    "names":  2014,
    "value": 100
  },
  {
    "names":  2015,
    "value": 150
  },
  {
    "names":  2017,
    "value": 800
  },
  {
    "names":  2020,
    "value": 900
  }
]}
drawGraph(data);