document.addEventListener('alpine:init', () => {

    Alpine.data('enoughAirtimeWidget', function () {
        return {
            airtimeUsed: '',
            totalAirtime: null,
            airtimeLeft: '',
            totalBill() {
                this.airtimeLeft = enoughAirtime(this.airtimeUsed, this.totalAirtime);

                setTimeout(() => {
                    this.airtimeLeft = '';
                    this.airtimeUsed = '';
                    this.totalAirtime = '';
                }, 5000)
            }
        }
    });
})