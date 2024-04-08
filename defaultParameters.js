// // // function go() {
// // //     return ":P";
// // //   }
  
// // //   function withDefaults(
// // //     a,
// // //     b = 5,
// // //     c = b,
// // //     d = go(),
// // //     e = this,
// // //     f = arguments,
// // //     g = this.value,
// // //   ) {
// // //     return [a, b, c, d, e, f, g];
// // //   }
  
// // //   function withoutDefaults(a, b, c, d, e, f, g) {
// // //     switch (arguments.length) {
// // //       case 0:
// // //       case 1:
// // //         b = 5;
// // //       case 2:
// // //         c = b;
// // //       case 3:
// // //         d = go();
// // //       case 4:
// // //         e = this;
// // //       case 5:
// // //         f = arguments;
// // //       case 6:
// // //         g = this.value;
// // //     }
// // //     return [a, b, c, d, e, f, g];
// // //   }
  
// // //   withDefaults.call({ value: "=^_^=" });
// // //   // [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
  
// // //   withoutDefaults.call({ value: "=^_^=" });
// // //   // [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
// // //   console.log(withoutDefaults(1));

// // const obj = {
// //     log: ['a', 'b', 'c'],
// //     get latest() {
// //       return this.log[this.log.length -3];
// //     },
// //   };
  
// //   console.log(obj.latest);
// //   // Expected output: "c"
  
// class ClassWithGetSet {
//     #msg = "hello world";
//     get msg() {
//       return this.#msg;
//     }
//     set msg(x) {
//       this.#msg = `hello ${x}`;
//     }
//   }
  
//   const instance = new ClassWithGetSet();
//   console.log(instance.msg); // "hello world"
  
//   instance.msg = "cake";
//   console.log(instance.msg); // "hello cake"
  
class Example {
    get hello() {
      return "world";
    }
  }
  
  const obj = new Example();
  console.log(obj.hello);
  // "world"
  
  console.log(Object.getOwnPropertyDescriptor(obj, "hello"));
  // undefined
  
  console.log(
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), "hello"),
  );

  