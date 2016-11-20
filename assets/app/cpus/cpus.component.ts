import { Component, Input, OnInit } from "@angular/core";

import { Cpu } from "./cpu.model";
import { CpuService } from "./cpu.service";

declare var d3:any;

@Component({
    selector: 'app-cpu',
    templateUrl: './cpus.component.html',
    styles: ['./cpus.scss']
})
export class CpusComponent {
    @Input() cpu: Cpu;

    constructor(private cpuService: CpuService) {}

    belongsToUser() {
        //TODO: Uncomment this in case the authentication module is implemented
        // return localStorage.getItem('userId') == this.message.userId;
    }

    ngOnInit() {
        function InitChart(input) {
                    var data = input.cpu1;
                    var data2 = input.cpu2;

                    var vis = d3.select("#visualisation"),
                        WIDTH = 800,
                        HEIGHT = 100,
                        MARGINS = {
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20
                        },

                        xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([60, 0]),

                        yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, 100]),

                        xAxis = d3.svg.axis()
                        .scale(xScale),

                        yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
                    
                    vis.append("svg:g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                        .call(xAxis);

                    vis.append("svg:g")
                        .attr("class", "y axis")
                        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                        .call(yAxis);

                    var lineGen = d3.svg.line()
                        .x(function(d) {
                            return xScale(d.time);
                        })
                        .y(function(d) {
                            return yScale(d.percentage);
                        })
                        .interpolate("step-before");

                    vis.append('svg:path')
                        .attr('d', lineGen(data))
                        .attr('stroke', 'green')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none');

                    vis.append('svg:path')
                        .attr('d', lineGen(data2))
                        .attr('stroke', 'blue')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none');
                }

                var initData = {
                    cpu1: [{
                        "percentage": "10",
                        "time": 0
                    }],
                    cpu2: [{
                        "percentage": "30",
                        "time": 0
                    }]
                };

                d3.select("#visualisation").selectAll("*").remove();
                InitChart(initData);

                setInterval(function(){

                    var vis2 = d3.select("#visualisation").selectAll("*").remove();
                    initData.cpu1.forEach(function(el){
                        el.time += 2;
                    });

                    initData.cpu2.forEach(function(el){
                        el.time += 2;
                    });

                    initData.cpu1.unshift({
                        "percentage": Math.floor(Math.random()*100).toString(),
                        "time": 0
                    });

                    initData.cpu2.unshift({
                        "percentage": Math.floor(Math.random()*100).toString(),
                        "time": 0
                    });

                    InitChart(initData);
                }, 1000);
    }
}