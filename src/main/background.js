var BackgroundLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        this.addChild(new cc.LayerColor(cc.color(150, 226, 219)));
        return true;
    }
});