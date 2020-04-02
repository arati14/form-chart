import * as d3 from "d3";

export const drawLinearAxis = (lineObj) => {
  const scale = d3.scaleLinear()
   .domain([lineObj.domainMin, lineObj.domainMax])
   .range([lineObj.rangeMin, lineObj.rangeMax]);

  const group = lineObj.parentGroup.append('g');

  const axis = d3.axisLeft(scale)

  group.call(axis)
  return scale;
}


export const drawBarLinearAxis = (lineObj1) => {
  const scale = d3.scaleLinear()
   .domain([lineObj1.domainMin, lineObj1.domainMax])
   .range([lineObj1.rangeMin,lineObj1.rangeMax]);

  const group = lineObj1.parentGroup.append('g')
 .attr("transform", "translate(0," + lineObj1.height + ")");
  const axis = d3.axisBottom(scale);

  group.call(axis);
  return scale;
}
