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
        
        itemLength: 500,
        
        items: [
            {
                xtype: 'card',
                data: {
                    name: "Hulu",
                    url: 'http://www.hulu.com/south-park',
                    image: 'http://assets.huluim.com/h2o/facebook_share_thumb_default_hulu.png',
                    alt: 'hulu',
                    description: 'Hulu is a premium streaming TV destination that seeks to captivate and connect viewers with the stories they love by creating amazing experiences that celebrate the best of entertainment and technology.'
                }
            },
            {
                xtype: 'card',
                data: {
                    name: "Netflix",
                    url: 'http://www.netflix.com',
                    image: 'http://siliconangle.com/files/2010/07/netflix-icon.jpg',
                    alt: 'netfix',
                    description: 'Netflix is the world’s leading Internet television network with over 50 million members in more than 40 countries enjoying more than two billion hours of TV shows and movies per month, including original series.'
                }
            },
            {
                xtype: 'card',
                data: {
                    name: "Xfinity",
                    url: 'http://www.xfinity.comcast.net',
                    image: 'http://c1345842.cdn.cloudfiles.rackspacecloud.com/assets/apps/icons/000/469/801/original.png?1291746703',
                    alt: 'xfinity',
                    description: "Receive the latest in enhanced TV, Internet and Voice with XFINITY’s all-digital platform. Comcast's XFINITY reinvents entertainment. Now you can enjoy everything you love anytime, anywhere and any way you want."
                }
            },
            {
                xtype: 'card',
                data: {
                    name: "Spotify",
                    url: 'https://play.spotify.com/',
                    image: 'http://www.xenon-webdesign.co.uk/dev/wp-contents/uploads/2013/03/new-spotify-logo.png',
                    alt: 'spotify',
                    description: 'Spotify gives you millions of songs at your fingertips. The artists you love, the latest hits, and new discoveries just for you. Hit play to stream anything you like.'
                }   
            }
        ]
    }
});
