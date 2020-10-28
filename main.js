//variables
var canvas = new fabric.Canvas("myCanvas");
var block_image_width = 30;
var block_image_height = 30;
var playerX=10;
var playerY=10;
var player_object=null;
var block_object=null;


function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:playerY,
            left:playerX+50
        });
        canvas.add(block_object);
    });
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        console.log("p & Shift Press");
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;
        document.getElementById("current_height").innerHTML=block_image_height;
        document.getElementById("current_width").innerHTML=block_image_width;
    }

    if(e.shiftKey==true && keypressed=='77'){
        console.log("m & Shift Press");
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("current_height").innerHTML=block_image_height;
        document.getElementById("current_width").innerHTML=block_image_width;
    }


    if(keypressed=='67'){
        console.log("c pressed");
        new_image('cloud.jpg');
    }

    if(keypressed=='82'){
        console.log("r pressed");
        new_image('roof.jpg');
    }

    if(keypressed=='85'){
        console.log("u pressed");
        new_image('unique.png');
    }

    if(keypressed=='89'){
        console.log("y pressed");
        new_image('yellow_wall.png');
    }

    if(keypressed=='87'){
        console.log("w pressed");
        new_image('wall.jpg');
    }

    if(keypressed=='71'){
        console.log("g pressed");
        new_image('ground.png');
    }

    if(keypressed=='76'){
        console.log("l pressed");
        new_image('light_green.png');
    }

    if(keypressed=='68'){
        console.log("d pressed");
        new_image('dark_green.png');
    }

    if(keypressed=='84'){
        console.log("t pressed");
        new_image('trunk.jpg');
    }

    if(keypressed=='73'){
        console.log("i pressed");
        new_image('dirt.jpg');
    }

    if(keypressed=='69'){
        console.log("e pressed");
        new_image('leaves.jpg');
    }

    if(keypressed=='65'){
        console.log("a pressed");
        new_image('diamond_block.jpg');
    }

    if(keypressed=='70'){
        console.log("f pressed");
        new_image('flower.png');
    }



    if(keypressed=='37'){
        console.log("left pressed");
        left();
    }
    if(keypressed=='38'){
        console.log("up pressed");
        up();
    }
    if(keypressed=='39'){
        console.log("right pressed");
        right();
    }
    if(keypressed=='40'){
        console.log("down pressed");
        down();
    }
}




function up(){
    if(playerY>=10){
        playerY=playerY-block_image_height;
        console.log("Block height = "+block_image_height);
        console.log("When up arrow key is pressed, Player's X = "+playerX +" , Y = "+playerY);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(playerY<=470){
        playerY=playerY+block_image_height;
        console.log("Block height = "+block_image_height);
        console.log("When down arrow key is pressed, Player's X = "+playerX +" , Y = "+playerY);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(playerX>=10){
        playerX=playerX-block_image_width;
        console.log("Block width = "+block_image_width);
        console.log("When left arrow key is pressed, Player's X = "+playerX +" , Y = "+playerY);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(playerX<=1160){
        playerX=playerX+block_image_width;
        console.log("Block width = "+block_image_width);
        console.log("When right arrow key is pressed, Player's X = "+playerX +" , Y = "+playerY);
        canvas.remove(player_object);
        player_update();
    }
}