
function drawGraph(data)  {

  const graphWidth = data.graphWidthValue - data.margin.left - data.margin.right;
  const graphHeight = data.graphHeightValue - data.margin.top - data.margin.bottom;
  const radius =Math.min(graphWidth + data.margin.left + data.margin.right,graphHeight + data.margin.top + data.margin.bottom)/2;
  const svg = d3.select('.canvas')
      .append('svg')
      .attr('width', graphWidth + data.margin.left + data.margin.right)
      .attr('height', graphHeight + data.margin.top + data.margin.bottom)
      
  const graph = svg
    .append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${data.margin.left}, ${data.margin.top})`)
    
  var yScale,xScale;

  switch(data.type) {
    case 'bar':

       yScale = drawLinearAxis(0, d3.max(data.parameter, d => d.value), graphHeight, 0, graph)
       xScale = drawBandAxis(data.parameter.map(d => d.names), 0, graphWidth, graph, graphHeight)
       drawBar(xScale, yScale, graph, data.parameter, 'names', 'value', graphHeight, 50,data.barcolor)
      break;
    case 'line':

       yScale = drawLinearAxis(0, d3.max(data.parameter, d => d.value), graphHeight, 0, graph)
        xScale = drawBandAxis(data.parameter.map(d => d.names), 0, graphWidth, graph, graphHeight)
       drawLine(xScale, yScale, data.parameter, 'names', 'value', graph,data.linecolor)
      break;
    case 'pie':
      
     drawPie(radius,graph,svg,data.parameter,(d,x) => data.parameter[x].names,(d,x) => data.piecolor(x))
      break;
  }
 
};

