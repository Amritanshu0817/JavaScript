function abc(){
    var a = 11;
    // console.log(e);    // WILL THROW AN ERROR e IS NOT DEFINED AS e AT THIS PLACE IS OUTSIDE OF ITS LEXICAL ENVIRONMENT
    def();
    function def(){
        var b = 12;
        ghi();
        function ghi(){
            var c = 13;           // VAR CAN BE USED THROUGHOUT THE BRACES OF THE PARENT FUNCTION
            jkl();
            function jkl(){
                var d = 14;
                mno();
                function mno(){
                    var e = 15;
                    console.log(a);
                }
            }
        }
    }
    // console.log(e);   // WILL THROW AN ERROR e IS NOT DEFINED AS e AT THIS PLACE IS OUTSIDE OF ITS LEXICAL ENVIRONMENT
}

abc();