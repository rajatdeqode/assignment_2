/*
Modifier:-

g,i

1) exec()   This function will Returns an array for match or null for no match
2) test()   returns true or false
3) match()  It will return an array of results or null 
4) search() Return index of first match else -1
5) replace()Returns new replaced string with all the replacements


MetaCharacters:- 

 ^ | \ () [ {   $ * + ? . 

Quantifiers:- 
*
+ 
?

Brackets
{}
[]

*/

let str = "This is improve file for improve project for improve content";

let reg = /improve/;

//const result = reg.exec(str);

//console.log(result);

//const result1=reg.test(str)

//console.log(result1)

//const result2=str.match(reg);

//console.log(result2)

/*const result3=str.search(reg)

console.log(result3)

const result4=str.replace(reg,'h')

console.log(result4)*/

str =
  "This is improve file _for improve project for improve 1content colour col? cool";

const reg1 = /^this/i; //start
const reg2 = /contents$/; //end
const reg3 = /f..e/;
const reg4 = /f*le/; // match 0 or more
const reg5 = /colou?r/; // u is optional
const reg6 = /col\?/; // match the exact one col?
const reg7 = /\w+ove/; // match the more than one
const reg8 = /\Wfile/; // return the character before file which is not belong to [a-zA-z-0-9_]
const reg9 = /\sfor/; //check white space before for
const reg10 = /\Sfor/; // not allowed space before for

const reg11 = /\dcontent/; //check digit
const reg12 = /\Dcontect/; //check non digit

const reg13 = /pro[jet]ect/; //include [jet] character in reg
const reg14 = /pro[a-zA-z]ect/; //include [a-zA-z0-9] in reg
const reg15 = /pro[^jxz]ect/; //not include charcter[jxz]
const reg16 =/co{2}l/
const reg17=/co{0,2}l/

if (reg16.test(str)) {
  final_result = reg16.exec(str);
  console.log(final_result);
} else {
  console.log("Not Match");
}
