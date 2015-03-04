module.exports = function(bh) {

    bh.match('blockquote', function(ctx, json) {
        ctx.tag('blockquote');

        ctx.content([
            {
                block : 'paragraph',
                mix : [{ block : ctx.block, elem : 'content' }],
                content : ctx.content()
            },
            json.source && {
                elem : 'footer',
                content : json.source
            }
        ]);
    });

    bh.match('blockquote__footer', function(ctx) {
        ctx.tag('footer');
    });

};
