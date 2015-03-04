module.exports = function(bh) {

    bh.match('heading', function(ctx, json) {
        var lvl = json.lvl || 1;

        ctx.tag('h' + lvl, true);
        ctx.mod('lvl', lvl, true);
    });

/*
    wtf?
    def().match(function() { return !this._defHeadingApplied; })(function() {

        this._defHeadingApplied = true;

        var lvl = this.ctx.lvl || 1;

        applyCtx({
            block : this.block,
            tag : 'h' + lvl,
            mods : this.extend(this.ctx.mods, { lvl : lvl }),
            mix : this.ctx.mix,
            content : this.ctx.content
        });

        this._defHeadingApplied = false;

    }) */

};
