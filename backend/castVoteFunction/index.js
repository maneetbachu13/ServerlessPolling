const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const { pollId, option } = body;

  await dynamo
    .update({
      TableName: TABLE_NAME,
      Key: { pollId },
      UpdateExpression: "ADD #votes.#opt :inc",
      ExpressionAttributeNames: { "#votes": "votes", "#opt": option },
      ExpressionAttributeValues: { ":inc": 1 },
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Vote recorded successfully" }),
  };
};
