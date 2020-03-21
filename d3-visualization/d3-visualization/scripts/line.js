const drawLine = (xScale, yScale,  data, xScaleAttrName, yScaleAttrName,  parentGroup,color) => {

  const line = d3.line()
   .x(function(d) { return xScale(d[xScaleAttrName]);})
   .y(function(d){ return yScale(d[yScaleAttrName]);});

 const path = parentGroup.append('path');

 path.data([data])
   .attr('fill', 'none')
   .attr('stroke', color)
   .attr('stroke-width', 2)
   .attr('class', 'line')
   .attr('d', line);

}
