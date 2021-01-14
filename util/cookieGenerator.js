const generator = require('generate-password');

const cookieIdGenerator = ()=>{
  return   generator.generate({
        length: 10,
        numbers: true
    });
};



module.exports = cookieIdGenerator;