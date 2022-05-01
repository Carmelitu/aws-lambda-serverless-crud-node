const AWS = require('aws-sdk')

module.exports.getTasks = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient()
  
    const result = await dynamodb.scan({
      TableName: 'TaskTable'
    }).promise()
  
    const tasks = result.Items
  
    return {
      status: 200,
      body: {
        tasks
      }
    }
  } catch (error) {
    console.log(error)
  }
}