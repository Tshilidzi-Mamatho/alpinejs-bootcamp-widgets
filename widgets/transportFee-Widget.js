document.addEventListener('alpine:init', () => {

    Alpine.data('transportFeeWidget', function () {
        return {
            shiftMsg: '',
            shift: '',
            displayShift() {
                this.shiftMsg = transportFee(this.shift);

                setTimeout(() => {
                    this.shift = '';
                    this.shiftMsg = '';
                }, 5000)
            }
        }
    });
})