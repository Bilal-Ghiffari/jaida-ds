import * as d3 from "d3";
import { TData, TOptions } from ".";

const draw = (element: d3.BaseType, data: TData[], options: TOptions) => {
  const marginTop = 30;
  const marginBottom = 30;
  const width = options.widht || 300;
  const height = options.height || 300;

  d3.select(element).select("svg").remove();
  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g");
  // .attr("transform", `translate(${halfBox}, ${halfBox})`);
  let axisCreated = false;
  const max = Math.max(
    ...data.reduce<number[]>((acc, d) => {
      for (const iterator of d.values) {
        const value = iterator.value as number;
        acc.push(value);
      }
      return acc;
    }, [])
  );
  for (const chart of data) {
    const x: any = d3
      .scaleBand()
      .domain(chart.values.map((d) => d.label))
      .range([0, width])
      .padding(0.5);

    const y: any = d3
      .scaleLinear()
      .domain([0, max])
      .range([height - marginBottom, marginTop]);

    if (!axisCreated) {
      // y axis
      svg
        .append("g")
        .attr("transform", `translate(15, 0)`)
        .call(d3.axisLeft(y))
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll("g.tick text").remove())
        .call((g) =>
          g
            .selectAll(".tick line")
            .attr("x1", 0)
            .attr("x2", width - 30)
            .attr("stroke-width", 0.5)
            .attr("stroke-opacity", 0.1)
            .call((g) => g.selectAll("g.tick:first-child line").remove())
        );

      // x axis
      if (options.xAxies?.display)
        svg
          .append("g")
          .attr("transform", `translate(0, ${height - (marginBottom - 10)})`)
          .call(d3.axisBottom(x).tickSize(0))
          .call((g) => g.selectAll("g.tick text"))
          .attr("color", "#9698AB")
          .attr("font-size", 6)
          .call((g) => g.select("g path.domain").remove());

      axisCreated = true;
    }

    if (chart.type === "bar") {
      // create chart bar
      svg
        .append("g")
        .selectAll()
        .data(chart.values)
        .join("rect")
        .attr("fill", chart.color || "#000000")
        .attr("rx", 5)
        .attr("x", (d) => {
          const label = d.label as string;
          return x(label) as number;
        })
        .attr("y", (d) => y(d.value) as number)
        .attr("height", (d) => y(0) - y(d.value))
        .attr("width", x.bandwidth());
    } else if (chart.type === "line") {
      // create chart line
      const line: any = d3
        .line()
        .x((d: any) => x(d.label as string))
        .y((d: any) => y(d.value))
        .curve(d3.curveCatmullRom.alpha(0.5));
      svg
        .append("path")
        .attr("fill", "none")
        .attr("stroke", chart.color || "#000000")
        .attr("stroke-width", 3)
        .attr("d", line(chart.values))
        .call((path) =>
          path.clone().attr("class", "blur transform translate-y-1")
        );
    }
  }
};

export default draw;
