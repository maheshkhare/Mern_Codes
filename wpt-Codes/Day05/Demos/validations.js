//Development Version of JS code
function ValidateEmpty(ID_Of_ControlToValidate, ID_Of_ErrorDIV,ErrorMessage)
{
    var ControlToValidate = document.getElementById(ID_Of_ControlToValidate);
    var ErrorDIV = document.getElementById(ID_Of_ErrorDIV);

    if (ControlToValidate.value!="")
    {
       ErrorDIV.innerHTML = "";
       return true;
    } 
    else
    {
        ErrorDIV.innerHTML = ErrorMessage;
        return false;
    }
}