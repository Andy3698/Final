function dynamic()
{
if(document.getElementById('hiring').checked)
{
document.getElementById('hr').style.display = "block";
}
else
{
document.getElementById('hr').style.display = "none";
}
return;
}

var animationElements = document.querySelectorAll('.sos')


function toggleAnimationElementInWindow(element)
{
var rect = element.getClientRects()[0]
var heightScreen = window.innerHeight

if (!(rect.bottom<0 || rect.top>heightScreen))
    {
    element.classList.add('start');
    }
    else
        element.classList.remove('start');
    }


function checkAnimation() {
    animationElements.forEach(el=>{
        toggleAnimationElementInWindow(el)
    }) 
}
window.onscroll = checkAnimation;
