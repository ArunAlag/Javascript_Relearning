// definition: modules allow us to use code from one file to another

/*
    Steps to enable the modularity feature

    Step 1: If we are using html, in the script tag, set `type = module` and we do not have to add the 'defer' attribute because `type = module` by default is deferred

    Step 1 Alternative: If not in HTML, only in node environment, then in package.json, create the property 'type' and set it's value to 'module'
*/

/*
    * Things to know?
    => To be able to import, we must first export from the target file, in this case, our target file is module2.js
    => There are 2 ways to export which is
        => export default : Called as default export
            => There can be only 1 export default
            => Whatever the variable/function name is, whenever we import we can give it any name and it will work
        => export : Called as named export
            => There can be multiple export
            => The name that we call it during the export time must match exactly when we are importing it

    structure: import <name> from <file_path> [ => importing export default]
    structure: import {<name>} from <file_path> [=> import for named export]
    => If there is multiple named export, we can use a comma separator within the curly brackets

    ~ If you want to still rename the named export, we can use the `as` keyword
    structure: import {<original_name> as <given_name>} from <file_path>
*/

import printUser from "./module2.js";
import { arun, nisha, seetha as sister } from "./module2.js";

printUser(arun);
printUser(nisha);
printUser(sister);
