const drawBar = (barArg) => {

   yScale = drawBarBandAxis({
      domainArr: barArg.data.map(d =>d.names),
      rangeMin: barArg.graphHeight,
      rangeMax: 0,
      parentGroup: barArg.parentGroup
   });
   xScale = drawBarLinearAxis({
      parentGroup: barArg.parentGroup,
      domainMin: 0,
      domainMax: d3.max(barArg.data, d => d.value), 
      rangeMin: 0,
      rangeMax: barArg.graphWidth,
      height: barArg.graphHeight
   });
    
   const rects = barArg.parentGroup.selectAll('bar')
    .data(barArg.data)
   

    rects.enter()
    .append('rect')
    .attr('class','bar')
    .attr('fill',barArg.color)
    .attr('width', d => xScale(d[barArg.xScaleAttrName]))
    .attr('x',0)
    .attr('y', d => yScale(d[barArg.yScaleAttrName]))
    .attr('height',yScale.bandwidth());
}

