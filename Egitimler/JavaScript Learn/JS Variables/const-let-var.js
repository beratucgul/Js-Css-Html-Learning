if (true) {
    var varVariable = "This is true"   /* var variable is defined globally and can be called outside of the if block  */
                                        /* var is function scoped */
                                        /* var variables can be reassigned multiple times by re-declaring the variable */
                                        /* var can be created after declared */
}


if (true) {
    let letVariable = "This is true"        /* const and let are both block scoped */
    const constVariable = "This is true"    /* The let and const variable can only be called within the block in which it is defined.  */
                                            /* let and const cannot be created after declared */
    
    const constVar = {name: "Bob"}  /* The const variable can be re-declared only when there is an object in it */
    constVar.name = "sally"         /* This code block will be run without any error and new name will be sally */
}

