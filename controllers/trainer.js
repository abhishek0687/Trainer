var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');

exports.addTrainer=function(req,resp,reqBody){
	db.dbs.collection(reqBody.subCategory).find({links:reqBody.links}).toArray(function(err,data){
		if(!err && data.length==0){
			db.dbs.collection(reqBody.subCategory).insert(reqBody,function(err,result){
				if(err){
					httpMsgs.show500(req,resp,err);
				}						
				else{
					httpMsgs.send200(req,resp);
				}
			});
		}
		else{
			httpMsgs.customError(req,resp,err,data);
		}
	})
}


exports.getTrainer=function(req,resp,category){
	db.dbs.collection(category).find().toArray(function(err,data){
		if(err){
			httpMsgs.show500(req,resp,err);
		}						
		else{
			httpMsgs.sendJson(req,resp,data);
		}
	})
}


exports.updateTrainer=function(req,resp,id){
	db.dbs.collection(category).find().toArray(function(err,data){
		if(err){
			httpMsgs.show500(req,resp,err);
		}						
		else{
			httpMsgs.sendJson(req,resp,data);
		}
	})	

}

function getNextSequenceValue(sequenceName){

   var sequenceDocument = db.collection('counter').findAndModify({
      query:{_id: sequenceName },
      update: {$inc:{sequence_value:1}},
      new:true
   });
	
   return sequenceDocument.sequence_value;
}



/*var keys = [];
	var insertString = "{";
  for(var k in reqBody){ 
  	keys.push(k);
  	insertString += k+":"+reqBody[k]+",";
  }
  insertString = insertString.substring(0,insertString.length-1);

db.dbs.collectionNames(function(err,data){
		if(err){
			httpMsgs.show500(req,resp,err);
		}						
		else{
			var a=[];
			data.map(function(x) {
				if(x.name!="system.indexes" && x.name!="system.js" )
    		 a.push(x.name);    		
      })
      httpMsgs.sendJson(req,resp,a);
		}
	})	

*/
  	//subCategory:reqBody.subCategory