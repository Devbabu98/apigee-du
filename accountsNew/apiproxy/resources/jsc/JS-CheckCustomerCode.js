  var operation = context.getVariable("proxy.pathsuffix");
  var request = JSON.parse(context.getVariable("request.content"));
  var customerCode = request.mainCustomerCode;
  
  if(operation == "/delink"){
    var customersToDelink = request.customerCodesToDelink;
        if(customersToDelink.length == 1){
            for (var i in request.customerCodesToDelink){
                var delinkCustomerCode = customersToDelink[i].customerCode;
            }
        }
  }


  var accesstoken_customerCode = context.getVariable("accesstoken.customerCode");
  
  
  if(!customerCode){
		context.setVariable('api-error.status_code', '400');
		context.setVariable('api-error.reason_phrase', 'Bad Request');
		throw new Error();

	}
	else if(operation != "/delink"){
        if (customerCode != accesstoken_customerCode){
            context.setVariable('api-error.status_code', '401');
            context.setVariable('api-error.reason_phrase', 'invalid authorization');
            throw new Error();
    	}
	}
	else{
	    if(delinkCustomerCode){
    	    if (customerCode != accesstoken_customerCode){
        	   if(delinkCustomerCode != accesstoken_customerCode){
            	    context.setVariable('api-error.status_code', '401');
                    context.setVariable('api-error.reason_phrase', 'invalid authorization');
                	throw new Error();
        	   }
    	    }
	   }
	   else{
	       if (customerCode != accesstoken_customerCode){
        	    context.setVariable('api-error.status_code', '401');
        		context.setVariable('api-error.reason_phrase', 'invalid authorization');
        		throw new Error();
    	    }
	   }
	}
	