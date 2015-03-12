module.exports = function(bh) {

    bh.match('list', function(ctx, json) {
        ctx.tag('ul');
        
        ctx.content((json.items || []).map(function(item) {
            return {
                elem : 'item',
                tag : 'li',
                content : item
            };
        }));
    });

};
