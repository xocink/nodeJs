import express from 'express';

const app = express();

const testFn = async (isStencilComponent) => {
  if (!isStencilComponent) {
    return ' first then resolve'
  }
  const resultForSecond = await Promise.resolve(' return for second then')
  return resultForSecond;
}
const isStencil = false;
app.post('/', (req, res, next) => {

  return Promise.resolve('test resolve')
    .then(async (testStr) => {
      const result = await testFn(isStencil);
      console.log('data in first then',testStr)
      console.log(' function data in first then',result)
      if (!isStencil) {
        console.log('not stencil condition')
        res.send( testStr + result + 'shown only for not stencil component');
        return;
      }
      return testStr + result;
    })
    .then((html) => {
      console.log('data in second then',html)
      if(html) {
        res.send(html)
        return;
      }
      console.log(`log  second then`);
    })
    .catch((error) => {
      console.log('[ERROR]: ', error);
      next(error);
    });
});

app.get('/',(req,res) => {
  console.log(test());
  res.send('ss')
})

app.listen(3000,(err) => {
  if (err) {
    throw err
  }
  console.log('serer listening on PORT:3000')
})
function test () {
  let result;
  Promise.resolve('asa').then((res) => {
    result = res
  })
  return result
}
// test()
// const promisesList = commandNames.map((el) => fetch('https://calorieburning.epam.com/api/teams/' + el.id '/athletes-statistics/'))
// const promisesList = commandNames.map((el) => fetch('https://calorieburning.epam.com/api/teams/' + el.id +  '/athletes-statistics/'))
const testFn = () => {
  const results = Promise.allSettled(commandNames.map((el) => fetch('https://calorieburning.epam.com/api/teams/' + el.id +  '/athletes-statistics/')))
}
