module.exports = function(bh) {

    bh.match('paragraph', function(ctx, json) {
        ctx.tag('p');
        ctx.content([
            json.mark && {
                elem : 'marker',
                content : json.mark
            },
            ctx.content()
        ]);
    });

    bh.match('paragraph__marker', function(ctx) {
        ctx.tag('span');
    });

};
