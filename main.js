var img = ["download (1).png", "download (2).png", "download (3).png", "download.png"];
var name_var = ["mother", "me", "sister", "father"];
var count = 0;
function next(){debugger;
    document.getElementById("img").src = img[count];
    document.getElementById("name").innerHTML = name_var[count];
    count = count + 1;
    if (count == 4){
        count = 0;
    }
}