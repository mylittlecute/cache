//1.创建缓存
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
//2.拷贝一个缓存区
var result = buffer1.compare(buffer2);
//3.输出数据
if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}