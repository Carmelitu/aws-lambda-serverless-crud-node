const AWS = require('aws-sdk')

module.exports.deleteTask = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const { id } = event.pathParameters
  
    const result = await dynamodb.delete({
      TableName: 'TaskTable',
      Key: {
        id
      }
    }).promise()
    return {
      status: 200,
      body: {
        message: 'Task deleted'
      }
    }
  } catch (error) {
    console.log(error)
  }
}