var response=context.getVariable('response.content');
if(response===""){
    context.setVariable('du.response',"null");
}
else
{
    context.setVariable('du.response', context.getVariable('response.content'));
}