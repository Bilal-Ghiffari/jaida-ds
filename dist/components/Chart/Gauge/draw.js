import * as d3 from "d3";
const draw = (element, data, options) => {
    const width = options.width || 300;
    const height = options.height || 300;
    const radius = Math.min(width, height) / 2;
    const halfBox = width / 2;
    d3.select(element).select("svg").remove();
    const svg = d3
        .select(element)
        .append("svg")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .append("g")
        .attr("transform", `translate(${halfBox}, ${halfBox})`);
    let startAngle = -Math.PI / 2;
    let endAngle = 0;
    const sum = data.reduce((acc, d) => acc + d.value, 0);
    const color = d3
        .scaleOrdinal()
        .domain(data.map((d) => d.key))
        .range(data.map((d) => d.color));
    let i = 0;
    for (const iterator of data) {
        const valueInPercent = (iterator.value / sum) * 50;
        endAngle = Math.PI * (valueInPercent / 50) + startAngle;
        const arc = d3
            .arc()
            .startAngle(startAngle)
            .endAngle(endAngle)
            .innerRadius(radius * 0.67)
            .outerRadius(radius + 1);
        startAngle = endAngle;
        const pie = d3
            .pie()
            .padAngle(0.1)
            .value((d) => d.value);
        svg
            .append("g")
            .selectAll()
            .data(pie([iterator]))
            .join("path")
            .attr("fill", (d) => color(d.data.key))
            .attr("d", arc);
        if (i === 0) {
            svg
                .append("text")
                .attr("fill", "#ffff")
                .attr("font-size", 12)
                .text(`${Number(valueInPercent * 2).toFixed(1)}%`)
                .attr("text-anchor", "middle")
                .attr("transform", `translate(-${radius - 15}, 20)`);
        }
        else {
            svg
                .append("text")
                .attr("fill", "#ffff")
                .attr("font-size", 12)
                .text(`${Number(valueInPercent * 2).toFixed(1)}%`)
                .attr("text-anchor", "middle")
                .attr("transform", `translate(${radius - 15}, 20)`);
        }
        i++;
    }
    svg
        .append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", (halfBox - radius) * 0.67)
        .attr("stroke", "#ffffff")
        .attr("stroke-width", "4")
        .attr("fill", "#84E8F4")
        .attr("fill-opacity", "20%")
        .attr("filter", "drop-shadow(0px 1px 1px rgb(0 0 0 / 0.1))");
    svg
        .append("g")
        .attr("transform", "translate(-20, -10)")
        .call((g) => g
        .append("path")
        .attr("class", "needle")
        .attr("d", "M28.2623 9.76612C28.1668 4.58042 23.8737 0.428467 18.6925 0.51099C17.1371 0.535764 15.6021 0.949541 14.2478 1.71124L0.365778 9.69599C0.180704 9.80229 0.0684854 10.001 0.0724272 10.2151C0.0763689 10.4292 0.195837 10.6243 0.384716 10.7246L14.5572 18.2654C15.9341 18.9807 17.4835 19.3454 19.0389 19.3206C24.22 19.2381 28.3578 14.9518 28.2623 9.76612ZM14.1674 9.99062C14.1196 7.39776 16.1885 5.25468 18.7791 5.21342C21.3697 5.17215 23.5162 7.2481 23.5639 9.84095C23.6117 12.4338 21.5428 14.5769 18.9522 14.6182C16.3616 14.6594 14.2151 12.5835 14.1674 9.99062Z")
        .attr("transform-origin", "20 10")
        .attr("fill", "#F9896B")
        .attr("transform", "rotate(0)"));
    const t = d3.transition().duration(750).ease(d3.easeSinInOut);
    svg
        .select("path.needle")
        .transition(t)
        .attr("transform", `rotate(${(options.percentage * 180) / 100})`);
};
export default draw;
