var module1 = require('./ex18.1_export_module');
module1.myModule();


var module2 = require('./ex18.2_export_module');
module2().init(); // public
module2().change(); // public
//module2().verify(); // private