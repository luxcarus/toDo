export class User{
   id: string = '';
   pwd: string = '';
   constructor(values:Object={}){
      Object.assign(this,values);
   }
}