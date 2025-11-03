const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const pollId = uuidv4();
  const pollItem = {
    pollId,
    question: body.question,
    options: body.options,
    votes: body.options.reduce((acc, opt) => ({ ...acc, [opt]: 0 }), {}),
    createdAt: new Date().toISOString(),
  };

  await dynamo.put({ TableName: TABLE_NAME, Item: pollItem }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Poll created successfully",
      pollId,
      options: body.options,
    }),
  };
};
