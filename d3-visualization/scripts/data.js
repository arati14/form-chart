//in type field input the type of graph u want to create
//in name field input the name of the parameter u want to draw in x-axis
//in value field input the value for which u want to draw the chart
let data={"type":"bar",
"graphWidthValue":700,
"graphHeightValue":700,
"margin" : { "top": 100, "right": 100, "bottom": 100, "left": 100 },
//"barcolor" :"red" ,
//"linecolor":"green",
"piecolor" :d3.scaleOrdinal(d3["schemeSet1"]),
"parameter":[
  {
    "names":  2013,
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
    "names":  2016,
    "value": 800
  },
  {
    "names":  2017,
    "value": 900
  },
  {
      "names": 2018,
      "value": 400
  },
  {
      "names": 2019,
      "value": 700
  }
]}
 drawGraph(data);
// let data1={"type":"line",
// "graphWidthValue":700,
// "graphHeightValue":700,
// "margin" : { "top": 100, "right": 100, "bottom": 100, "left": 100 },
// //"barcolor" :"red" ,
// "linecolor":"green",
// //"piecolor" :d3.scaleOrdinal(d3["schemeSet1"]),
// "parameter":[
//   {
//     "names":  2013,
//     "value": 200
//   },
//   {
//     "names":  2014,
//     "value": 100
//   },
//   {
//     "names":  2015,
//     "value": 150
//   },
//   {
//     "names":  2016,
//     "value": 800
//   },
//   {
//     "names":  2017,
//     "value": 900
//   },
//   {
//       "names": 2018,
//       "value": 400
//   },
//   {
//       "names": 2019,
//       "value": 500
//   }
// ]}
// drawGraph(data1);
// let data2={"type":"bar",
// "graphWidthValue":700,
// "graphHeightValue":700,
// "margin" : { "top": 100, "right": 100, "bottom": 100, "left": 100 },
// "barcolor" :"red" ,
// //"linecolor":"green",
// //"piecolor" :d3.scaleOrdinal(d3["schemeSet1"]),
// "parameter":[
//   {
//     "names":  2013,
//     "value": 200
//   },
//   {
//     "names":  2014,
//     "value": 100
//   },
//   {
//     "names":  2015,
//     "value": 150
//   },
//   {
//     "names":  2016,
//     "value": 800
//   },
//   {
//     "names":  2017,
//     "value": 900
//   },
//   {
//       "names": 2018,
//       "value": 400
//   },
//   {
//       "names": 2019,
//       "value": 500
//   }
// ]}
// drawGraph(data2);