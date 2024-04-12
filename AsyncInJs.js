function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Function Called Successfully');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('Calling Function');
    const result = await resolveAfter2Seconds();
    console.log(result);
    
  }
  
  asyncCall();
  