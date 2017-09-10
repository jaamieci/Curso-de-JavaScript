define(function () {
   var cache = {};
    
    return {
        
        pub: function (id) {
            var args = [].slice.call(arguments, 1);

            if(!cache[id]){
                cache[id] = [];
            }
    
            for (var i = 0, i1 = cache[id].length; i < i1; i++ ){
                cache[id][id].apply(null, args);
            }
        },
        sub: function (id, fn) {
            if (!cache[id]) {
                cache[id] = [fn];
            } else {
                cache[id].push[fn];
            }
        }
    };
});