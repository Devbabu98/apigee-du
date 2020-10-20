//get the variables that you extracted in your kvm for log configurations in order to validate if the current operation should be logged
var logLevel = context.getVariable("du.config.logLevel");
    
//retrieve the current operation in order to match to the flag
var currentOp = context.getVariable("proxy.pathsuffix").substring(1);
var replace = currentOp.replace(/\//g, "_");
var kvmSearch = replace.concat("_", context.getVariable("request.verb"));
    
context.setVariable('du.operation', kvmSearch);