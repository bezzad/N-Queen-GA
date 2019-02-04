exports.StopWatch = class StopWatch {
    static start() {
        this.startTime = new Date().getTime();
    }

    static stop() {
        let duration = new Date().getTime() - this.startTime;
        if (duration > 5000)
            console.log('duration:', duration / 1000, "sec");
        else
            console.log('duration:', duration, "ms");
    }
}