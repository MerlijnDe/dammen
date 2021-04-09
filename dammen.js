var InsideCell = "iets wat een steen voorstelt + <button onclick="placemovebutton">move piece</button>"
var cellselectedpiece = coordinaat van een bepaalt stukje;
 
function MoveButtonPressed(nieuwePositie){
document.getelementbyid(oude plek steen) = ' ';
document.getelementbyid(nieuwe plek steen) = insidecell;
}
 
function placemovebutton(){
 
document.getelementbyid(linksvoren)='<Button onclick='movebuttonpressed(coordinaat linksvoren)'></button>';
document.getelementbyid(rechtsvoren)='<Button onclick='movebuttonpressed(coordinaat rechtsvoren)'></button>';
}
 
function checkWin (){
 
 
}
 
function switchPlayer () {
 
 }
var leap
}
 
//checked of er een stuk geslagen wordt, genaamd een leap.
//Dit zijn de verschillende mogelijkheden van slaan,hier mee kan vastgesteld worden of er een leap is geweest. Leap is of true of false
if (row2 > row1 && column2 > column1)
{
    if (board[row2 - 1][column2 - 1] == ' ')
    {
        leap = false;
        return false;
    }
}
else if (row2 > row1 && column2 < column1)
{
    if (board[row2 - 1][column2 + 1] == ' ')
    {
        leap = false;
        return false;
    }
} 
else if (row2 < row1 && column2 > column1)
{
    if (board[row2 + 1][column2 - 1] == ' ')
    {
        leap = false;
        return false;
    }
}
else if (row2 < row1 && column2 < column1)
{
    if (board[row2 + 1][column2 + 1] == ' ')
    {
        leap = false;
        return false;
    }
}
//Als al deze mogelijkheden false zijn, gaan het script verder.
//Als alle false mogelijkheden zijn overgeslagen, moet er dus een leap zijn geweest. Dan is leap dus True
leap = true;
return true;
}
 
leap = false;
return true;
}



