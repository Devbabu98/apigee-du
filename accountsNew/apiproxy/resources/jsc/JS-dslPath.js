//retrieve the current operation in order to match to the flag

var currentOp = context.getVariable('proxy.pathsuffix').substring(1);
var operation = currentOp.concat("_", context.getVariable('request.verb'));
        
context.setVariable('du.operation', operation);
