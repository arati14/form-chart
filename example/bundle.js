(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3'], factory) :
  (global = global || self, factory(global.script = {}, global.d3));
}(this, (function (exports, d3) { 'use strict';

  const drawBandAxis = (bandObj) => {
      const scale = d3.scaleBand()
       .domain(bandObj.domainArr)
       .range([bandObj.rangeMin,bandObj.rangeMax])
       .paddingInner(0.6)
        .paddingOuter(0.8);
    
      const group = bandObj.parentGroup.append('g')
        .attr('transform', `translate(0, ${bandObj.height})`);
    
      const axis = d3.axisBottom(scale);
      group.call(axis);
    
      return scale;
    };
   const drawBarBandAxis = (bandObj1) => {
      const scale = d3.scaleBand()
       .domain(bandObj1.domainArr)
       .range([bandObj1.rangeMin,bandObj1.rangeMax])
       .paddingInner(0.10)
        .paddingOuter(0.8);
    
      const group = bandObj1.parentGroup.append('g');
      
    
      const axis = d3.axisLeft(scale);
      group.call(axis);
    
      return scale;
    };

  const drawLinearAxis = (lineObj) => {
    const scale = d3.scaleLinear()
     .domain([lineObj.domainMin, lineObj.domainMax])
     .range([lineObj.rangeMin, lineObj.rangeMax]);

    const group = lineObj.parentGroup.append('g');

    const axis = d3.axisLeft(scale);

    group.call(axis);
    return scale;
  };


  const drawBarLinearAxis = (lineObj1) => {
    const scale = d3.scaleLinear()
     .domain([lineObj1.domainMin, lineObj1.domainMax])
     .range([lineObj1.rangeMin,lineObj1.rangeMax]);

    const group = lineObj1.parentGroup.append('g')
   .attr("transform", "translate(0," + lineObj1.height + ")");
    const axis = d3.axisBottom(scale);

    group.call(axis);
    return scale;
  };

  const drawColumn = (columnArg) => {

   const yScale = drawLinearAxis({
    domainMin: 0,
    domainMax: d3.max(columnArg.data, d => d.value),
    rangeMin: columnArg.barMaxHeight,
    rangeMax: 0,
    parentGroup: columnArg.parentGroup
  });
     const  xScale = drawBandAxis({
        parentGroup: columnArg.parentGroup,
        domainArr: columnArg.data.map(d => d.names),
        rangeMin: 0,
        rangeMax: columnArg.barMaxWidth,
        height: columnArg.barMaxHeight
      });

    const rects = columnArg.parentGroup.selectAll('rect')
      .data(columnArg.data);

    rects.enter()
     .append('rect')
     .attr('width', columnArg.barWidth)
     .attr('height', d => columnArg.barMaxHeight - yScale(d[columnArg.yScaleAttrName]))
     .attr('fill', columnArg.color)
     .attr('x', d => xScale(d[columnArg.xScaleAttrName]))
     .attr('y', d => yScale(d[columnArg.yScaleAttrName]));
  };

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
     
    const yScale = drawLinearAxis(axisObj);
    const xScale = drawBandAxis(axisObj);
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
  };

  const drawPie = (pieArg) =>{
      const g = pieArg.parentGroup.append("g")
       .attr("transform", "translate(" + pieArg.width / 2 + "," + pieArg.height / 2 + ")");
    
      const pie = d3.pie()(pieArg.data.map(d => d.value));
      
  const path = d3.arc()
           .outerRadius(pieArg.radius - 10)
           .innerRadius(0);


  const label = d3.arc()
            .outerRadius(pieArg.radius)
            .innerRadius(pieArg.radius - 80);

  const arc = g.selectAll(".arc")
             .data(pie)
             .enter().append("g")
             .attr("class", "arc");

  arc.append("path")
     .attr("d", path)
     .attr("fill", pieArg.color);



  arc.append("text")
     .attr("transform", function(d) { 
              return "translate(" + label.centroid(d) + ")"; 
      })
     .text(pieArg.xcordinate);
  };

  const drawBar = (barArg) => {

    const yScale = drawBarBandAxis({
        domainArr: barArg.data.map(d =>d.names),
        rangeMin: barArg.graphHeight,
        rangeMax: 0,
        parentGroup: barArg.parentGroup
     });
    const xScale = drawBarLinearAxis({
        parentGroup: barArg.parentGroup,
        domainMin: 0,
        domainMax: d3.max(barArg.data, d => d.value), 
        rangeMin: 0,
        rangeMax: barArg.graphWidth,
        height: barArg.graphHeight
     });
      
     const rects = barArg.parentGroup.selectAll('bar')
      .data(barArg.data);
     

      rects.enter()
      .append('rect')
      .attr('class','bar')
      .attr('fill',barArg.color)
      .attr('width', d => xScale(d[barArg.xScaleAttrName]))
      .attr('x',0)
      .attr('y', d => yScale(d[barArg.yScaleAttrName]))
      .attr('height',yScale.bandwidth());
  };

  function drawGraph(data)  {

    const graphWidth = data.graphWidthValue - data.margin.left - data.margin.right;
    const graphHeight = data.graphHeightValue - data.margin.top - data.margin.bottom;
    const radius =Math.min(graphWidth + data.margin.left + data.margin.right,graphHeight + data.margin.top + data.margin.bottom)/2;
    const svg = d3.select('.canvas')
        .append('svg')
        .attr('width', graphWidth + data.margin.left + data.margin.right)
        .attr('height', graphHeight + data.margin.top + data.margin.bottom);
        
    const graph = svg
      .append('g')
      .attr('width', graphWidth)
      .attr('height', graphHeight)
      .attr('transform', `translate(${data.margin.left}, ${data.margin.top})`);

     const piecolor =d3.scaleOrdinal(d3.schemeSet1);

      
    switch(data.type) {
      case 'column':
        drawColumn({
          parentGroup: graph,
          data: data.parameter,
          xScaleAttrName: 'names',
          yScaleAttrName: 'value',
          barMaxHeight: graphHeight,
          barMaxWidth: graphWidth,
          barWidth: 50,
          color:data.barcolor
        });
       break;

      case 'line':
        drawLine({
          data: data.parameter,
          xScaleAttrName: 'names',
          yScaleAttrName: 'value',
          parentGroup: graph,
          color:data.linecolor,
          barMaxHeight: graphHeight,
          barMaxWidth: graphWidth
        });
        break;
      case 'pie':
       drawPie({
        radius: radius,
        parentGroup: graph,
        data: data.parameter,
        xcordinate: (d,x) => data.parameter[x].names,
        color: (d,x) => piecolor(x),
        width: graphWidth, 
        height: graphHeight
      });
        break;
       case 'bar':
       drawBar({parentGroup: graph,
        data: data.parameter,
        xScaleAttrName: 'value',
        yScaleAttrName: 'names',
        color: data.barcolor,
        graphHeight: graphHeight,
        graphWidth: graphWidth
      });
         
        break;
    }
   
  }

  exports.drawGraph = drawGraph;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
