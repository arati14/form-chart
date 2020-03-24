const drawBar = (parentGroup,data,xScale,yScale,xScaleAttrName,yScaleAttrName,barMaxHeight,color,barWidth) => {
    const rects = parentGroup.selectAll('bar')
    .data(data)

    rects.enter()
    .append('rect')
    .attr('class','bar')
    .attr('fill',color)
   .attr('height',d => barMaxHeight - yScale(d[yScaleAttrName]))
   .attr('width', barWidth)
   .attr('y', d => yScale(d[yScaleAttrName]));

}

