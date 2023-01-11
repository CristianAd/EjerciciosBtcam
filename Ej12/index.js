

 function serieFibonacci(num) {
     let array = [1,1]

      for (let i = 1;  num > array.length; i++) {
          const count = array.push(array[i] + array[i-1])
         
        }
        console.log(array)

 }

 serieFibonacci(6)

 