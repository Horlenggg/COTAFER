function app() {
    return {
        showDatepicker: false,
        datepickerValue: '',

        year: '',

        initYear() {
            let date = new Date();
            this.month = date.getMonth();
            this.year = date.getFullYear();
            this.datepickerValue = date.getFullYear();
        },

        isYear(year) {
            const today = new Date(year.toString()).getFullYear();
            const d = new Date(this.year.toString()).getFullYear();

            return today === d ? true : false;
        },

        getYearValue(year) {
            let selectedDate = new Date(year.toString());
            this.datepickerValue = selectedDate.getFullYear();

            this.$refs.year.value = new Date(this.datepickerValue.toString());

            this.showDatepicker = false;

            this.year = new Date(this.datepickerValue.toString()).getFullYear();
        },

        getNoOfYear() {
            let yearInYears = new Date().getFullYear();
            let yearsArray = [];
            for (var i = 0; i < yearInYears; i++) {
                if (i < 12) {
                    yearsArray.push(yearInYears - i);
                }
            }

            this.no_of_years = yearsArray;
        },

        nextYear() {
            if(this.year < (new Date().getFullYear())){
                this.year++;
            } else {

            }
        },
        prevYear() {
            if(this.year <= (new Date().getFullYear()) && this.year > (new Date().getFullYear()) - 11){
                this.year--;
            } else {

            }
        }
    }
}