const AWS = require('aws-sdk')

module.exports.updateTask = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const { id } = event.pathParameters
    const { done } = JSON.parse(event.body)
  
    const result = await dynamodb.update({
      TableName: 'TaskTable',
      Key: { id },
      UpdateExpression: 'set done = :done',
      ExpressionAttributeValues: {
        ':done': done
      },
      ReturnValues: 'ALL_NEW'
    }).promise()
  
    const task = result.Item
  
    return {
      status: 200,
      body: {
        message: 'Tarea actualizada correctamente'
      }
    }
  } catch (error) {
    console.log(error)
  }
}