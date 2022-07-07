document.addEventListener('alpine:init', () => {
    Alpine.data('greetwidget', function () {
        return {
            neighbourName: '',
            message: '',
            showgreet: false,
            greetMe() {
                this.message = greet(this.neighbourName);
                setTimeout(() => {
                    this.neighbourName = '';
                    this.message = '';
                }, 5000);
            }
        }
    });
})