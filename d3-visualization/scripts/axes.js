const drawLinearAxis = (domainMin, domainMax, rangeMin, rangeMax, parentGroup) => {
  const scale = d3.scaleLinear()
   .domain([domainMin, domainMax])
   .range([rangeMin, rangeMax]);

  const group = parentGroup.append('g');

  const axis = d3.axisLeft(scale)

  group.call(axis)
  return scale;
}

const drawBandAxis = (domainArr, rangeMin, rangeMax, parentGroup, height) => {
  const scale = d3.scaleBand()
   .domain(domainArr)
   .range([rangeMin, rangeMax])
   .paddingInner(0.6)
    .paddingOuter(0.8);

  const group = parentGroup.append('g')
    .attr('transform', `translate(0, ${height})`);

  const axis = d3.axisBottom(scale);
  group.call(axis);

  return scale;

}
const drawBarLinearAxis = (domainMin, domainMax, rangeMin, rangeMax, parentGroup,height) => {
  const scale = d3.scaleLinear()
   .domain([domainMin, domainMax])
   .range([rangeMin, rangeMax]);

  const group = parentGroup.append('g')
 .attr("transform", "translate(0," + height + ")");
  const axis = d3.axisBottom(scale);

  group.call(axis);
  return scale;
}
const drawBarBandAxis = (domainArr, rangeMin, rangeMax, parentGroup) => {
  const scale = d3.scaleBand()
   .domain(domainArr)
   .range([rangeMin, rangeMax])
   .paddingInner(0.10)
    .paddingOuter(0.8);

  const group = parentGroup.append('g');
  

  const axis = d3.axisLeft(scale);
  group.call(axis);

  return scale;

}