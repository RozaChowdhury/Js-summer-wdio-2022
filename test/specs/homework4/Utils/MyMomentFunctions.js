const moment = require("moment");

class MyMomentFunctions {


    static getCurrentDate() {
        return moment().date();
    }
    static getCurrentMonth() {
        return moment().format('MMM');
    }
    static getCurrentYear() {
        return moment().format('YYYY');
    }

    static addInCurrentDate() {
        
    }
    static addDays(num){
        return moment().add(num, 'days');
    }

}
module.exports = MyMomentFunctions;