exports.myDtTime = function () {
    return Date();
    }

exports.myMessage = function () {
    return ("hello world");
}
exports.Palindrome = function (str){
    var rev="";
    var str1 = str.toString();
    for (i=str1.length-1;i>=0;i--){
        rev = rev + str1.charAt(i);
    }
    if (str1==rev) return(str1 + "is palindrome");
    else return (str1 +"is not palindrome");
    print(myMessage());
}
