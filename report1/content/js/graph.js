/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 564.0, "minX": 0.0, "maxY": 2214.0, "series": [{"data": [[0.0, 564.0], [0.1, 566.0], [0.2, 568.0], [0.3, 568.0], [0.4, 569.0], [0.5, 569.0], [0.6, 569.0], [0.7, 570.0], [0.8, 571.0], [0.9, 571.0], [1.0, 572.0], [1.1, 572.0], [1.2, 573.0], [1.3, 573.0], [1.4, 573.0], [1.5, 573.0], [1.6, 573.0], [1.7, 573.0], [1.8, 573.0], [1.9, 574.0], [2.0, 574.0], [2.1, 574.0], [2.2, 574.0], [2.3, 574.0], [2.4, 574.0], [2.5, 575.0], [2.6, 575.0], [2.7, 575.0], [2.8, 575.0], [2.9, 575.0], [3.0, 575.0], [3.1, 575.0], [3.2, 576.0], [3.3, 576.0], [3.4, 576.0], [3.5, 576.0], [3.6, 576.0], [3.7, 576.0], [3.8, 576.0], [3.9, 576.0], [4.0, 576.0], [4.1, 576.0], [4.2, 577.0], [4.3, 577.0], [4.4, 577.0], [4.5, 577.0], [4.6, 577.0], [4.7, 577.0], [4.8, 578.0], [4.9, 578.0], [5.0, 578.0], [5.1, 578.0], [5.2, 578.0], [5.3, 578.0], [5.4, 578.0], [5.5, 578.0], [5.6, 578.0], [5.7, 578.0], [5.8, 579.0], [5.9, 579.0], [6.0, 579.0], [6.1, 579.0], [6.2, 579.0], [6.3, 579.0], [6.4, 579.0], [6.5, 579.0], [6.6, 579.0], [6.7, 579.0], [6.8, 579.0], [6.9, 579.0], [7.0, 580.0], [7.1, 580.0], [7.2, 580.0], [7.3, 580.0], [7.4, 580.0], [7.5, 580.0], [7.6, 580.0], [7.7, 580.0], [7.8, 581.0], [7.9, 581.0], [8.0, 581.0], [8.1, 581.0], [8.2, 581.0], [8.3, 581.0], [8.4, 581.0], [8.5, 581.0], [8.6, 581.0], [8.7, 581.0], [8.8, 581.0], [8.9, 582.0], [9.0, 582.0], [9.1, 582.0], [9.2, 582.0], [9.3, 582.0], [9.4, 582.0], [9.5, 582.0], [9.6, 582.0], [9.7, 582.0], [9.8, 582.0], [9.9, 583.0], [10.0, 583.0], [10.1, 583.0], [10.2, 583.0], [10.3, 583.0], [10.4, 583.0], [10.5, 583.0], [10.6, 583.0], [10.7, 583.0], [10.8, 583.0], [10.9, 583.0], [11.0, 583.0], [11.1, 583.0], [11.2, 583.0], [11.3, 584.0], [11.4, 584.0], [11.5, 584.0], [11.6, 584.0], [11.7, 584.0], [11.8, 584.0], [11.9, 584.0], [12.0, 584.0], [12.1, 584.0], [12.2, 584.0], [12.3, 584.0], [12.4, 584.0], [12.5, 584.0], [12.6, 584.0], [12.7, 585.0], [12.8, 585.0], [12.9, 585.0], [13.0, 585.0], [13.1, 585.0], [13.2, 585.0], [13.3, 585.0], [13.4, 585.0], [13.5, 585.0], [13.6, 586.0], [13.7, 586.0], [13.8, 586.0], [13.9, 586.0], [14.0, 586.0], [14.1, 586.0], [14.2, 586.0], [14.3, 586.0], [14.4, 586.0], [14.5, 586.0], [14.6, 586.0], [14.7, 586.0], [14.8, 586.0], [14.9, 587.0], [15.0, 587.0], [15.1, 587.0], [15.2, 587.0], [15.3, 587.0], [15.4, 587.0], [15.5, 587.0], [15.6, 587.0], [15.7, 587.0], [15.8, 587.0], [15.9, 587.0], [16.0, 587.0], [16.1, 587.0], [16.2, 587.0], [16.3, 588.0], [16.4, 588.0], [16.5, 588.0], [16.6, 588.0], [16.7, 588.0], [16.8, 588.0], [16.9, 588.0], [17.0, 588.0], [17.1, 588.0], [17.2, 589.0], [17.3, 589.0], [17.4, 589.0], [17.5, 589.0], [17.6, 589.0], [17.7, 589.0], [17.8, 589.0], [17.9, 589.0], [18.0, 589.0], [18.1, 589.0], [18.2, 589.0], [18.3, 589.0], [18.4, 589.0], [18.5, 589.0], [18.6, 589.0], [18.7, 589.0], [18.8, 589.0], [18.9, 589.0], [19.0, 590.0], [19.1, 590.0], [19.2, 590.0], [19.3, 590.0], [19.4, 590.0], [19.5, 590.0], [19.6, 590.0], [19.7, 590.0], [19.8, 590.0], [19.9, 590.0], [20.0, 591.0], [20.1, 591.0], [20.2, 591.0], [20.3, 591.0], [20.4, 591.0], [20.5, 591.0], [20.6, 591.0], [20.7, 591.0], [20.8, 591.0], [20.9, 591.0], [21.0, 591.0], [21.1, 592.0], [21.2, 592.0], [21.3, 592.0], [21.4, 592.0], [21.5, 592.0], [21.6, 592.0], [21.7, 592.0], [21.8, 592.0], [21.9, 592.0], [22.0, 592.0], [22.1, 592.0], [22.2, 592.0], [22.3, 592.0], [22.4, 593.0], [22.5, 593.0], [22.6, 593.0], [22.7, 593.0], [22.8, 593.0], [22.9, 593.0], [23.0, 593.0], [23.1, 593.0], [23.2, 593.0], [23.3, 593.0], [23.4, 593.0], [23.5, 593.0], [23.6, 593.0], [23.7, 594.0], [23.8, 594.0], [23.9, 594.0], [24.0, 594.0], [24.1, 594.0], [24.2, 594.0], [24.3, 594.0], [24.4, 594.0], [24.5, 594.0], [24.6, 594.0], [24.7, 594.0], [24.8, 594.0], [24.9, 594.0], [25.0, 594.0], [25.1, 595.0], [25.2, 595.0], [25.3, 595.0], [25.4, 595.0], [25.5, 595.0], [25.6, 595.0], [25.7, 595.0], [25.8, 595.0], [25.9, 595.0], [26.0, 595.0], [26.1, 596.0], [26.2, 596.0], [26.3, 596.0], [26.4, 596.0], [26.5, 596.0], [26.6, 596.0], [26.7, 596.0], [26.8, 596.0], [26.9, 596.0], [27.0, 596.0], [27.1, 596.0], [27.2, 596.0], [27.3, 597.0], [27.4, 597.0], [27.5, 597.0], [27.6, 597.0], [27.7, 597.0], [27.8, 597.0], [27.9, 597.0], [28.0, 597.0], [28.1, 597.0], [28.2, 597.0], [28.3, 598.0], [28.4, 598.0], [28.5, 598.0], [28.6, 598.0], [28.7, 598.0], [28.8, 598.0], [28.9, 598.0], [29.0, 598.0], [29.1, 598.0], [29.2, 598.0], [29.3, 598.0], [29.4, 598.0], [29.5, 598.0], [29.6, 598.0], [29.7, 599.0], [29.8, 599.0], [29.9, 599.0], [30.0, 599.0], [30.1, 599.0], [30.2, 599.0], [30.3, 599.0], [30.4, 599.0], [30.5, 599.0], [30.6, 599.0], [30.7, 599.0], [30.8, 599.0], [30.9, 599.0], [31.0, 599.0], [31.1, 599.0], [31.2, 600.0], [31.3, 600.0], [31.4, 600.0], [31.5, 600.0], [31.6, 600.0], [31.7, 600.0], [31.8, 600.0], [31.9, 600.0], [32.0, 600.0], [32.1, 600.0], [32.2, 600.0], [32.3, 600.0], [32.4, 600.0], [32.5, 600.0], [32.6, 600.0], [32.7, 601.0], [32.8, 601.0], [32.9, 601.0], [33.0, 601.0], [33.1, 601.0], [33.2, 601.0], [33.3, 601.0], [33.4, 601.0], [33.5, 601.0], [33.6, 601.0], [33.7, 601.0], [33.8, 601.0], [33.9, 601.0], [34.0, 601.0], [34.1, 602.0], [34.2, 602.0], [34.3, 602.0], [34.4, 602.0], [34.5, 602.0], [34.6, 602.0], [34.7, 602.0], [34.8, 602.0], [34.9, 602.0], [35.0, 602.0], [35.1, 602.0], [35.2, 602.0], [35.3, 602.0], [35.4, 603.0], [35.5, 603.0], [35.6, 603.0], [35.7, 603.0], [35.8, 603.0], [35.9, 603.0], [36.0, 603.0], [36.1, 603.0], [36.2, 603.0], [36.3, 603.0], [36.4, 603.0], [36.5, 603.0], [36.6, 603.0], [36.7, 604.0], [36.8, 604.0], [36.9, 604.0], [37.0, 604.0], [37.1, 604.0], [37.2, 604.0], [37.3, 604.0], [37.4, 604.0], [37.5, 604.0], [37.6, 604.0], [37.7, 604.0], [37.8, 604.0], [37.9, 604.0], [38.0, 605.0], [38.1, 605.0], [38.2, 605.0], [38.3, 605.0], [38.4, 605.0], [38.5, 605.0], [38.6, 605.0], [38.7, 605.0], [38.8, 605.0], [38.9, 605.0], [39.0, 605.0], [39.1, 605.0], [39.2, 605.0], [39.3, 605.0], [39.4, 605.0], [39.5, 606.0], [39.6, 606.0], [39.7, 606.0], [39.8, 606.0], [39.9, 606.0], [40.0, 606.0], [40.1, 606.0], [40.2, 606.0], [40.3, 606.0], [40.4, 606.0], [40.5, 606.0], [40.6, 606.0], [40.7, 606.0], [40.8, 607.0], [40.9, 607.0], [41.0, 607.0], [41.1, 607.0], [41.2, 607.0], [41.3, 607.0], [41.4, 607.0], [41.5, 607.0], [41.6, 607.0], [41.7, 607.0], [41.8, 608.0], [41.9, 608.0], [42.0, 608.0], [42.1, 608.0], [42.2, 608.0], [42.3, 608.0], [42.4, 608.0], [42.5, 608.0], [42.6, 608.0], [42.7, 608.0], [42.8, 608.0], [42.9, 608.0], [43.0, 608.0], [43.1, 609.0], [43.2, 609.0], [43.3, 609.0], [43.4, 609.0], [43.5, 609.0], [43.6, 609.0], [43.7, 609.0], [43.8, 609.0], [43.9, 609.0], [44.0, 609.0], [44.1, 609.0], [44.2, 610.0], [44.3, 610.0], [44.4, 610.0], [44.5, 610.0], [44.6, 610.0], [44.7, 610.0], [44.8, 610.0], [44.9, 610.0], [45.0, 610.0], [45.1, 610.0], [45.2, 610.0], [45.3, 610.0], [45.4, 610.0], [45.5, 610.0], [45.6, 611.0], [45.7, 611.0], [45.8, 611.0], [45.9, 611.0], [46.0, 611.0], [46.1, 611.0], [46.2, 611.0], [46.3, 611.0], [46.4, 612.0], [46.5, 612.0], [46.6, 612.0], [46.7, 612.0], [46.8, 612.0], [46.9, 612.0], [47.0, 612.0], [47.1, 612.0], [47.2, 612.0], [47.3, 612.0], [47.4, 612.0], [47.5, 612.0], [47.6, 612.0], [47.7, 612.0], [47.8, 612.0], [47.9, 613.0], [48.0, 613.0], [48.1, 613.0], [48.2, 613.0], [48.3, 613.0], [48.4, 613.0], [48.5, 613.0], [48.6, 613.0], [48.7, 613.0], [48.8, 613.0], [48.9, 613.0], [49.0, 614.0], [49.1, 614.0], [49.2, 614.0], [49.3, 614.0], [49.4, 614.0], [49.5, 614.0], [49.6, 614.0], [49.7, 614.0], [49.8, 614.0], [49.9, 614.0], [50.0, 614.0], [50.1, 614.0], [50.2, 615.0], [50.3, 615.0], [50.4, 615.0], [50.5, 615.0], [50.6, 615.0], [50.7, 615.0], [50.8, 615.0], [50.9, 615.0], [51.0, 615.0], [51.1, 615.0], [51.2, 616.0], [51.3, 616.0], [51.4, 616.0], [51.5, 616.0], [51.6, 616.0], [51.7, 616.0], [51.8, 616.0], [51.9, 616.0], [52.0, 617.0], [52.1, 617.0], [52.2, 617.0], [52.3, 617.0], [52.4, 617.0], [52.5, 617.0], [52.6, 617.0], [52.7, 617.0], [52.8, 617.0], [52.9, 617.0], [53.0, 617.0], [53.1, 618.0], [53.2, 618.0], [53.3, 618.0], [53.4, 618.0], [53.5, 618.0], [53.6, 618.0], [53.7, 618.0], [53.8, 618.0], [53.9, 618.0], [54.0, 618.0], [54.1, 618.0], [54.2, 619.0], [54.3, 619.0], [54.4, 619.0], [54.5, 619.0], [54.6, 619.0], [54.7, 619.0], [54.8, 619.0], [54.9, 619.0], [55.0, 619.0], [55.1, 619.0], [55.2, 619.0], [55.3, 619.0], [55.4, 619.0], [55.5, 620.0], [55.6, 620.0], [55.7, 620.0], [55.8, 620.0], [55.9, 620.0], [56.0, 620.0], [56.1, 620.0], [56.2, 620.0], [56.3, 620.0], [56.4, 620.0], [56.5, 621.0], [56.6, 621.0], [56.7, 621.0], [56.8, 621.0], [56.9, 621.0], [57.0, 621.0], [57.1, 621.0], [57.2, 621.0], [57.3, 622.0], [57.4, 622.0], [57.5, 622.0], [57.6, 622.0], [57.7, 622.0], [57.8, 622.0], [57.9, 622.0], [58.0, 622.0], [58.1, 622.0], [58.2, 623.0], [58.3, 623.0], [58.4, 623.0], [58.5, 623.0], [58.6, 623.0], [58.7, 623.0], [58.8, 623.0], [58.9, 624.0], [59.0, 624.0], [59.1, 624.0], [59.2, 624.0], [59.3, 624.0], [59.4, 625.0], [59.5, 625.0], [59.6, 625.0], [59.7, 625.0], [59.8, 625.0], [59.9, 625.0], [60.0, 626.0], [60.1, 626.0], [60.2, 626.0], [60.3, 626.0], [60.4, 626.0], [60.5, 626.0], [60.6, 626.0], [60.7, 626.0], [60.8, 626.0], [60.9, 627.0], [61.0, 627.0], [61.1, 627.0], [61.2, 627.0], [61.3, 627.0], [61.4, 627.0], [61.5, 628.0], [61.6, 628.0], [61.7, 628.0], [61.8, 628.0], [61.9, 628.0], [62.0, 628.0], [62.1, 628.0], [62.2, 628.0], [62.3, 628.0], [62.4, 628.0], [62.5, 629.0], [62.6, 629.0], [62.7, 629.0], [62.8, 629.0], [62.9, 629.0], [63.0, 630.0], [63.1, 630.0], [63.2, 630.0], [63.3, 630.0], [63.4, 630.0], [63.5, 630.0], [63.6, 630.0], [63.7, 630.0], [63.8, 630.0], [63.9, 630.0], [64.0, 631.0], [64.1, 631.0], [64.2, 631.0], [64.3, 631.0], [64.4, 631.0], [64.5, 631.0], [64.6, 631.0], [64.7, 631.0], [64.8, 632.0], [64.9, 632.0], [65.0, 632.0], [65.1, 632.0], [65.2, 632.0], [65.3, 632.0], [65.4, 632.0], [65.5, 633.0], [65.6, 633.0], [65.7, 633.0], [65.8, 633.0], [65.9, 633.0], [66.0, 633.0], [66.1, 634.0], [66.2, 634.0], [66.3, 634.0], [66.4, 634.0], [66.5, 634.0], [66.6, 634.0], [66.7, 634.0], [66.8, 635.0], [66.9, 635.0], [67.0, 635.0], [67.1, 635.0], [67.2, 636.0], [67.3, 636.0], [67.4, 636.0], [67.5, 636.0], [67.6, 636.0], [67.7, 636.0], [67.8, 636.0], [67.9, 636.0], [68.0, 636.0], [68.1, 637.0], [68.2, 637.0], [68.3, 637.0], [68.4, 637.0], [68.5, 637.0], [68.6, 638.0], [68.7, 638.0], [68.8, 638.0], [68.9, 639.0], [69.0, 639.0], [69.1, 639.0], [69.2, 639.0], [69.3, 639.0], [69.4, 640.0], [69.5, 640.0], [69.6, 640.0], [69.7, 640.0], [69.8, 641.0], [69.9, 641.0], [70.0, 641.0], [70.1, 641.0], [70.2, 641.0], [70.3, 641.0], [70.4, 641.0], [70.5, 642.0], [70.6, 642.0], [70.7, 642.0], [70.8, 643.0], [70.9, 643.0], [71.0, 643.0], [71.1, 643.0], [71.2, 643.0], [71.3, 644.0], [71.4, 644.0], [71.5, 645.0], [71.6, 645.0], [71.7, 645.0], [71.8, 646.0], [71.9, 646.0], [72.0, 646.0], [72.1, 646.0], [72.2, 647.0], [72.3, 647.0], [72.4, 647.0], [72.5, 647.0], [72.6, 647.0], [72.7, 648.0], [72.8, 648.0], [72.9, 648.0], [73.0, 649.0], [73.1, 649.0], [73.2, 649.0], [73.3, 649.0], [73.4, 649.0], [73.5, 649.0], [73.6, 649.0], [73.7, 650.0], [73.8, 650.0], [73.9, 651.0], [74.0, 651.0], [74.1, 651.0], [74.2, 651.0], [74.3, 652.0], [74.4, 653.0], [74.5, 653.0], [74.6, 654.0], [74.7, 655.0], [74.8, 655.0], [74.9, 655.0], [75.0, 655.0], [75.1, 655.0], [75.2, 656.0], [75.3, 656.0], [75.4, 656.0], [75.5, 657.0], [75.6, 657.0], [75.7, 657.0], [75.8, 657.0], [75.9, 658.0], [76.0, 658.0], [76.1, 659.0], [76.2, 659.0], [76.3, 659.0], [76.4, 660.0], [76.5, 660.0], [76.6, 660.0], [76.7, 660.0], [76.8, 661.0], [76.9, 661.0], [77.0, 662.0], [77.1, 662.0], [77.2, 662.0], [77.3, 663.0], [77.4, 663.0], [77.5, 663.0], [77.6, 664.0], [77.7, 665.0], [77.8, 665.0], [77.9, 665.0], [78.0, 665.0], [78.1, 665.0], [78.2, 666.0], [78.3, 666.0], [78.4, 666.0], [78.5, 667.0], [78.6, 667.0], [78.7, 668.0], [78.8, 668.0], [78.9, 668.0], [79.0, 669.0], [79.1, 670.0], [79.2, 670.0], [79.3, 671.0], [79.4, 672.0], [79.5, 672.0], [79.6, 673.0], [79.7, 673.0], [79.8, 674.0], [79.9, 674.0], [80.0, 674.0], [80.1, 674.0], [80.2, 676.0], [80.3, 676.0], [80.4, 677.0], [80.5, 677.0], [80.6, 678.0], [80.7, 679.0], [80.8, 679.0], [80.9, 679.0], [81.0, 680.0], [81.1, 680.0], [81.2, 681.0], [81.3, 682.0], [81.4, 682.0], [81.5, 683.0], [81.6, 683.0], [81.7, 684.0], [81.8, 685.0], [81.9, 685.0], [82.0, 686.0], [82.1, 687.0], [82.2, 687.0], [82.3, 687.0], [82.4, 688.0], [82.5, 688.0], [82.6, 689.0], [82.7, 690.0], [82.8, 690.0], [82.9, 690.0], [83.0, 690.0], [83.1, 691.0], [83.2, 692.0], [83.3, 692.0], [83.4, 693.0], [83.5, 693.0], [83.6, 694.0], [83.7, 694.0], [83.8, 695.0], [83.9, 695.0], [84.0, 696.0], [84.1, 696.0], [84.2, 697.0], [84.3, 697.0], [84.4, 698.0], [84.5, 698.0], [84.6, 699.0], [84.7, 700.0], [84.8, 700.0], [84.9, 700.0], [85.0, 702.0], [85.1, 703.0], [85.2, 704.0], [85.3, 705.0], [85.4, 705.0], [85.5, 706.0], [85.6, 707.0], [85.7, 707.0], [85.8, 708.0], [85.9, 708.0], [86.0, 709.0], [86.1, 709.0], [86.2, 710.0], [86.3, 711.0], [86.4, 712.0], [86.5, 712.0], [86.6, 713.0], [86.7, 713.0], [86.8, 714.0], [86.9, 715.0], [87.0, 716.0], [87.1, 716.0], [87.2, 717.0], [87.3, 718.0], [87.4, 719.0], [87.5, 719.0], [87.6, 720.0], [87.7, 721.0], [87.8, 722.0], [87.9, 724.0], [88.0, 724.0], [88.1, 725.0], [88.2, 725.0], [88.3, 726.0], [88.4, 727.0], [88.5, 728.0], [88.6, 731.0], [88.7, 732.0], [88.8, 732.0], [88.9, 734.0], [89.0, 735.0], [89.1, 735.0], [89.2, 736.0], [89.3, 738.0], [89.4, 739.0], [89.5, 740.0], [89.6, 741.0], [89.7, 741.0], [89.8, 742.0], [89.9, 743.0], [90.0, 744.0], [90.1, 745.0], [90.2, 748.0], [90.3, 749.0], [90.4, 750.0], [90.5, 750.0], [90.6, 752.0], [90.7, 752.0], [90.8, 753.0], [90.9, 756.0], [91.0, 756.0], [91.1, 758.0], [91.2, 759.0], [91.3, 759.0], [91.4, 762.0], [91.5, 762.0], [91.6, 763.0], [91.7, 763.0], [91.8, 764.0], [91.9, 766.0], [92.0, 766.0], [92.1, 768.0], [92.2, 770.0], [92.3, 771.0], [92.4, 773.0], [92.5, 773.0], [92.6, 775.0], [92.7, 777.0], [92.8, 779.0], [92.9, 779.0], [93.0, 780.0], [93.1, 780.0], [93.2, 781.0], [93.3, 782.0], [93.4, 785.0], [93.5, 787.0], [93.6, 789.0], [93.7, 791.0], [93.8, 791.0], [93.9, 792.0], [94.0, 795.0], [94.1, 796.0], [94.2, 797.0], [94.3, 798.0], [94.4, 801.0], [94.5, 802.0], [94.6, 803.0], [94.7, 806.0], [94.8, 807.0], [94.9, 808.0], [95.0, 810.0], [95.1, 813.0], [95.2, 813.0], [95.3, 814.0], [95.4, 816.0], [95.5, 816.0], [95.6, 819.0], [95.7, 822.0], [95.8, 823.0], [95.9, 825.0], [96.0, 830.0], [96.1, 833.0], [96.2, 836.0], [96.3, 839.0], [96.4, 842.0], [96.5, 844.0], [96.6, 846.0], [96.7, 851.0], [96.8, 856.0], [96.9, 863.0], [97.0, 867.0], [97.1, 869.0], [97.2, 872.0], [97.3, 877.0], [97.4, 887.0], [97.5, 891.0], [97.6, 902.0], [97.7, 906.0], [97.8, 931.0], [97.9, 955.0], [98.0, 993.0], [98.1, 1026.0], [98.2, 1089.0], [98.3, 1111.0], [98.4, 1179.0], [98.5, 1253.0], [98.6, 1291.0], [98.7, 1353.0], [98.8, 1381.0], [98.9, 1403.0], [99.0, 1441.0], [99.1, 1481.0], [99.2, 1506.0], [99.3, 1530.0], [99.4, 1561.0], [99.5, 1596.0], [99.6, 1779.0], [99.7, 1851.0], [99.8, 2061.0], [99.9, 2210.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 1604.0, "series": [{"data": [[2100.0, 2.0], [2200.0, 3.0], [600.0, 1604.0], [700.0, 291.0], [800.0, 97.0], [900.0, 13.0], [1000.0, 7.0], [1100.0, 6.0], [1200.0, 5.0], [1300.0, 8.0], [1400.0, 9.0], [1500.0, 10.0], [1600.0, 1.0], [1700.0, 3.0], [1800.0, 2.0], [1900.0, 1.0], [500.0, 936.0], [2000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 24.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2976.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2976.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 24.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 40.456999999999944, "minX": 1.67353038E12, "maxY": 40.456999999999944, "series": [{"data": [[1.67353038E12, 40.456999999999944]], "isOverall": false, "label": "users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67353038E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 576.0, "minX": 2.0, "maxY": 1325.0, "series": [{"data": [[2.0, 637.0], [3.0, 628.0], [4.0, 660.0], [5.0, 587.0], [6.0, 602.0], [8.0, 606.0], [9.0, 624.0], [10.0, 593.0], [11.0, 579.0], [12.0, 592.0], [14.0, 616.0], [15.0, 641.0], [16.0, 641.0], [17.0, 612.0], [19.0, 650.5], [20.0, 650.0], [21.0, 611.0], [22.0, 576.0], [23.0, 591.0], [24.0, 582.0], [25.0, 594.0], [26.0, 604.0], [27.0, 621.0], [28.0, 630.0], [30.0, 611.5], [31.0, 633.0], [33.0, 584.0], [32.0, 634.0], [35.0, 591.3082191780827], [34.0, 583.5937500000007], [37.0, 616.691991786447], [36.0, 600.8357664233571], [39.0, 643.6836158192091], [38.0, 631.8612903225802], [40.0, 652.4262295081967], [41.0, 706.8000000000001], [42.0, 717.4390243902441], [43.0, 702.8906250000001], [45.0, 742.1785714285713], [44.0, 768.5362318840575], [47.0, 774.4583333333336], [46.0, 751.3333333333331], [49.0, 773.774193548387], [48.0, 758.2682926829269], [51.0, 817.7222222222221], [50.0, 744.4799999999999], [53.0, 865.047619047619], [52.0, 835.0], [55.0, 754.8], [54.0, 862.6666666666667], [57.0, 797.4], [56.0, 610.0], [58.0, 893.8], [60.0, 1199.5], [62.0, 1325.0], [66.0, 981.8], [65.0, 711.5], [69.0, 1022.2727272727273], [70.0, 596.0], [68.0, 697.0], [75.0, 1193.5714285714287], [74.0, 975.0], [77.0, 1120.5], [79.0, 719.0], [81.0, 1270.5], [83.0, 689.2857142857143], [82.0, 743.0], [80.0, 712.0], [84.0, 628.0], [90.0, 689.3333333333334], [88.0, 686.0], [92.0, 644.3333333333334], [99.0, 1129.0], [98.0, 617.1428571428572], [97.0, 721.75], [100.0, 1171.111111111111], [102.0, 599.0], [111.0, 731.0], [113.0, 610.5], [112.0, 688.2857142857143], [123.0, 704.0], [120.0, 680.5], [126.0, 637.4285714285714], [125.0, 694.0], [124.0, 690.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[40.456999999999944, 652.207000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 126.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 5600.0, "minX": 1.67353038E12, "maxY": 171850.0, "series": [{"data": [[1.67353038E12, 171850.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.67353038E12, 5600.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67353038E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 652.207000000001, "minX": 1.67353038E12, "maxY": 652.207000000001, "series": [{"data": [[1.67353038E12, 652.207000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67353038E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 652.0866666666653, "minX": 1.67353038E12, "maxY": 652.0866666666653, "series": [{"data": [[1.67353038E12, 652.0866666666653]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67353038E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 435.3223333333327, "minX": 1.67353038E12, "maxY": 435.3223333333327, "series": [{"data": [[1.67353038E12, 435.3223333333327]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67353038E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 564.0, "minX": 1.67353038E12, "maxY": 2214.0, "series": [{"data": [[1.67353038E12, 2214.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67353038E12, 564.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67353038E12, 744.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67353038E12, 1440.7599999999948]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67353038E12, 614.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.67353038E12, 810.9499999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67353038E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 596.0, "minX": 49.0, "maxY": 820.0, "series": [{"data": [[49.0, 601.0], [52.0, 622.5], [53.0, 608.0], [54.0, 633.0], [57.0, 631.0], [56.0, 607.5], [58.0, 608.0], [59.0, 619.0], [61.0, 679.0], [60.0, 596.0], [63.0, 621.0], [62.0, 608.0], [64.0, 610.5], [66.0, 601.0], [73.0, 712.0], [120.0, 820.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 120.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 596.0, "minX": 49.0, "maxY": 818.0, "series": [{"data": [[49.0, 601.0], [52.0, 622.5], [53.0, 608.0], [54.0, 633.0], [57.0, 631.0], [56.0, 607.5], [58.0, 608.0], [59.0, 619.0], [61.0, 679.0], [60.0, 596.0], [63.0, 621.0], [62.0, 608.0], [64.0, 610.5], [66.0, 601.0], [73.0, 712.0], [120.0, 818.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 120.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 50.0, "minX": 1.67353038E12, "maxY": 50.0, "series": [{"data": [[1.67353038E12, 50.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67353038E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 50.0, "minX": 1.67353038E12, "maxY": 50.0, "series": [{"data": [[1.67353038E12, 50.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67353038E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 50.0, "minX": 1.67353038E12, "maxY": 50.0, "series": [{"data": [[1.67353038E12, 50.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67353038E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 50.0, "minX": 1.67353038E12, "maxY": 50.0, "series": [{"data": [[1.67353038E12, 50.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67353038E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

