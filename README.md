# Curry.js

Some utilities for working with D3.

## Usage

This is developed as an AMD module for use with require. All the code is in `lib/curry`. You should move this whole directory to your application so that the functions are available as `curry/fn_name`.

## Tests

Run the tests with `make`

## D3

These functions help you to embrace d3's declarative nature, for example:

    // requires curry/property, curry/pipe and curry/index

    var bars = svg.selectAll('rect')
      .data(data, property('key'))

    bars.enter().append('rect')
      .attr('data-name', property('name'))
      .attr('data-value', property('value'))
      .attr('y', pipe(property('y'), yScale))
      .attr('height', pipe(property('height'), yScale))
      .attr('width', xScale.rangeBand())
      .attr('fill', pipe(index, colorScale))
      .on('mouseover', showTooltip)
      .on('mouseout', hideTooltip)
      .on('mousemove', pipe(mouseCoords, moveTooltip))

This code is making use of `curry/property` to return a property of its argument, `curry/pipe` to compose a single function made out of many smaller functions, and `curry/index` which returns the index of the data item.

You are encouraged to use `curry/pipe` to construct your own functions, e.g.

    var height = pipe(property('height'), yScale),
        fill = pipe(index, colorScale),
        top = pipe(index, multiply(30), add('px'))

## Available functions

    curry/add
    curry/and
    curry/arg
    curry/divide
    curry/eql
    curry/gt
    curry/guard
    curry/identity
    curry/index
    curry/invoke
    curry/lt
    curry/map
    curry/multiply
    curry/or
    curry/pipe
    curry/prepend
    curry/property
    curry/subtract
    curry/threq
