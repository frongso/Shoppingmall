import { Controller, Get, JsonController } from 'routing-controllers';

@JsonController('/list')
export class ListController {
  @Get('/')
  compute() {
    const set1 = new Set();
    const set2 = new Set();
    const buffer = [];

    let i = 0;
    for (; i < 100000; i++) {
      set1.add(Math.floor(Math.random() * 100000) + 1);
      set2.add(Math.floor(Math.random() * 1000000) + 1);
    }
    let j = 0;
    for (; j < 900000; j++) {
      set2.add(Math.floor(Math.random() * 1000000) + 1);
    }

    // method 1
    // 1.30 min
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

    // method 2
    set1.forEach((numberTarget) => {
      if (set2.has(numberTarget)) {
        buffer.push(numberTarget);
      }
    });

    const result = buffer.length;

    return { result, buffer };
  }
}
