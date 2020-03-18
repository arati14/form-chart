//in type field input the type of bar u want to create
//in name field input the name of the parameter u want to draw in x-axis
//in value field input the value for which u want to draw the chart
let data={"type":"bar",
"parameter":[
  {
    "names":  2019,
    "value": 100
  },
  {
    "names":  2014,
    "value": 500
  },
  {
    "names":  2015,
    "value": 400
  },
  {
    "names":  2017,
    "value": 800
  },
  {
    "names":  2020,
    "value": 900
  },
  {
    "names":  2025,
    "value": 900
  }
]}
drawGraph(data);