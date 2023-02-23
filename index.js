const ffmpeg = require('fluent-ffmpeg')

ffmpeg()
  .on('start', (commandLine) => console.log('Started with: ' + commandLine))
  .addInput('./image.jpg')
  .addInput('./audio.mp3')
  .save('./sweet.mp4')
  .on('end', () => console.log('Done'))
  .on('error', (error) => console.log(error.message))
