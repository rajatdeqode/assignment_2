/*
Higher-Order Function: A function that receives another function as an argument or that returns a new function or both is called Higher-order functions. Higher-order functions are only possible because of the First-class function.
*/ 


const greet=(name)=>{
    return (m)=>{
        console.log(`Hii ${name} ${m}`)
    }
}

const result=greet("rajat")
result("good evening")