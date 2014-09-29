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
        tpl: [
            "<div class='tablecard'>",
            "<div class='image'><img src='{image}' width='400' height='275' alt='{alt}' /></div>",
            "<div class='footer'><p>{description}</p></div>",
            "</div>"
        ].join("") 
    }
});