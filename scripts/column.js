  
const drawColumn = (columnArg) => {

 yScale = drawLinearAxis({
  domainMin: 0,
  domainMax: d3.max(columnArg.data, d => d.value),
  rangeMin: columnArg.barMaxHeight,
  rangeMax: 0,
  parentGroup: columnArg.parentGroup
});
     xScale = drawBandAxis({
      parentGroup: columnArg.parentGroup,
      domainArr: columnArg.data.map(d => d.names),
      rangeMin: 0,
      rangeMax: columnArg.barMaxWidth,
      height: columnArg.barMaxHeight
    });

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
