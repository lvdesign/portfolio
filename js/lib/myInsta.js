/*
var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: 'YOUR_CLIENT_ID'
    });
    feed.run();

Client ID  : 0dd0ac0899ef46f299b4bda3f81b2c93

Client Secret  : : ccda65416e5d4cfdb1eacba37f2aa823

2112923378.1677ed0.36bc9d9d75ce4c65b5b4636b511ef64c

accessToken:'2112923378.1677ed0.36bc9d9d75ce4c65b5b4636b511ef64c',


id app: 967126660392664
key secret -- app- 6a80b711ba81d832d0af3ba3d81fa00e



Accéder à la vérification
[LVdesign}
ID : 208868106607746

Clé secrète de l’app Instagram
0c1a405a47cc12dda94f41a996a6d31a
0c1a405a47cc12dda94f41a996a6d31a
*/
    var feedbase = new Instafeed({
        userId: '2112923378',
        accessToken:'2112923378.1677ed0.0c1a405a47cc12dda94f41a996a6d31a',
        
        get: 'user',
        tagName: 'lvdesignfr lv2018',
        sortBy: 'most-recent',
        limit:'1',
        resolution: 'low_resolution',
        orientation:'portrait',
        filter: function(image) {
    return image.tags.indexOf('lv2018') >= 0;
},
        template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    });
    feedbase.run();
