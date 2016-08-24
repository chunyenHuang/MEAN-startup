import './app.styl';
import template from './app.html';

const appComponent = {
    template,
    controller: /* @ngInject */ class AppController {
        static get $inject() {
            return ['$timeout'];
        }
        constructor($timeout) {
            this.$timeout = $timeout;

        }
        $onInit(){
            this.message = 'Hello~';
            this.$timeout(()=>{
                this.message += 'World';
            },1500);
        }
    },
};

export default appComponent;
