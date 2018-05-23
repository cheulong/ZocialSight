import { Component, Input, OnInit } from '@angular/core';
import * as D3 from 'd3';
import {TestService} from "./../test.service";
import { Data } from './../share/data';
declare let d3: any;

@Component({
  selector   : 'word-cloud',
  template: `<div class="word-cloud"></div>`
})
export class WordCloudComponent implements OnInit {

  @Input() wordData;
  data1 =['Data','Chea'];
data=[];
  private  rawData:any;
  private svg;               // SVG in which we will print our chart
  private margin: {          // Space between the svg borders and the actual chart graphic
    top: number,
    right: number,
    bottom: number,
    left: number
  };
  private width: number;      // Component width
  private height: number;     // Component height
  private fillScale;
  private scale;
  private scaleWeight;    // D3 scale for text color
  tempData = [];

  constructor(private testService:TestService) {

  }

  ngOnInit() {
    let cls = this;
    this.testService.getAdvantageData()
    .subscribe(res=>{
       this.rawData=res;
       for(let a of this.rawData){
         this.data.push({text:a.Name, size: a.score});

       }
       // this.data = this.data1.map(function(d) {
       //
       //       return {text: d, size: cls.getRandom()};
       //
       //     })
           this.setup();
             this.buildSVG();
             this.populate();

    })







  }

  private getRandom() {
    let cls = this;
    let size = 10 + Math.random() * 100;
    if(size > 70 && this.tempData.length <= 10) {
      this.tempData.push(size);
    }

    if(this.tempData.length > 10 && size > 14) {
      return 12;
    }

    return size;
  }


  private setup() {

    this.width = 400;
    this.height = this.width * 0.5 ;


    this.fillScale = D3.scaleOrdinal(D3.schemeCategory10);
    this.scale=D3.scaleLinear()
    .domain([D3.min(this.data,(d)=>d.size),D3.max(this.data,(d)=>d.size)])
    .range([5, 20]);
    this.scaleWeight=D3.scaleQuantize()
    .domain([5,20])
    .range([100,300,500,700, 900]);
  }

  private buildSVG() {
    this.svg = D3.select("div.word-cloud")
                    .append('svg')
                    .attr('width', this.width )
                    .attr('height', this.height)
                    .style('position','absolute')
                    .style('top',5)
                    .style('left',-20)
                    .append('g')
                    .attr('width', this.width )
                    .attr('height', this.height)
                    .attr('transform', 'translate(' + ~~(this.width / 2) + ',' + ~~(this.height / 2) + ')');
  }

  private populate() {
    let fontFace: string = ('Impact' == null) ? 'Arial' : 'Impact';
    let fontWeight: string = (this.wordData.settings.fontWeight == null) ? 'normal' : this.wordData.settings.fontWeight;
    let spiralType: string = (this.wordData.settings.spiral == null) ? 'archimedean' : this.wordData.settings.spiral;

    d3.layout.cloud()
      .size([this.width, this.height])
      .words(this.data)
      .font(fontFace)
      .rotate(() => (~~(Math.random() * 2) * 90))
      .fontSize(d => this.scale(d.size))
      .spiral(spiralType)
      .on('end', () => {
        this.drawWordCloud(this.data);
      })
      .start();
  }

  private drawWordCloud(words) {
console.log(words);
     this.svg
         .selectAll('text')
         .data(words)
         .enter()
         .append('text')
         .style('font-weight',d =>this.scaleWeight(d.size))
         .style('font-size', d => d.size + 'px')
         .style('fill', (d, i) => {
           return this.fillScale(i);
         })
         .attr('text-anchor', 'middle')
         .attr('transform', d => 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')')
         .attr('class', 'word-cloud')
         .text(d => {
           return d.text;
         });
   }

}
