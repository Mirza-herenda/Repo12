function myNes()
 {
    var myStorage = {
    "car": {
    "inside": {
    "glove box": "maps",
    "passenger seat": "crumbs"
    },
    "outside": {
    "trunk": "jack"
    }
    }
    };

    var glovoBoxContents;
    glovoBoxContents=myStorage.car.inside["glove box"];
    return glovoBoxContents;


    }
    console.log(myNes());
    module.exports = myNes;