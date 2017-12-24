/**
 * Created by Administrator on 2017/12/24 0024.
 */
var buffer1 = new Buffer('hello world');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);//buf.slice([start[, end]])
console.log("buffer2 content: " + buffer2.toString());
