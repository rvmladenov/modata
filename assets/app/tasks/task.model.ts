export class Task {
 constructor(
        public pid: string, 
        public user: string, 
        public name: string, 
        public res: number, 
        public mem: number, 
        public time: number, 
        public command: string) {
    }
}