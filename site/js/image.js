// WHEN IMAGE IS HOVERED
// THIS FUNCTION IS EXECUTED
showHover = (event) => {
    if(!event.getElementsByClassName('imageHover')[0].style.height){
        event.getElementsByClassName('imageHover')[0].style.paddingTop = (event.clientHeight-102)/2+'px';
        event.getElementsByClassName('imageHover')[0].style.paddingBottom = (event.clientHeight-102)/2+'px';
        event.getElementsByClassName('imageHover')[0].style.marginTop = -(event.clientHeight-45)+'px';
        event.getElementsByClassName('imageHover')[0].style.width = event.clientWidth-45+'px';
    }
    event.getElementsByClassName('image')[0].style.opacity = 0;
    event.getElementsByClassName('imageHover')[0].style.opacity = 1;
}

hideHover = (event) => {
    event.getElementsByClassName('imageHover')[0].style.opacity = 0;
    event.getElementsByClassName('image')[0].style.opacity = 1;
}