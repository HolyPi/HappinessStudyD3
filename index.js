const barHeight = 20;
const space = 40

d3.json("2019.json").then((data) => {
    const ten = data.filter((data, item) => item < 10)
    console.log(ten)

    const xScale = d3
    .scaleLinear()
    .domain([1, 10])
    .range([25, 500])

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(ten, p => p["Healthy life expectancy"]))
    .range([375, 25])

  const yScale2 = d3
    .scaleLinear()
    .domain(d3.extent(ten, p => p["Generosity"]))
    .range([375, 25])

  const labelScale = d3
    .scaleOrdinal()
    .domain([0, 11])
    .range(['Finland', 'Denmark', 'Norway', 'Iceland', 'Netherlands', 'Switzerland' , 'Sweden', 'New Zealand', 'Canada', 'Austria'])


    d3.select('svg#gdp')
    .selectAll('rect')
    .data(ten)
    .enter()
    .append('rect')
    .attr('height', barHeight)
    .attr('y', (p, i) => i * space)
    .attr('width', (p, i) => p["GDP per capita"] * 100)
    .style('fill', '#1012')
    .style('padding', '1em')
    .style('margin', '1px')

    d3.select('svg#gdp')
    .selectAll('text')
    .data(ten)
    .enter()
    .append('text')
    .attr('y', (p, i) => i * space + 12)
    .attr('font-size', '12pt')
    .text((p, i) => `${p["Country or region"]}: ${p["GDP per capita"]}`)
    .attr('color', '#fff')


    d3.select('svg#social')
    .selectAll('rect')
    .data(ten)
    .enter()
    .append('rect')
    .attr('height', barHeight)
    .attr('y', (p, i) => i * space)
    .attr('width', (p, i) => p["Social support"] * 100)
    .style('fill', '#90817E')
    .style('padding', '1em')
    .style('margin', '1px')

    d3.select('svg#social')
    .selectAll('text')
    .data(ten)
    .enter()
    .append('text')
    .attr('y', (p, i) => i * space + 12)
    .attr('font-size', '12pt')
    .text((p, i) => `${p["Country or region"]}: ${p["Social support"]}`)
    .attr('color', '#fff')
    


    d3.select('svg#health')
    .style('border', '1px solid #000')
    .selectAll('circle')
    .data(ten)
    .enter()
    .append('circle')
    .attr('r', '10px')
    .attr('cx', (p) => xScale(p['Overall rank']))
    .attr('cy', (p) => yScale(p["Healthy life expectancy"]))
    .attr('fill', 'green')
        
    d3.select('svg#health')
    .selectAll('text')
    .data(ten)
    .enter()
    .append('text')
    .attr('font-size', '10pt')
    .text(p => labelScale(p["Country or region"]))
    .attr('y', (p) => yScale(p["Healthy life expectancy"]))
    .attr('x', (p) => xScale(p['Overall rank']))
    


    d3.select('svg#gdp')
    .selectAll('rect')
    .data(ten)
    .enter()
    .append('rect')
    .attr('x', 0)
    .attr('height', barHeight)
    .attr('y', (p, i) => i * space)
    .attr('width', (p, i) => p["GDP per capita"] * 100)
    .style('fill', '#1012')
    .style('padding', '1em')
    .style('margin', '1px')

    d3.select('svg#gdp')
    .selectAll('text')
    .data(ten)
    .enter()
    .append('text')
    .attr('x', 2)
    .attr('y', (p, i) => i * space + 12)
    .attr('font-size', '12pt')
    .text((p, i) => `${p["Country or region"]}: ${p["GDP per capita"]}`)
    .attr('color', '#fff')


    d3.select('svg#gene')
    .style('border', '1px solid #000')
    .selectAll('circle')
    .data(ten)
    .enter()
    .append('circle')
    .attr('r', '10px')
    .attr('cx', (p) => xScale(p['Overall rank']))
    .attr('cy', (p) => yScale2(p["Generosity"]))
    .attr('fill', 'gold')
        
    d3.select('svg#gene')
    .selectAll('text')
    .data(ten)
    .enter()
    .append('text')
    .attr('font-size', '10pt')
    .text(p => labelScale(p["Country or region"]))
    .attr('x', (p) => xScale(p['Overall rank']))
    .attr('y', (p) => yScale2(p["Generosity"]))

})