/*ECMACSript vNext Module*/
//Como se exportará un modulo en ECMACScript vNext Module
module math {
    export fuction sum(x, y) { return x + y;}
    export var pi = 3,141593;
}


/* snip */

import {sum, pi} from math;
alert("2pi = " + sum(pi, pi))

