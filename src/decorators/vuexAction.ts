import 'reflect-metadata'
export declare type Constructor = {
  new (...args: any[]): any;
}
function MethodDecorator (target, name) {
  console.log(target)
  console.log(name)
}
export declare function actionVuex (event?: any): MethodDecorator
