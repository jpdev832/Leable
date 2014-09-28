Ext.define('testMotion.view.Main', {
    extend: 'Ext.Carousel',
    xtype: 'mainView',
    
    requires: [
        'Ext.TitleBar',
        'testMotion.view.Card'
    ],
    
    config: {
        fullscreen: true,
        defaults:{
            flex: 1
        },
        layout:{
            type: 'hbox',
            align: 'stretch'
        },
        
        itemLength: 600,
        
        items: [
            {
                xtype: 'card',
                height: 600,
                data: {
                    name: "Name 1",
                    url: 'http://www.hulu.com/south-park'
                }
            },
            {
                xtype: 'card',
                data: {
                    name: "Name 2"   
                }
            },
            {
                xtype: 'card',
                data: {
                    name: "Name 3"   
                }
            }
        ]
    }
});
