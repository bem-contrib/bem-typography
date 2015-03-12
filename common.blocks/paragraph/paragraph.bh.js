module.exports = function(bh) {

    bh.match('paragraph', function(ctx, json) {
        ctx.tag('p');

        ctx.content([
            json.mark && {
                elem : 'marker',
                tag : 'span',
                content : json.mark
            },
            ctx.content()
        ], true);
    });

};
