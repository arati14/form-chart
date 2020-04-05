import * as d3 from "d3";

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
}
export {drawPie};
