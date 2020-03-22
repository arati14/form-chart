const drawPie = (radius,parentGroup,svg,data,xcordinate,color) =>{
    // const g = svg.append("g")
    // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  //parentGroup= svg .attr("transform", "translate(" + ((graphWidth+ margin.left + margin.right) / 2 - 30) + "," + (graphHeight + margin.top + margin.bottom)/2 + ")");
   
    const pie = d3.pie()(data.map(d => d.value));
//console.log(pie);
const path = d3.arc()
         .outerRadius(radius - 10)
         .innerRadius(0);


const label = d3.arc()
          .outerRadius(radius)
          .innerRadius(radius - 80);

const arc = parentGroup.selectAll(".arc")
           .data(pie)
           .enter().append("g")
           .attr("class", "arc");

arc.append("path")
   .attr("d", path)
   .attr("fill", color);

console.log(color)

arc.append("text")
   .attr("transform", function(d) { 
            return "translate(" + label.centroid(d) + ")"; 
    })
   .text(xcordinate);



}
