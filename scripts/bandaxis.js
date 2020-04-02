//const d3 = require("d3");
import * as d3 from "d3";
export const drawBandAxis = (bandObj) => {
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
  }
 export const drawBarBandAxis = (bandObj1) => {
    const scale = d3.scaleBand()
     .domain(bandObj1.domainArr)
     .range([bandObj1.rangeMin,bandObj1.rangeMax])
     .paddingInner(0.10)
      .paddingOuter(0.8);
  
    const group = bandObj1.parentGroup.append('g');
    
  
    const axis = d3.axisLeft(scale);
    group.call(axis);
  
    return scale;
  }
  //export {drawBandAxis,drawBarBandAxis};