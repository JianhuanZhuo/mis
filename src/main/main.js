var MainLayer = cc.Layer.extend({
    sprite: null,
    speed: 1,
    orient: 0,
    offset: 0,
    ctor: function () {
        this._super();
        var that = this;
        var size = cc.winSize;

        this.Label1 = new cc.LabelTTF('Default Font Label', '', 32);
        this.Label1.attr({
            x: size.width / 2,
            y: size.height / 1.3
        });
        this.addChild(this.Label1);


        this.sprite = new cc.Sprite(res.Mis_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        var KeyCode = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        };

        var MoveOffSet = 20;

        //Creating Event Listener Object
        var listener = cc.EventListener.create({
            event: cc.EventListener.KEYBOARD,
            swallowTouches: true,
            onKeyPressed: function (keyCode, event) {
                cc.log(keyCode);
                var position = that.sprite.getPosition();
                // that.runAction(cc.moveBy(2, 30, 30));
                // that.Label1.runAction(cc.moveBy(2, -30, -30))
                switch (keyCode) {
                    case KeyCode.LEFT:
                        that.offset = 1;
                        break;
                    case KeyCode.RIGHT:
                        that.offset = -1;
                        break;
                    case KeyCode.UP:
                        that.speed+=0.2;
                        // position.y += MoveOffSet;
                        break;

                    case KeyCode.DOWN:
                        // position.y -= MoveOffSet;
                        that.speed = that.speed<0.2?that.speed:that.speed-0.2;
                        break;
                }
                that.sprite.setPosition(position)
            },
            onKeyReleased: function (keyCode, event) {
                cc.log('Mouse Up');
                switch (keyCode) {
                    case KeyCode.LEFT:
                    case KeyCode.RIGHT:
                        that.offset = 0;
                        break;
                }
            }
        });
        //Added Event Listener To Sprite
        cc.eventManager.addListener(listener, this);
        this.scheduleUpdate();
        return true;
    },

    update: function (dt) {
        var that = this;
        var oo = this.orient - this.offset;

        that.orient = oo;
        var mvo = that.orient;
        var rotate = new cc.RotateTo(0.01, oo);
        var move = new cc.moveBy(0.01, Math.sin(mvo / 360 * 6.28) * that.speed, Math.cos(mvo / 360 * 6.28) * that.speed);
        // var seq = new cc.Spawn([rotate,move]);
        // var seq = new cc.Spawn([rotate,move]);
        var seq = new cc.Sequence(rotate, move);
        // this.sprite.runAction(seq);
        this.sprite.runAction(seq);
    },

    pdistance: function () {

    }
});
