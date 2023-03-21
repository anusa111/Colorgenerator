function colorGenerator(get_red,get_green,get_blue){
    var hexCode = "#" + ((1 << 24) + (get_red << 16) + (get_green << 8) + get_blue).toString(16).slice(1,7);
    var color= "rgb(" + get_red + ", " + get_green + ", " + get_blue + ")";
    var get_div=document.getElementById("row");
    var create_div=document.createElement("div");
    create_div.id="color-card";
    create_div.style.background=color;
    create_div.innerHTML=`<button onclick=copy(\``+hexCode+`\`) class="cust-btn">${hexCode}</button>`;
    get_div.appendChild(create_div);
    // console.log(get_div);
}
function generate(){
    var check_div=document.getElementById("row");
    check_div.innerHTML=" ";
    for(var i=0;i<8;i++){
    colorGenerator(Math.random()*256,Math.random()*256,Math.random()*256);
    }
}
function copy(rec_hexCode){
    var get_hexcode=rec_hexCode;
    var textArea = document.createElement("textarea");
    textArea.value = get_hexcode;
    document.body.appendChild(textArea);
    textArea.select();
    navigator.clipboard.writeText(get_hexcode);
    document.body.removeChild(textArea);
    alert("Copied to clipboard:");
}

