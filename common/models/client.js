'use strict';

module.exports = function(Client) {
   

      Client.observe('before save',function(ctx,modelInstance,next){
        modelInstance.shoppingCart.create(ctx.reg.body.shoppingCart,function(err,result){
        if(err){
        modelInstance,destroy();
        next(err);
        }
        next();
        });
        }); 
};
