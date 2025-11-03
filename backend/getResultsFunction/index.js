const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const pollId = event.queryStringParameters.pollId;

  const result = await dynamo
    .get({ TableName: TABLE_NAME, Key: { pollId } })
    .promise();

  if (!result.Item) {
    return { statusCode: 404, body: JSON.stringify({ message: "Poll not found" }) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      question: result.Item.question,
      votes: result.Item.votes,
    }),
  };
};
