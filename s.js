import fs from 'fs'

fs.writeFile('test/Elina_File.txt', 'daas', (e) => {
  if (e) {
    console.log(e)
  }
  console.log('file created')
})
