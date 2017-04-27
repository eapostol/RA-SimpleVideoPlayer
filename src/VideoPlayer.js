/**
 * Created by Edward_J_Apostol on 2017-02-07.
 */

export default class VideoPlayer{

    constructor(){
        this.player = document.getElementById("video_player");
        this.links = this.player.getElementsByTagName('a');
        this.videotarget = "";
        this.fileName = "";
        this.video = null;
        this.source = "";
        this.initLinks(this.links);
    }

    initLinks(links){
        for (let i=0; i<links.length; i++) {
            // this.links[i].onclick = handler;
            (links[i]).addEventListener("click",this.linkHandler,false)
        }
    }

    linkHandler(e){
        // e.stopPropagation();
        e.preventDefault();
        console.log(this);
        console.log(this.fileName);
        debugger;
        this.videotarget = this.getAttribute("href");
        this.fileName = this.videotarget.substr(0, this.videotarget.lastIndexOf('.')) || this.videotarget;

        this.video = document.querySelector("#video_player video");
        this.video.removeAttribute("controls");
        this.video.removeAttribute("poster");

        this.source = document.querySelectorAll("#video_player video source");
        this.source[0].src = this.fileName + ".mp4";
        // this.source[1].src = this.fileName + ".webm";
        this.video.load();
        this.video.play();
    }
}
