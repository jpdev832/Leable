Ext.define('testMotion.view.Card', {
    extend: 'Ext.Container',
    xtype: 'card',

    config: {
        /*items: [
            {
                html: [
                    "<div class='tablecard'>",
                    "<div class='header'></div>",
                    "<div class='image'></div>",
                    "<div class='footer'></div></div>"
                ].join("")  
            }
        ],*/
        tpl: '<div class="tablecard"><div class="header">{name}</div><div class="image"></div><div class="footer"></div></div>'
    }
});