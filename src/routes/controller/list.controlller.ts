import { Controller, Get, JsonController } from 'routing-controllers';

@JsonController('/list')
export class ListController {
  @Get('/')
  compute() {
    const list1 = [];
    const list2 = [];
    const buffer = [];

    // O(n)
    let i = 0;
    for (; i < 100000; i++) {
      list1.push(Math.floor(Math.random() * 100000) + 1);
      list2.push(Math.floor(Math.random() * 1000000) + 1);
    }
    // O(n)
    let j = 0;
    for (; j < 900000; j++) {
      list2.push(Math.floor(Math.random() * 1000000) + 1);
    }

    console.log('builded list');

    // // method1
    // list2.forEach((numberTarget) => {
    //   if (!buffer.includes(numberTarget)) {
    //     if (list1.includes(numberTarget)) {
    //       buffer.push(numberTarget);
    //     }
    //   }
    // });

    // method 2
    // 1.30 min
    list2.forEach((numberTarget) => {
      if (!buffer.includes(numberTarget)) {
        let v = 0;
        for (; v < list1.length; v++) {
          if (list1[v] === numberTarget) {
            buffer.push(numberTarget);
            list1.splice(v, 1);
            break;
          }
        }
      }
    });

    // // method 3
    // list2.forEach((numberTarget) => {
    //   if (!buffer.includes(numberTarget)) {
    //     let v = 0;
    //     for (; v < list1.length; v++) {
    //       if (list1[v] === numberTarget) {
    //         buffer.push(numberTarget);
    //         list1.splice(v, 1);
    //         break;
    //       }
    //     }
    //   }
    // });

    const result = buffer.length;

    return { result, buffer };
  }
}
