import {
  DynamoDBClient,
  PutItemCommand,
  GetItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
console.log(process.env.NEXT_PUBLIC_ACCESS_KEY);
const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY!,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY!,
  },
  region: process.env.NEXT_PUBLIC_REGION,
});

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    const { Items } = await client.send(
      new ScanCommand({
        TableName: process.env.NEXT_PUBLIC_TABLE_NAME,
      })
    );

    return res.status(200).json(Items);
  }
}
