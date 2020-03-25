const drawBar = (parentGroup,data,xScale,yScale,xScaleAttrName,yScaleAttrName,color) => {
   
    const rects = parentGroup.selectAll('bar')
    .data(data)
   console.log(xScale)

    rects.enter()
    .append('rect')
    .attr('class','bar')
    .attr('fill',color)
   .attr('width', d => xScale(d[xScaleAttrName]))
   //.attr('x',0)
   .attr('y', d => yScale(d[yScaleAttrName]))
   .attr('height',yScale.bandwidth())
}

