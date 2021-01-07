class ExampleFunction {
    msg: string = 'hello world';

    showMsg() : void {
        console.log(this.msg);
    }

    hello() : string {
        return this.msg;
    }

    showMesssag(message: string) : string {
        return message;
    }

    showMessage1(message: string, someNumber?: number) : void {
        console.log(someNumber ? message + someNumber : message);
    }

    message = (message : string) : string => {return message;}
    
}

var exampleFunction = new ExampleFunction();
exampleFunction.showMsg();