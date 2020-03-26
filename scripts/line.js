const drawLine = (lineArg) => {
  const axisObj ={
    domainMin: 0,
    domainMax: d3.max(lineArg.data, d => d.value),
    rangeMin: lineArg.barMaxHeight,
    rangeMax: 0,
    parentGroup: lineArg.parentGroup,
    domainArr: lineArg.data.map(d => d.names),
    bandRangeMin: 0,
    bandRangeMax: lineArg.barMaxWidth,
    height: lineArg.barMaxHeight
  };
   
  yScale = drawLinearAxis(axisObj);
  xScale = drawBandAxis(axisObj);
  const line = d3.line()
   .x(function(d) { return xScale(d[lineArg.xScaleAttrName]);})
   .y(function(d){ return yScale(d[lineArg.yScaleAttrName]);});

 const path = lineArg.parentGroup.append('path');

 path.data([lineArg.data])
   .attr('fill', 'none')
   .attr('stroke', lineArg.color)
   .attr('stroke-width', 2)
   .attr('class', 'line')
   .attr('d', line);
}
