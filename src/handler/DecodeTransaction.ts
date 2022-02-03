import { GetTransactionData, DecodeTransactionInfo } from '../index';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export default async function (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  try {
    const RequestBody = event.body;
    const ParsedBody = JSON.parse(RequestBody || '');
    if (ParsedBody != '') {
      const TrxData = await GetTransactionData(
        ParsedBody.TrxHash,
        process.env.EtherscanApiKey
      );
      const DecodedTrx = await DecodeTransactionInfo(TrxData.logs);

      return {
        statusCode: 200,
        body: JSON.stringify(DecodedTrx),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'An error occured.',
    };
  }
}
