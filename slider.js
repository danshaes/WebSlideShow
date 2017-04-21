var previousImage=1;
var totalNumberOfImages=10;
var count=1;
var slideInterval = setInterval(changeAttribute,7500);

function changeAttribute(){
    var currentImage=1;
    do{
        //calculate number of image to be loaded randomely
        //but the number should not be equal to previous one
        currentImage=getRandomInt(totalNumberOfImages);
    }
    while(previousImage==currentImage);

    if(count %2 != 0){
        $(".slide2").attr("src", "images/slider-"+ currentImage +".jpg");
        $("#image-1").addClass("image-1");
        $("#image-2").removeClass("image-2");
        

    }

    if(count %2 == 0){
        $(".slideback").attr("src", "images/slider-"+ currentImage +".jpg");
        $("#image-2").addClass("image-2");
        $("#image-1").removeClass("image-1");
        

    }

    //update our previous image
    previousImage=currentImage;
    count++;

    
        $("#tester").css("background-color", "yellow");
        var value=getRandomInt(10);
        $("#tester").html(value+" "+ count);

}

function drawImageCanvas(){
    var myimage=new Image();
    myimage.src="images/slider-7.jpg";
    var context=document.getElementById("mycanvas").getContext("2d");
    context.drawImage(myimage, 0, 0);
    var data=context.getImageData(0, 0, 1, 1);
    console.log(data.length);


}

function getRandomInt(numberOfImages){
    min=0;
    numberOfImages=Math.floor(numberOfImages);
    return Math.floor(Math.random() * (numberOfImages-1) + 1);
}