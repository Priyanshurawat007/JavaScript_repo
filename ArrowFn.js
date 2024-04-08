// // const materials=['H','HE','LI','BE'];
// // console.log(materials.map
// //     (materials=>materials.length));



// //   const arrow=  (a)=>(a+100);
// //     console.log(a);


// //     const object1 = {};

// // Object.defineProperty(object1, 'property1', {
// //   value: 42,
// //   writable: false,
// // });

// // // object1.property1 = 77;


// // console.log(object1.property1);

// const obj = {
//     num: 100,
//   };
  
//   // Setting "num" on globalThis to show how it is NOT used.
//   globalThis.num = 42;
  
// //   A simple traditional function to operate on "this"
//   const add = function (a, b, c) {
//     return this.num + a + b + c;
//   };
  
//   console.log(add.call(obj, 1, 2, 3)); // 106
//   console.log(add.apply(obj, [1, 2, 3])); // 106
//   const boundAdd = add.bind(obj);
//   console.log(boundAdd(1, 2, 3)); // 106
  
//   const obj2 = {
//     num: 100,
//   };
  
//   // Setting "num" on globalThis to show how it gets picked up.
//   globalThis.num = 42;
  
//   // Arrow function
//   const add1 = (a, b, c) => this.num + a + b + c;
  
//   console.log(add.call(obj2, 1, 2, 3)); // 48
//   console.log(add.apply(obj2, [1, 2, 3])); // 48
//   const boundAdd1 = add.bind(obj2);
//   console.log(boundAdd(1, 2, 3)); // 48


const obj = {
    count: 10,
    doSomethingLater() {
      setTimeout(function () {
        // the function executes on the window scope
        this.count++;
        console.log(this.count);
      }, 300);
    },
  };
  
//   obj.doSomethingLater(); // logs "NaN", because the property "count" is not in the window scope.
  