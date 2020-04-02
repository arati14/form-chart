import * as d3 from "d3";
import { drawColumn } from './column';
import { drawLine } from './line';
import { drawPie } from './pie';
import { drawBar } from './bar';

export function drawGraph(data)  {

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
    .attr('transform', `translate(${data.margin.left}, ${data.margin.top})`);

   const piecolor =d3.scaleOrdinal(d3["schemeSet1"]);

    
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
 
};

