  
const drawColumn = (columnArg) => {
  const axisObj ={
    domainMin: 0,
    domainMax: d3.max(columnArg.data, d => d.value),
    rangeMin: columnArg.barMaxHeight,
    rangeMax: 0,
    parentGroup: columnArg.parentGroup,
    domainArr: columnArg.data.map(d => d.names),
    bandRangeMin: 0,
    bandRangeMax: columnArg.barMaxWidth,
    height: columnArg.barMaxHeight
  };

 yScale = drawLinearAxis(axisObj);
     xScale = drawBandAxis(axisObj);

  const rects = columnArg.parentGroup.selectAll('rect')
    .data(columnArg.data)

  rects.enter()
   .append('rect')
   .attr('width', columnArg.barWidth)
   .attr('height', d => columnArg.barMaxHeight - yScale(d[columnArg.yScaleAttrName]))
   .attr('fill', columnArg.color)
   .attr('x', d => xScale(d[columnArg.xScaleAttrName]))
   .attr('y', d => yScale(d[columnArg.yScaleAttrName]));
}
