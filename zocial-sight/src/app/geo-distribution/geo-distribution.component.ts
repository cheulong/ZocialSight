import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {TestService} from "./../test.service";
import * as D3 from 'd3';
declare let d3: any;
@Component({
  selector: 'app-geo-distribution',
  templateUrl: './geo-distribution.component.html',
  styleUrls: ['./geo-distribution.component.scss']
})
export class GeoDistributionComponent implements OnInit {
  width = 300;
    height = 300;
     svg:any;
   bigText:any;
   centered:any;
   g:any;
   mapLayer:any;
   xym:any;
   path:any;
   populations=[];
   color:any;
   provinces:any=[];
   temp:any;
   datas=[];
   max:number;
   initValue= true;
dataSource:any;
foods = [
  { value: '1day', viewValue: '1day' },
  { value: '3days', viewValue: '3days' },
  { value: '7days', viewValue: '7days' },
  { value: '30days', viewValue: '30days' }
];
   selected = '30days';
index=0;
provinces1=[];
  constructor(private testService:TestService) {


  }

  ngOnInit() {
this.getLocation(' 30days ');

  }

init(){
  if(!this.initValue){
    this.index=0;
    d3.select("div.geo").removeChild(d3.select("div.geo").childNodes[0]);
    d3.select("div.geo").removeChild(d3.select("div.geo").childNodes[0])
  console.log('hi');
  } else{
  console.log('hi1');
    this.initValue=false;
  }
  this.bigText = d3.select("div.geo").append('text')
    .classed('big-text', true);
  this.color = D3.scaleThreshold()
    .domain(D3.range(1, 10));
    
    this.color.range(D3.schemeBlues[9]);
    this.svg = d3.select("div.geo").append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .style("margin-top",-30);

      d3.tsv("./../../assets/c.tsv", (d)=> {
          this.populations=d;

for(let a of this.populations){
  a.Population=this.datas[this.index].num;
  if(this.datas[this.index].num!=0&&this.provinces1.length<5){
    this.provinces1.push(this.datas[this.index]);
  }
  this.index++;

this.provinces.push(a.Province);
}
this.provinces1.sort(function(obj1, obj2) {
	// Ascending: first age less than the previous
	return obj2.num -  obj1.num ;
});

});



   //
   //     this.g = this.svg.append("g")
   //         .attr("class", "key")
   //         .attr("transform", "translate(0,40)")
   //         .selectAll("rect")
   // .data(this.color.range().forEach(v){
   //     v = this.color.invertExtent(v);
   //     if (d[0] == null) d[0] = x.domain()[0];
   //     if (d[1] == null) d[1] = x.domain()[1];
   //     return d;
   //   }))
       //       .enter().append("rect")
       //         .attr("height", 8)
       //         .attr("x", function(d) { return x(d[0]); })
       //         .attr("width", function(d) { return x(d[1]) - x(d[0]); })
       //         .attr("fill", function(d) { return color(d[0]); });

    // Add background
    // this.svg.append('rect')
    //   .style("fill", "#fff")
    //   .attr('width', this.width)
    //   .attr('height', this.height);
   //.on('click', this.clicked(event));




     this.g = this.svg.append('g');
     this.mapLayer = this.g.append('g')
      .classed('map-layer', true);

     this.xym = d3.geo.mercator();
     this.path = d3.geo.path().projection(this.xym);

    // Customize the projection to make the center of Thailand become the center of the map
    this.xym.rotate([-100.6331, -13.2]);
    this.xym.translate([this.width / 2, this.height / 2]);
    this.xym.scale(900);

    d3.json("https://raw.githubusercontent.com/apisit/thailand.json/master/thailand.json", (data)=> {
      this.mapLayer.selectAll("path").data(data.features)
        .enter().append("path")
        .attr("d", this.path)
        .attr('vector-effect', 'non-scaling-stroke')
        .style("fill",  (d, i) => {
        //  console.log(this.populations);

         this.max=D3.max(this.populations,(d)=>parseInt(d.Population));

          return this.color(Math.ceil(parseInt(this.populations[this.provinces.indexOf(d.properties.name)].Population)*9/this.max));
        })
        .append("title").text((d,i) =>
          d.properties.name+" "+Math.ceil(parseInt(this.datas[this.provinces.indexOf(d.properties.name)].num))
        );
        // .on("mouseover", (d)=> {
        //   this.mouseover(d);
        // });
      //  .on("mouseout", this.mouseout(event))
      //  .on("click", this.clicked(event))
    });
}



  // Get province name
  // nameFn(d){
  //   return d && d.properties ? d.properties.name: null;
  // }

   mouseover(d){
     //console.log(this.populations[i].Province);
     // console.log(this.provinces.indexOf(d.properties.name));
     // console.log(d.properties.name);
      //console.log(this.populations[this.provinces.indexOf(d.properties.name)].Population);
     //d3.select(d)
     //.style("fill", function() { return '#f90' });

    //this.bigText.text(this.nameFn(d));
  }

  //  mouseout(d){
  //   d3.select(d).style("fill", "#44aaee")
  //   // Reset province color
  //   this.mapLayer.selectAll('path')
  //     .style('fill', function(d){return this.centered && d===this.centered ? '#D5708B' : '#4ae';});
  //   // Set Provice name
  //   if (this.centered) {
  //     this.bigText.text(this.nameFn(this.centered));
  //   } else {
  //     this.bigText.text('');
  //   }
  // }
//  When clicked, zoom in
   // clicked(d) {
   //  let x, y, k;
   //
   //  // Compute centroid of the selected path
   //  if (d && this.centered !== d) {
   //    let centroid = this.path.centroid(d);
   //    x = centroid[0];
   //    y = centroid[1];
   //    k = 4;
   //    this.centered = d;
   //  } else {
   //    x = this.width / 2;
   //    y = this.height / 2;
   //    k = 1;
   //    this.centered = null;
   //  }

    //Highlight the clicked province
    // this.mapLayer.selectAll('path')
    //   .style('fill', function(d){return this.centered && d===this.centered ? '#D5708B' : '#44aaee';});

    // Zoom
  //   this.g.transition()
  //     .duration(750)
  //     .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');
  //
  // }
  getLocation(date){
  this.testService.getLocation(date)
  .subscribe(res=>{
    this.temp=res;
    this.datas=this.temp;
console.log(this.datas);

    this.init();
   })
}
}
