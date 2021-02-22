class Runner{
    constructor(x,y,w,h){
        this.body = createSprite(x,y,w,h);
        this.body.addAnimation("backRun",backRunAnime);
        this.body.addAnimation("animation",runAnime);
        this.body.addAnimation("jumping",r3);
        this.body.addAnimation("pause",r6);
        this.body.addAnimation("pause2",r2);
        // this.body.debug = true;
        this.body.setCollider("rectangle",-10,25,145,180);

        this.dist = null;
    }// constructor

    // getDist(){
    //     var playerDistRef = database.ref('PlayerDistance');
    //     playerDistRef.on("value",(data)=>{
    //         distance = data.val();
    //     })
    // }// getDist

    // updateDist(x){
    //     database.ref('/').update({
    //         PlayerDistance : x
    //     })
    // }// updateDist
}