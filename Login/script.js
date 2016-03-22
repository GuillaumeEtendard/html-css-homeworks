window.onload = function(){

    document.forms['form'].onsubmit = function() {
        var window = document.querySelectorAll(".window");
        var modal = document.querySelectorAll(".modal");

        var height = (document.body.clientHeight);
        height = height/4;

        for (var i = 0; i < window.length; i++) {
            window[i].style.display = "block";
            window[i].style.pointerEvents = "auto";
            for(var a = 0; a < modal.length; a++){
                modal[a].style.margin = height+"px auto";
            }
        }


        return false;
    }

};
