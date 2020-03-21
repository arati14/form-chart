
function drawGraph(data)  {

  const margin = { top: 20, right: 20, bottom: 60, left: 120 };
  const graphWidth = 700 - margin.left - margin.right;
  const graphHeight = 700 - margin.top - margin.bottom;
  const radius =Math.min(graphWidth + margin.left + margin.right,graphHeight + margin.top + margin.bottom)/2;
  const svg = d3.select('.canvas')
      .append('svg')
      .attr('width', graphWidth + margin.left + margin.right)
      .attr('height', graphHeight + margin.top + margin.bottom)
      
    
      
    //append group into svg
  var graph = svg
    .append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
  //   svg.append("g")
  .attr("transform", "translate(" + ((graphWidth+ margin.left + margin.right) / 2 - 30) + "," + (graphHeight + margin.top + margin.bottom)/2 + ")");
  //  .append("text")
  //  .text("Browser use statistics - Jan 2017")
  //  .attr("class", "title")

  //const piescale=
  
  // const yScale = drawLinearAxis(0, d3.max(data.parameter, d => d.value), graphHeight, 0, graph)
  // const xScale = drawBandAxis(data.parameter.map(d => d.names), 0, graphWidth, graph, graphHeight)
var yScale,xScale;
  switch(data.type) {
    case 'bar':
       yScale = drawLinearAxis(0, d3.max(data.parameter, d => d.value), graphHeight, 0, graph)
       xScale = drawBandAxis(data.parameter.map(d => d.names), 0, graphWidth, graph, graphHeight)
      drawBar(xScale, yScale, graph, data.parameter, 'names', 'value', graphHeight, 50)
      break;
    case 'line':
       yScale = drawLinearAxis(0, d3.max(data.parameter, d => d.value), graphHeight, 0, graph)
        xScale = drawBandAxis(data.parameter.map(d => d.names), 0, graphWidth, graph, graphHeight)
      drawLine(xScale, yScale, data.parameter, 'names', 'value', graph)
      break;
    case 'pie':
    // graph=svg .attr("transform", "translate(" + ((graphWidth+ margin.left + margin.right) / 2 - 30) + "," + (graphHeight + margin.top + margin.bottom)/2 + ")")
     drawPie(radius,graph,data.parameter,svg,graphHeight,graphWidth)
      break;
  }
 
};

