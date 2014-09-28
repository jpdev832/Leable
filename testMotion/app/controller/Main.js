Ext.define('testMotion.controller.Main', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'testMotion.view.Main'  
    ],
    
    config: {
        refs: {
            mainView: 'mainView'    
        },
        control: {
            
        }
    },
    
    init: function() {
        var me                  = this;
        var controllerOptions   = {enableGestures: true};
        var swipeRight          = _.debounce(me.onRightSwipe, 300);
        var swipeLeft           = _.debounce(me.onLeftSwipe, 300);
        var swipeUp             = _.debounce(me.onUpSwipe, 300);
        var swipeDown           = _.debounce(me.onDownSwipe, 300);
        
        me.swipeRight   = swipeRight;
        me.swipeLeft    = swipeLeft;
        me.swipeUp      = swipeUp;
        me.swipeDown    = swipeDown;
        me.swipeStart = {
            id: -1,
            position: [ 0, 0, 0 ]
        };
        me.openUrl = function(url) {
            window.open(url);
        };
        
        var callback = function(frame) {
            me.onLoop(me, frame);
        };
        Leap.loop(controllerOptions, callback);
    },
    
    onLoop: function(sender, frame) {
        if(frame.valid && frame.gestures.length > 0) {
            frame.gestures.forEach(function(gesture) {
                if(gesture.type === "swipe") {
                    var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
                    
                    if(isHorizontal){
                        if(gesture.direction[0] > 0){
                            sender.swipeRight();
                        } else {
                            sender.swipeLeft();
                        }
                    } else {
                        if(gesture.direction[1] > 0){
                            sender.swipeUp();
                        } else {
                            sender.swipeDown();
                        }                  
                    }
                }
            });
        }
    },
    
    onRightSwipe: function() {
        console.log("swipe right");
        var mv = this.getMainView();
        mv.next();
    },
    
    onLeftSwipe: function() {
        console.log("swipe left");
        var mv = this.getMainView();
        mv.previous();
    },
    
    onUpSwipe: function() {
        console.log("swipe up");
        debugger;
        var card = this.getMainView().getActiveItem();
        this.openUrl(card.getData().url);
    },
    
    onDownSwipe: function() {
        console.log("swipe down");
    }
});
