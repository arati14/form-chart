const drawBar = (barArg) => {
const axisArg ={
   domainArr: barArg.data.map(d =>d.names),
   rangeMin: barArg.graphHeight,
   rangeMax: 0,
   parentGroup: barArg.parentGroup,
   domainLineMin: 0,
   domainLineMax: d3.max(barArg.data, d => d.value), 
   rangeLineMin: 0,
   rangeLineMax: barArg.graphWidth,
   height: barArg.graphHeight
};

   yScale = drawBarBandAxis(axisArg);
   xScale = drawBarLinearAxis(axisArg);
    
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

