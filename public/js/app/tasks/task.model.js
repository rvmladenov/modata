export var Task = (function () {
    function Task(pid, user, name, res, mem, time, command) {
        this.pid = pid;
        this.user = user;
        this.name = name;
        this.res = res;
        this.mem = mem;
        this.time = time;
        this.command = command;
    }
    return Task;
}());
//# sourceMappingURL=task.model.js.map