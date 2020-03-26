
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
    
  switch(data.type) {
    case 'column':
      const obj1 ={
        parentGroup: graph,
        data: data.parameter,
        xScaleAttrName: 'names',
        yScaleAttrName: 'value',
        barMaxHeight: graphHeight,
        barMaxWidth: graphWidth,
        barWidth: 50,
        color:data.barcolor
      };
      
      drawColumn(obj1);
     break;

    case 'line':
      const obj2 ={
        data: data.parameter,
        xScaleAttrName: 'names',
        yScaleAttrName: 'value',
        parentGroup: graph,
        color:data.linecolor,
        barMaxHeight: graphHeight,
        barMaxWidth: graphWidth
      };
      drawLine(obj2);
      break;
    case 'pie':
      const obj3 ={
        radius: radius,
        parentGroup: graph,
        data: data.parameter,
        xcordinate: (d,x) => data.parameter[x].names,
        color: (d,x) => data.piecolor(x),
        width: graphWidth, 
        height: graphHeight
      };
     drawPie(obj3);
      break;
     case 'bar':
       const obj4 ={parentGroup: graph,
        data: data.parameter,
        xScaleAttrName: 'value',
        yScaleAttrName: 'names',
        color: data.barcolor,
        graphHeight: graphHeight,
        graphWidth: graphWidth
      };
     drawBar(obj4);
       
      break;
  }
 
};

