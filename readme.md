Based on the example from [Mike Bostock](https://bl.ocks.org/mbostock/3885304)

# Population of speakers of different languages

[Banner][preview.png]

The demo can be found [here](https://valentijnkap.github.io/fe3-assessment-1/).


## Background
For this assessment I had to pick a dataset an visualize it in a basic chart from the [D3 Gallary](https://github.com/d3/d3/wiki/Gallery#basic-charts). The data set I picked showed the population of speakers of different languages. So I decided it could be visualized in a simple barchart en give it some detail along the way.

### The data

```
language	speakers
Mandarin Chinese	1090000000
English	983000000
Hindustani	544000000
Spanish	527000000
Arabic	422000000
Malay	281000000
Russian	267000000
Bengali	261000000
Portuguese	229000000
French	229000000
Hausa	150000000
Punjabi	148000000
Japanese	129000000
German	129000000
Persian	121000000
Swahili	107000000
Telugu	92000000
Javanese	84000000
Wu Chinese	80000000
Korean	77000000
Tamil	75000000
Marathi	74000000
Yue Chinese	72000000
Turkish	71000000
Vietnamese	68000000
Italian	66000000

```

## Changes
The original data from the example was shown in a percentage. With my data I needed to show numbers in millions so I needed to change the value format. After searching for the solution i stumbeld on these sites and gave me the answer:

https://github.com/d3/d3/issues/2241

The name of the languages where to lang so I had to rotate the text on the X axis. For that I Googled an solution that selected all the text elements within a group. I found that solution on:

https://bl.ocks.org/mbostock/4403522

To make the chart even more readable I wanted to give the chart some tooltips. For that I found a similair barchart but with tooltips. I picked the code that just attached the tooltip to the bars.

https://bl.ocks.org/ayala-usma/d2f3b89c84e4ed66e22d02affcdcab73

### LICENSE

[GNU General Public License, version 3.][https://opensource.org/licenses/GPL-3.0]