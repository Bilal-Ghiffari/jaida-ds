import * as d3 from "d3";
const draw = (element, data, options) => {
    const boxSize = 300;
    const halfBox = boxSize / 2;
    const borderSize = 15;
    const halfBorderSize = borderSize / 2;
    d3.select(element).select("svg").remove();
    const svg = d3
        .select(element)
        .append("svg")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
        .append("g")
        .attr("transform", `translate(${halfBox}, ${halfBox})`);
    let i = 0;
    data.reverse();
    for (const iterator of data) {
        const startAngle = iterator.startAnglePercentage
            ? Math.PI * (iterator.startAnglePercentage / 50)
            : 0;
        const valueInPercent = (iterator.value / iterator.maxValue) * 100;
        const endAngle = Math.PI * (valueInPercent / 50) + startAngle;
        const radius = i * 30;
        svg
            .append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", halfBox - halfBorderSize - radius)
            .attr("stroke", options?.backgroundArc || "#f0f0f0")
            .attr("fill", "transparent")
            .attr("stroke-width", borderSize);
        const arcGnerator = d3
            .arc()
            .startAngle(startAngle)
            .endAngle(endAngle)
            .innerRadius(boxSize / 2 - borderSize - radius)
            .outerRadius(boxSize / 2 - radius)
            .cornerRadius(100);
        const pieGenerator = d3.pie().value((d) => d.value);
        const arcs = svg
            .selectAll()
            .data(pieGenerator([iterator]))
            .enter();
        arcs
            .append("path")
            .attr("d", arcGnerator)
            .style("fill", (d) => d.data.color);
        svg
            .append("text")
            .attr("id", `label-${iterator.key}`)
            .attr("font-weight", "bold")
            .attr("font-size", "3rem")
            .attr("opacity", 0)
            .attr("class", "transform translate-y-4 fill-primary")
            .attr("text-anchor", "middle")
            .text(`${Math.ceil(valueInPercent)}%`);
        i++;
    }
    d3.selectAll("path").on("mouseover", (event) => {
        d3.selectAll("text").attr("opacity", 0);
        console.log("mouseHover", event);
        const current = data.find((d) => d.key === event.target.__data__.data.key);
        if (current) {
            svg.select(`text#label-${current.key}`).attr("opacity", 100);
        }
        // d3.selectAll("circle").attr()
    });
};
export default draw;
