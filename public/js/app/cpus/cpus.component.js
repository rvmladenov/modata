import { Component, Input } from "@angular/core";
import { CpuService } from "./cpu.service";
import { SocketService } from '../socket/socket.service';
export var CpusComponent = (function () {
    function CpusComponent(cpuService, socketService) {
        this.cpuService = cpuService;
        this.socketService = socketService;
    }
    CpusComponent.prototype.belongsToUser = function () {
        //TODO: Uncomment this in case the authentication module is implemented
        // return localStorage.getItem('userId') == this.message.userId;
    };
    CpusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chartData = { cpu1: [], cpu2: [] };
        /**TODO: Implement a better way instead of subscribing to 2 different places */
        this.cpuService.getCpus()
            .subscribe(function (cps) {
            _this.cpus = cps;
            _this.runChart(_this.cpus);
        });
        this.socketService.cpus
            .subscribe(function (data) {
            _this.cpus = data.cpus;
            _this.runChart(_this.cpus);
        });
    };
    CpusComponent.prototype.runChart = function (cpus) {
        if (cpus === void 0) { cpus = []; }
        if (!cpus || (cpus && cpus.length === 0)) {
            return;
        }
        this.chartData.cpu1.forEach(function (el) {
            el.interval += 2;
        });
        this.chartData.cpu2.forEach(function (el) {
            el.interval += 2;
        });
        this.chartData.cpu1.push({
            "percentUsage": cpus[0].percentUsage.toString(),
            "interval": 0
        });
        this.chartData.cpu2.push({
            "percentUsage": cpus[1].percentUsage.toString(),
            "interval": 0
        });
        d3.select("#visualisation").selectAll("*").remove();
        this.InitChart(this.chartData);
    };
    CpusComponent.prototype.InitChart = function (input) {
        //TODO: Make this using random number of cpus using dynamic object and a simple loop with color randomize
        var data = input.cpu1;
        var data2 = input.cpu2;
        var vis = d3.select("#visualisation"), WIDTH = 600, HEIGHT = 100, MARGINS = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        }, xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([60, 0]), yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, 100]), xAxis = d3.svg.axis()
            .scale(xScale), yAxis = d3.svg.axis()
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
            .x(function (d) {
            return xScale(d.interval);
        })
            .y(function (d) {
            return yScale(d.percentUsage);
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
    };
    CpusComponent.prototype.printNumberOfPipes = function (num) {
        var result = '<span class="green">|</span>';
        for (var i = Math.floor(Number(num) / 5); i >= 0; i--) {
            result += '<span class="green">|</span>';
        }
        return result;
    };
    CpusComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-cpu',
                    templateUrl: './cpus.component.html',
                    styles: ['./cpus.scss']
                },] },
    ];
    /** @nocollapse */
    CpusComponent.ctorParameters = [
        { type: CpuService, },
        { type: SocketService, },
    ];
    CpusComponent.propDecorators = {
        'cpu': [{ type: Input },],
    };
    return CpusComponent;
}());
//# sourceMappingURL=cpus.component.js.map