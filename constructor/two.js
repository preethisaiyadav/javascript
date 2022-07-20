class employee {
    first_name;
    set_name(){
       this.first_name="preethi"
    }
    get_name(){
        return this.first_name
    }
}
let e1 =new employee()
console.log(e1.first_name)
e1.set_name()