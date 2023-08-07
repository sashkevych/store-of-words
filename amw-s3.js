import { S3Client, AbortMultipartUploadCommand, GetObjectCommand } from '@aws-sdk/client-s3';

const client = new S3Client({ region: 'eu-central-1' });
client.send(new GetObjectCommand({}))