const submitOrderButton = document.getElementById('submitOrder');
const slider = document.getElementById('colorSlider');

//when submit button is clicked determine cost of printing job
submitOrderButton.addEventListener('click', () => { 
    let colorQuantity = document.getElementById('colorSlider').value;
    let apparelQuantity = document.getElementById('apparelCount').value;
    let apparelCost = document.getElementById('costPer').value;
    let screenCost = document.getElementById('screens').value;
    let underprint = document.getElementById('underprint').checked;
    var flash = document.getElementById('flash').checked;
    let sleevePrint = document.getElementById('sleevePrint').checked;
    let sweaterPrint = document.getElementById('sweater').checked;
    let lessMin = document.getElementById('lessMin').checked;
    let subTotalText = document.getElementById('subTotal');
    let finalTotalText = document.getElementById('finalTotal');
    

    subTotal = '';
    finalTotal = '';
    costPerPrint = '';
    
    flashCost = 0.10;
    sleevePrintCost = 0.20;
    sweaterPrintCost = 0.20;
    lessMinFee = 25;
        
    //check if underprint | if underprint color quantity +1
    function underprintCheck () {
        if(underprint == true){
            colorQuantity++;
            return colorQuantity;
        }
        else{
            return;
        }
    }

    //check other checkbox values | if true add additional cost to the per print fee
    function checkboxValueCheck () {
        if(flash == true && sleevePrint == true && sweaterPrint == true){
            costPerPrint = costPerPrint + flashCost + sleevePrintCost + sweaterPrintCost;
            return costPerPrint;
        }
        else if(flash == true && sleevePrint == false && sweaterPrint == true){
            costPerPrint = costPerPrint + flashCost + sweaterPrintCost;
            return costPerPrint;
        }
        else if(flash == true && sleevePrint == true && sweaterPrint == false){
            costPerPrint = costPerPrint + flashCost + sleevePrintCost;
            return costPerPrint;
        }
        else if(flash == false && sleevePrint == true && sweaterPrint == true){
            costPerPrint = costPerPrint + sleevePrintCost + sweaterPrintCost;
            return costPerPrint;
        }
        else if(flash == true && sleevePrint == false && sweaterPrint == false){
            costPerPrint = costPerPrint + flashCost;
            return costPerPrint;
        }
        else if(flash == false && sleevePrint == true && sweaterPrint == false){
            costPerPrint = costPerPrint + sleevePrintCost;
            return costPerPrint;
        }
        else if(flash == false && sleevePrint == false && sweaterPrint == true){
            costPerPrint = costPerPrint + sweaterPrintCost;
            return costPerPrint;
        }
        else{
            return;
        }
    }

    //total before tax calculation
    function getSubTotal () {
        if(lessMin == true){
            subTotal = (apparelQuantity * apparelCost + apparelQuantity * costPerPrint + lessMinFee) * 1.4 + colorQuantity * screenCost;
            subTotalText = subTotal.toFixed(2);
            return subTotal;
        }
        else{
            subTotal = (apparelQuantity * apparelCost + apparelQuantity * costPerPrint) * 1.4 + colorQuantity * screenCost;
            subTotalText = subTotal.toFixed(2);
            return subTotal;
        }
    };

    //final cost calculation
    function getFinalTotal () {
        if(lessMin == true){
            finalTotal = ((apparelQuantity * apparelCost + apparelQuantity * costPerPrint + lessMinFee) * 1.4 + colorQuantity * screenCost) * 1.0825;
            finalTotal = finalTotal.toFixed(2);
            return finalTotal;
        }
        else{
            finalTotal = ((apparelQuantity * apparelCost + apparelQuantity * costPerPrint) * 1.4 + colorQuantity * screenCost) * 1.0825;
            finalTotal = finalTotal.toFixed(2);
            return finalTotal;
        }
    };

    //clear data fields
    function clearData () {
        document.getElementById('colorSlider').value = 5;
        document.getElementById('apparelCount').value = '';
        document.getElementById('costPer').value = '';
        document.getElementById('sliderCount').innerHTML = '5';
        document.getElementById('underprint').checked = false;
        document.getElementById('flash').checked = false;
        document.getElementById('sleevePrint').checked = false;
        document.getElementById('sweater').checked = false;
        document.getElementById('lessMin').checked = false;
        document.getElementById('screens').value = '0';
    };

    //cost table for shirt quantity vs number of colors
    //more gracefull way? Probably
    function printCost () {
        if(apparelQuantity >= 1 && apparelQuantity <= 35){
            if(colorQuantity == 1){
                return costPerPrint = 1.20;
            }
            else if(colorQuantity == 2){
                return costPerPrint = 1.40;
            }
            else if(colorQuantity == 3){
                return costPerPrint = 1.60;
            }
            else if(colorQuantity == 4){
                return costPerPrint = 1.80;
            }
            else if(colorQuantity == 5){
                return costPerPrint = 2;
            }
            else if(colorQuantity == 6){
                return costPerPrint = 2.20;
            }
            else if(colorQuantity == 7){
                return costPerPrint = 2.40;
            }
            else if(colorQuantity == 8){
                return costPerPrint = 2.60;
            }
            else if(colorQuantity == 9){
                return costPerPrint = 2.80;
            }
            else if(colorQuantity == 10){
                return costPerPrint = 3;
            }
            else{
                return;
            }
        };
        if(apparelQuantity >= 36 && apparelQuantity <= 71){
            if(colorQuantity == 1){
                return costPerPrint = 1;
            }
            else if(colorQuantity == 2){
                return costPerPrint = 1.20;
            }
            else if(colorQuantity == 3){
                return costPerPrint = 1.40;
            }
            else if(colorQuantity == 4){
                return costPerPrint = 1.60;
            }
            else if(colorQuantity == 5){
                return costPerPrint = 1.80;
            }
            else if(colorQuantity == 6){
                return costPerPrint = 2;
            }
            else if(colorQuantity == 7){
                return costPerPrint = 2.20;
            }
            else if(colorQuantity == 8){
                return costPerPrint = 2.40;
            }
            else if(colorQuantity == 9){
                return costPerPrint = 2.60;
            }
            else if(colorQuantity == 10){
                return costPerPrint = 2.80;
            }
            else{
                return;
            }
        };
        if(apparelQuantity >= 72 && apparelQuantity <= 143){
            if(colorQuantity == 1){
                return costPerPrint = .80;
            }
            else if(colorQuantity == 2){
                return costPerPrint = 1;
            }
            else if(colorQuantity == 3){
                return costPerPrint = 1.20;
            }
            else if(colorQuantity == 4){
                return costPerPrint = 1.40;
            }
            else if(colorQuantity == 5){
                return costPerPrint = 1.60;
            }
            else if(colorQuantity == 6){
                return costPerPrint = 1.80;
            }
            else if(colorQuantity == 7){
                return costPerPrint = 2;
            }
            else if(colorQuantity == 8){
                return costPerPrint = 2.20;
            }
            else if(colorQuantity == 9){
                return costPerPrint = 2.40;
            }
            else if(colorQuantity == 10){
                return costPerPrint = 2.60;
            }
            else{
                return
            }
        }
        if(apparelQuantity >= 144 && apparelQuantity <= 287){
            if(colorQuantity == 1){
                return costPerPrint = .70;
            }
            else if(colorQuantity == 2){
                return costPerPrint = .80;
            }
            else if(colorQuantity == 3){
                return costPerPrint = .90;
            }
            else if(colorQuantity == 4){
                return costPerPrint = 1;
            }
            else if(colorQuantity == 5){
                return costPerPrint = 1.10;
            }
            else if(colorQuantity == 6){
                return costPerPrint = 1.20;
            }
            else if(colorQuantity == 7){
                return costPerPrint = 1.30;
            }
            else if(colorQuantity == 8){
                return costPerPrint = 1.40;
            }
            else if(colorQuantity == 9){
                return costPerPrint = 1.50;
            }
            else if(colorQuantity == 10){
                return costPerPrint = 1.60;
            }
            else{
                return;
            }
        }
        if(apparelQuantity >= 288 && apparelQuantity <= 575){
            if(colorQuantity == 1){
                return costPerPrint = .60;
            }
            else if(colorQuantity == 2){
                return costPerPrint = .70;
            }
            else if(colorQuantity == 3){
                return costPerPrint = .80;
            }
            else if(colorQuantity == 4){
                return costPerPrint = .90;
            }
            else if(colorQuantity == 5){
                return costPerPrint = 1;
            }
            else if(colorQuantity == 6){
                return costPerPrint = 1.10;
            }
            else if(colorQuantity == 7){
                return costPerPrint = 1.20;
            }
            else if(colorQuantity == 8){
                return costPerPrint = 1.30;
            }
            else if(colorQuantity == 9){
                return costPerPrint = 1.40;
            }
            else if(colorQuantity == 10){
                return costPerPrint = 1.50;
            }
            else{
                return;
            }
        }
        if(apparelQuantity >= 576 && apparelQuantity <= 1151){
            if(colorQuantity == 1){
                return costPerPrint = .50;
            }
            else if(colorQuantity == 2){
                return costPerPrint = .57;
            }
            else if(colorQuantity == 3){
                return costPerPrint = .64;
            }
            else if(colorQuantity == 4){
                return costPerPrint = .71;
            }
            else if(colorQuantity == 5){
                return costPerPrint = .78;
            }
            else if(colorQuantity == 6){
                return costPerPrint = .85;
            }
            else if(colorQuantity == 7){
                return costPerPrint = .92;
            }
            else if(colorQuantity == 8){
                return costPerPrint = .99;
            }
            else if(colorQuantity == 9){
                return costPerPrint = 1.06;
            }
            else if(colorQuantity == 10){
                return costPerPrint = 1.13;
            }
            else{
                return;
            }
        }
        if(apparelQuantity >= 1152 && apparelQuantity <= 3599){
            if(colorQuantity == 1){
                return costPerPrint = .45;
            }
            else if(colorQuantity == 2){
                return costPerPrint = .52;
            }
            else if(colorQuantity == 3){
                return costPerPrint = .59;
            }
            else if(colorQuantity == 4){
                return costPerPrint = .66;
            }
            else if(colorQuantity == 5){
                return costPerPrint = .73;
            }
            else if(colorQuantity == 6){
                return costPerPrint = .80;
            }
            else if(colorQuantity == 7){
                return costPerPrint = .87;
            }
            else if(colorQuantity == 8){
                return costPerPrint = .94;
            }
            else if(colorQuantity == 9){
                return costPerPrint = 1.01;
            }
            else if(colorQuantity == 10){
                return costPerPrint = 1.08;
            }
            else{
                return;
            }
        };
        if(apparelQuantity >= 3600 && apparelQuantity <= 7199){
            if(colorQuantity == 1){
                return costPerPrint = .40;
            }
            else if(colorQuantity == 2){
                return costPerPrint = .47;
            }
            else if(colorQuantity == 3){
                return costPerPrint = .54;
            }
            else if(colorQuantity == 4){
                return costPerPrint = .61;
            }
            else if(colorQuantity == 5){
                return costPerPrint = .68;
            }
            else if(colorQuantity == 6){
                return costPerPrint = .75;
            }
            else if(colorQuantity == 7){
                return costPerPrint = .82;
            }
            else if(colorQuantity == 8){
                return costPerPrint = .89;
            }
            else if(colorQuantity == 9){
                return costPerPrint = .96;
            }
            else if(colorQuantity == 10){
                return costPerPrint = 1.03;
            }
            else{
                return;
            }
        }
        if(apparelQuantity >= 7200){
            if(colorQuantity == 1){
                return costPerPrint = .35;
            }
            else if(colorQuantity == 2){
                return costPerPrint = .42;
            }
            else if(colorQuantity == 3){
                return costPerPrint = .49;
            }
            else if(colorQuantity == 4){
                return costPerPrint = .56;
            }
            else if(colorQuantity == 5){
                return costPerPrint = .63;
            }
            else if(colorQuantity == 6){
                return costPerPrint = .70;
            }
            else if(colorQuantity == 7){
                return costPerPrint = .77;
            }
            else if(colorQuantity == 8){
                return costPerPrint = .84;
            }
            else if(colorQuantity == 9){
                return costPerPrint = .91;
            }
            else if(colorQuantity == 10){
                return costPerPrint = .98;
            }
            else{
                return;
            }
        }
    }

    underprintCheck()
    printCost()
    checkboxValueCheck()
    getSubTotal()
    getFinalTotal()
    document.getElementById("perPrint").innerHTML = '$' + costPerPrint.toFixed(2);
    document.getElementById("subTotal").innerHTML = '$' + subTotal.toFixed(2);
    document.getElementById("finalTotal").innerHTML = '$' + finalTotal;
    clearData()
});

//slider value change when slider is moved
slider.addEventListener('change', () => {
    let sliderNum = document.getElementById('colorSlider').value;
    document.getElementById('sliderCount').innerHTML = sliderNum;
});
