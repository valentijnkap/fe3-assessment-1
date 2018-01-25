// Create the padding within the svg
var svg = d3.select("svg"),
	margin = {
		top: 20, right: 20, bottom: 100, left: 40
	},
	width = +svg.attr("width") - margin.left - margin.right,
	height = +svg.attr("height") - margin.top - margin.bottom

// Set the scale of the graph acording to the width of the svg.
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),// Adding the padding to keep space between the bars
	y = d3.scaleLinear().rangeRound([height, 0])

// Add a group within the svg and place it in the middle.
var g = svg.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")")

// Formatting the amount of speakers in a smaller more readable value on the Y axis.
var formatSpeakers = d3.format(".3s")

// Add a tooltip to the body and store it for later use.
var tooltip = d3.select("body").append("div").attr("class", "toolTip")

// load the the data and pass it back in a function.
d3.tsv("index.tsv", function(d) {
	
	return d;

}, function(error, data) {

	// Throws an error when there is someting wrong with the data.
	if (error) throw error

	// Places the labels on the X and Y axis and stets a max to the Y domain.
	x.domain(data.map(function(d) { return d.language; }))
	y.domain([0, d3.max(data, function(d) { return d.speakers; })])

	g.append("g")
		.attr("class", "axis axis--x")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x))
			// To rotate the names of the languages I applied the following styles.
			.selectAll("text")
			.attr("y", 0)
			.attr("x", 10)
			.attr("dy", ".35em")
			.attr("transform", "rotate(90)")
			.style("text-anchor", "start")

	g.append("g")
		.attr("class", "axis axis--y")
		// Here I eventually format the value on the Y axis to get the result 1m for example.
		.call(d3.axisLeft(y)
			.tickFormat(function(d) { 
				return formatSpeakers(d)
			})
		)

	g.selectAll(".bar")
		.data(data)
		.enter().append("rect")
			.attr("class", "bar")
			.attr("fill", "#E27C29")
			.attr("x", function(d) { return x(d.language) })
			.attr("y", function(d) { return y(d.speakers) })
			.attr("width", x.bandwidth())
			.attr("height", function(d) { return height - y(d.speakers); })
			
			// Applaying a tooltip upon the bars so we can see the exact number.
			.on("mousemove", function(d){
				d3.select(this).attr("fill", "#588C73")
				tooltip
					.style("left", d3.event.pageX - 50 + "px")// This wil make the mouse as starting point for the tooltip.
					.style("top", d3.event.pageY - 70 + "px")// Same as this.
					.style("display", "inline-block")
					.html((d.language) + ": " + d.speakers)
			})
			// On the mouse out the bars will return in their original state.
			.on("mouseout", function(d){
				d3.select(this).attr("fill", "#E27C29") 
				tooltip.style("display", "none")
			})

});