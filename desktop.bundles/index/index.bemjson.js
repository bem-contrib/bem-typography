({
    block : 'page',
    title : 'BEM Typography',
    favicon : 'www/favicon.ico',
    head : [{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1.0' } }],
    styles : [{ elem : 'css', url : 'index.min.css' }],
    scripts : [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            elem : 'header',
            content : [
                { block : 'heading', content : 'BEM Typography' },
                {
                    block : 'paragraph',
                    mods : { type : 'lead' },
                    content : 'Library for simple work with typography.'
                }
            ]
        },
        {
            elem : 'content',
            content : [
                {
                    block : 'section',
                    tag : 'section',
                    content : [
                        {
                            block : 'heading',
                            lvl : 2,
                            mix : { block : 'section', elem : 'title' },
                            content : 'Headings'
                        },
                        {
                            elem : 'content',
                            content : [
                                { block : 'heading', content : 'h1. Level 1' },
                                { block : 'heading', lvl : 2, content : 'h2. Level 2' },
                                { block : 'heading', lvl : 3, content : 'h3. Level 3' },
                                { block : 'heading', lvl : 4, content : 'h4. Level 4' },
                                {
                                    block : 'paragraph',
                                    content : [
                                        'Headings sizes writed in rem and uses auto calculating for pretty view.',
                                        'You can customize sizes and math model in variables block.'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    tag : 'section',
                    content : [
                        {
                            block : 'heading',
                            lvl : 2,
                            mix : { block : 'section', elem : 'title' },
                            content : 'Paragraphs'
                        },
                        {
                            elem : 'content',
                            content : [
                                {
                                    block : 'paragraph',
                                    mods : { type : 'lead' },
                                    content : [
                                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                                        'Aenean commodo ligula eget dolor. Aenean massa. ',
                                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                                        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
                                        'Nulla consequat massa quis enim.'
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    content : [
                                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                                        'Aenean commodo ligula eget dolor. Aenean massa. ',
                                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                                        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
                                        'Nulla consequat massa quis enim.'
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mods : { type : 'marked' },
                                    mark : 'nb',
                                    content : [
                                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                                        'Aenean commodo ligula eget dolor. Aenean massa. ',
                                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                                        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
                                        'Nulla consequat massa quis enim.'
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    content : 'Paragraphs sizes also customizable'
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    tag : 'section',
                    content : [
                        {
                            block : 'heading',
                            lvl : 2,
                            mix : { block : 'section', elem : 'title' },
                            content : 'Lists'
                        },
                        {
                            elem : 'content',
                            content : [
                                {
                                    block : 'list',
                                    items : [
                                        'item 1',
                                        'item 2'
                                    ]
                                },
                                {
                                    block : 'list',
                                    mods : { type : 'ordered' },
                                    items : [
                                        'ordered item 1',
                                        'ordered item 2'
                                    ]
                                },
                                {
                                    block : 'list',
                                    items : [
                                        'item 1',
                                        [
                                            'item 2',
                                            {
                                                block : 'list',
                                                items : [
                                                    'nested item 1',
                                                    'nested item 2'
                                                ]
                                            }
                                        ]
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    content : [
                                        'BEM Content library add wrapper for ',
                                        'image for caption writing and HTML5 semantic'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    tag : 'section',
                    content : [
                        {
                            block : 'heading',
                            lvl : 2,
                            mix : { block : 'section', elem : 'title' },
                            content : 'Blockquotes'
                        },
                        {
                            elem : 'content',
                            content : [
                                {
                                    block : 'blockquote',
                                    content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                                },
                                {
                                    block : 'blockquote',
                                    source : 'Anton Winogradov',
                                    content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem : 'footer',
            content : [
                {
                    block : 'paragraph',
                    content : [
                        {
                            block : 'link',
                            url : '//bem.info',
                            content : [
                                {
                                    block : 'image',
                                    url : '//rawgit.com/bem/bem-identity/master/sign/sign.png',
                                    width : '50px'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
