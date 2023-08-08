import { REGION,AWS_ACCES_KEY_ID,  AWS_SECRET_ACCESS_KEY} from '$env/static/private';
import { S3Client , PutObjectCommand, CreateBucketCommand, GetObjectCommand} from "@aws-sdk/client-s3";


const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: AWS_ACCES_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});


export default {
  //  Functions

	// query: async (text, params, callback) => {
	// 	return pool.query(text, params, callback);
	// }
};
