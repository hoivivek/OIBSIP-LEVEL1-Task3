function convert(){
    
    var x1 = document.getElementById('temp1');
    var y1 = x1.options[x1.selectedIndex].value;
    var x2 = document.getElementById('temp2');
    var y2 = x2.options[x2.selectedIndex].value;
    var temp = document.getElementById('tem').value;
    if ( y1 == 'Celsius' && y2 == 'Farenhite' )
    {
        result = (temp*1.8)+32 ;
        document.getElementById('result').innerHTML = result + " " + "F";
    }

    else if ( y1 == 'Farenhite' && y2 == 'Celsius' )
    {
        result = (temp-32)*(5/9);
        document.getElementById('result').innerHTML = result + " " + "C";
    }

    else if ( y1 == 'Celsius' && y2 == 'Kelvin')
    {
        result = temp + 273.15 ;
        document.getElementById('result').innerHTML = result + " " + "K";
    }

    else if ( y1 == 'Kelvin' && y2 == 'Celsius')
    {
        result = temp-273.15 ;
        document.getElementById('result').innerHTML = result + " " + "C";
    }

    else if ( y1 == 'Farenhite' && y2 == 'Kelvin')
    {
        result = (((temp-32)*5)/9)+273.15;
        document.getElementById('result').innerHTML = result + " " +"K";
    }
    
    else if ( y1 == 'Kelvin' && y2 == 'Farenhite')
    {
        result = (temp-273.15)*(9/5)+32;
        document.getElementById('result').innerHTML = result + " " + "F";
    }
    else if (y1 == y2 & temp != '')
    {
        document.getElementById('result').innerHTML = temp + " " + y1;
    }
}